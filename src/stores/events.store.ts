import { type IEvent } from '@/interfaces/interfaces';
import { defineStore } from 'pinia';
import { db, auth } from '@/firebase/firebaseInit';
import { 
  collection, 
  getDocs, 
  addDoc, 
  deleteDoc, 
  doc, 
  updateDoc, 
  query, 
  orderBy, 
  Timestamp,
  getDoc
} from 'firebase/firestore';

// Extended IEvent interface to include bookedBy field for user IDs
interface FirebaseEvent extends IEvent {
  bookedBy?: string | null;
  timestamp?: Timestamp;
}

interface EventState {
  events: FirebaseEvent[];
  loading: boolean;
  error: string | null;
}

export const useEventStore = defineStore('events', {
  state: (): EventState => ({
    events: [],
    loading: false,
    error: null
  }),
  getters: {
    getEvents: (state) => state.events,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error !== null
  },
  actions: {
    // Fetch all events from Firestore
    async fetchEvents(): Promise<void> {
      this.loading = true;
      this.error = null;
      try {
        const eventsRef = collection(db, 'events');
        const q = query(eventsRef, orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const events: FirebaseEvent[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          events.push({
            id: doc.id,
            date: data.date,
            title: data.title,
            place: data.place,
            booked: data.bookedBy !== null && data.bookedBy !== undefined,
            bookedBy: data.bookedBy || null
          });
        });
        
        this.events = events;
      } catch (error) {
        console.error('Error fetching events:', error);
        this.error = 'Failed to load events';
      } finally {
        this.loading = false;
      }
    },
    
    // Add a new event to Firestore
    async addEvent(title: string, date: string, place: string): Promise<void> {
      this.loading = true;
      this.error = null;
      try {
        const eventsRef = collection(db, 'events');
        const newEvent = {
          date,
          title,
          place,
          bookedBy: null,
          timestamp: Timestamp.now()
        };
        
        const docRef = await addDoc(eventsRef, newEvent);
        
        // Add to local state
        this.events.unshift({
          id: docRef.id,
          ...newEvent,
          booked: false
        });
      } catch (error) {
        console.error('Error adding event:', error);
        this.error = 'Failed to add event';
      } finally {
        this.loading = false;
      }
    },
    
    // Delete an event from Firestore
    async deleteEvent(id: string): Promise<void> {
      this.loading = true;
      this.error = null;
      try {
        const eventRef = doc(db, 'events', id);
        await deleteDoc(eventRef);
        
        // Remove from local state
        this.events = this.events.filter((event) => event.id !== id);
      } catch (error) {
        console.error('Error deleting event:', error);
        this.error = 'Failed to delete event';
      } finally {
        this.loading = false;
      }
    },
    
    // Book or unbook an event with the current user's ID
    async updateEvent(id: string): Promise<void> {
      this.loading = true;
      this.error = null;
      
      try {
        // Check if user is authenticated
        const currentUser = auth.currentUser;
        if (!currentUser) {
          this.error = 'You must be logged in to book an event';
          return;
        }
        
        const eventRef = doc(db, 'events', id);
        const eventDoc = await getDoc(eventRef);
        
        if (!eventDoc.exists()) {
          this.error = 'Event not found';
          return;
        }
        
        const eventData = eventDoc.data();
        const isBooked = eventData.bookedBy !== null && eventData.bookedBy !== undefined;
        const isBookedByCurrentUser = eventData.bookedBy === currentUser.uid;
        
        // If event is not booked or is booked by current user, toggle booking status
        if (!isBooked || isBookedByCurrentUser) {
          const newBookedBy = isBooked ? null : currentUser.uid;
          
          await updateDoc(eventRef, {
            bookedBy: newBookedBy
          });
          
          // Update local state
          const event = this.events.find((event) => event.id === id);
          if (event) {
            event.booked = !isBooked;
            event.bookedBy = newBookedBy;
          }
        } else {
          this.error = 'This event is already booked by another user';
        }
      } catch (error) {
        console.error('Error updating event:', error);
        this.error = 'Failed to update event';
      } finally {
        this.loading = false;
      }
    },
    
    // Check if an event is booked by the current user
    isEventBookedByCurrentUser(eventId: string): boolean {
      const currentUser = auth.currentUser;
      if (!currentUser) return false;
      
      const event = this.events.find((event) => event.id === eventId);
      return event ? event.bookedBy === currentUser.uid : false;
    }
  },
  persist: true,
});
