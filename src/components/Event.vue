<template>
  <section class="events">
    <div class="title">
      <span><i class="far fa-heart"></i>Events</span>
      <h1>Featured Events</h1>
    </div>
    <div class="box">
      <form action="#" @submit.prevent="addEvent">
        <label for="">
          <span class="visually-hidden">Date</span>
          <input v-model="eventDate" type="date" data-test="new-event-date" />
        </label>
        <label for="">
          <span class="visually-hidden">Date</span>
          <input
            v-model="eventTitle"
            type="text"
            placeholder="Name of the Event"
            data-test="new-event-title"
          />
        </label>
        <label for="">
          <span class="visually-hidden">Date</span>
          <input
            v-model="eventPlace"
            type="text"
            placeholder="Place of the Event"
            data-test="new-event-place"
          />
        </label>
        <button
          type="submit"
          class="add"
          aria-label="Add Event"
          data-test="form"
        >
          Add Event
        </button>
      </form>

      <template v-if="true">
        <div class="container">
          <div
            class="card"
            :class="{ done: event.booked }"
            v-for="(event, id) in eventStore.events"
            :key="id"
            data-test="event"
          >
            <div class="date">
              <span>{{ event.date }}</span>
            </div>
            <div class="event">
              <span>Charity</span>
              <h4>{{ event.title }}</h4>
            </div>
            <div class="place">
              <p>{{ event.place }}</p>
            </div>
            <div class="buttons">
              <button
                class="book"
                aria-label="Book Your Table"
                @click="updateEvent(event.id), (event.booked = true)"
                v-if="!event.booked"
              >
                Book Your Table
              </button>
              <button
                class="cancel"
                aria-label=" Cancel Booking"
                @click.prevent="event.booked = false"
                v-else
              >
                Cancel Booking
              </button>
              <button
                class="remove"
                aria-label="Remove Event"
                @click.prevent="deleteEvent(event.id)"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useEventStore } from '@/stores/event.store';

const eventDate = ref();
const eventTitle = ref();
const eventPlace = ref();
const eventStore = useEventStore();

function addEvent(): void {
  eventStore.addEvent(eventTitle.value, eventDate.value, eventPlace.value);
  eventTitle.value = '';
  eventPlace.value = '';
}

function deleteEvent(id: string): void {
  eventStore.deleteEvent(id);
}

function updateEvent(id: string): void {
  eventStore.updateEvent(id);
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';
.events {
  padding: 1rem;
  .title {
    text-align: center;
    padding: 1rem;
    span {
      font-family: 'Shalimar';
      color: $red;
      font-size: 2rem;
    }
    h1 {
      font-size: 4rem;
      color: $blue;
    }
  }
  .box {
    width: 100%;
    padding: 2rem;
    margin-top: 2rem;

    @media (max-width: 550px) {
      display: flex;
      flex-wrap: wrap;
    }
    input {
      padding: 1rem;
      width: 30%;
      border: 1px solid $gray;
      border-radius: 1rem;
      margin-left: 1rem;

      @media (max-width: 550px) {
        width: 95%;
        margin: 0.5rem auto;
        padding: 0.7rem;
      }
    }
    button.add {
      display: block;
      width: 50%;
      margin: 2rem auto 0;
      padding: 0.7rem 1.5rem;
      background: $teal;
      border-radius: 1rem;

      &:hover {
        background: $yellow;
      }
    }
  }
  .container {
    background: #fff;
    width: 80%;
    padding: 1rem;
    margin: 2rem auto;
    @media (max-width: 700px) {
      padding: 0.5rem;
      width: 100%;
    }

    .card {
      width: 100%;
      padding: 2rem 0;
      margin: 1rem auto;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      box-shadow: 0 0 5px #ccc;

      &.done {
        background-color: $lightgreen;
      }

      @media (max-width: 700px) {
        padding: 1rem 0;
      }
      @media (max-width: 500px) {
        flex-wrap: wrap;
        text-align: center;
      }

      .date,
      .event,
      .place {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .buttons {
        width: 25%;
        margin-right: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 0.3rem;

        @media (max-width: 500px) {
          width: 100%;
          margin: 0.5rem 0;
        }

        button {
          padding: 1rem;
          cursor: pointer;
          border-radius: 1rem;
          @media (max-width: 990px) {
            padding: 0.7rem 1.5rem;
          }
          @media (max-width: 700px) {
            padding: 0.5rem 1rem;
          }
          &.book {
            background: $teal;
          }
          &.cancel {
            background: $coral;
          }
          &.remove {
            background: $red;
          }
          &:hover {
            background: $yellow;
          }
        }
      }
      .date span {
        display: block;
        padding: 1rem;
        background: $yellow;
        border-radius: 1rem;
        margin-right: 5rem;
        @media (max-width: 990px) {
          margin-right: 1rem;
          padding: 0.7rem;
        }
        @media (max-width: 700px) {
          margin-right: 1rem;
          padding: 0.5rem;
        }
      }
      .event span {
        font-family: 'Shalimar';
        color: $red;
        font-size: 1.5rem;
      }
      .event h4 {
        color: $blue;
        font-size: 1.3rem;
      }
      .place {
        color: $gray;
      }
    }
  }
}
</style>
