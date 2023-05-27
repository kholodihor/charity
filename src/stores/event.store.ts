import { IEvent } from '@/interfaces/interfaces';
import { defineStore } from 'pinia';
import { v4 as uuid } from 'uuid';

interface EventState {
  events: IEvent[];
}

export const useEventStore = defineStore({
  id: 'events',
  state: (): EventState => ({
    events: [
      {
        id: uuid(),
        date: '2024-02-15',
        title: 'Year Renovation Program 2024',
        place: 'New York',
        booked: false,
      },
      {
        id: uuid(),
        date: '2023-11-15',
        title: 'Year Renovation Program 2023',
        place: 'New York',
        booked: false,
      },
    ],
  }),
  getters: {},
  actions: {
    async addEvent(title: string, date: string, place: string): Promise<void> {
      this.events.unshift({
        date,
        title,
        place,
        booked: false,
        id: uuid(),
      });
    },
    async deleteEvent(id: string): Promise<void> {
      this.events = this.events.filter((event) => event.id !== id);
    },
    async updateEvent(id: string): Promise<void> {
      const event = this.events.find((event) => event.id === id);
      if (event) {
        event.booked = !event.booked;
      }
    },
  },
  persist:true
});
