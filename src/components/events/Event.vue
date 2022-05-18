<template>
  <div class="container">
    <div class="card">
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
        <button class="book" @click.prevent="emitOnBook" v-if="!event.status">
          Book Your Table
        </button>
        <button class="cancel" @click.prevent="emitOnCancel" v-else>
          Cancel Booking
        </button>
        <button class="remove" @click.prevent="emitOnRemove">Remove</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppEvent',
  emits: ['onBook', 'onRemove', 'onCancel'],
  props: {
    event: {
      default: {
        id: 0,
        date: '2022-02-15',
        title: 'Year Renovation Programm 2021',
        place: 'New York',
        status: false,
      },
    },
  },
  setup(props, { emit }) {
    const emitOnRemove = () => {
      emit('onRemove');
    };
    const emitOnBook = () => {
      emit('onBook');
    };
    const emitOnCancel = () => {
      emit('onCancel');
    };

    return {
      emitOnRemove,
      emitOnBook,
      emitOnCancel,
    };
  },
});
</script>

<style scoped lang="scss">
@import '../../assets/styles/variables.scss';
.container {
  background: #fff;
  width: 80%;
  padding: 1rem;
  margin: 0 auto;
  @media (max-width: 700px) {
    padding: 0.5rem;
    width: 100%;
  }

  .card {
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 0 5px #ccc;

    @media (max-width: 700px) {
      padding: 1rem 0;
    }
    @media (max-width: 500px) {
      flex-wrap: wrap;
      text-align: center;
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
      display: flex;
      justify-content: space-around;
      align-items: center;

      @media (max-width: 500px) {
        width: 100%;
        margin: 0.5rem 0;
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
</style>
