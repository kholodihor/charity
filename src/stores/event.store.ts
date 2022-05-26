// import { generateID } from '@/utils';
import { Event } from '@/interfaces/event.interface';
import { defineStore } from 'pinia';
import { v4 as uuid } from 'uuid';

interface EventState {
  events: Event[];
}

export const useEventStore = defineStore({
  id: 'events',
  state: (): EventState => ({
    events: [
      {
        id: uuid(),
        date: '2022-02-15',
        title: 'Year Renovation Programm 2022',
        place: 'New York',
        booked: false,
      },
      {
        id: uuid(),
        date: '2021-11-15',
        title: 'Year Renovation Programm 2021',
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
        id:uuid(),
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
});

// if (import.meta.webpackHot) {
//   import.meta.webpackHot.accept(
//     acceptHMRUpdate(useEventStore, import.meta.webpackHot)
//   );
// }
