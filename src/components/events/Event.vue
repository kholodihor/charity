<template>
  <div class="container">
    <div class="card">
      <div class="date">
        <span>{{ model.date }}</span>
      </div>
      <div class="event">
        <span>Charity</span>
        <h4>{{ model.title }}</h4>
      </div>
      <div class="place">
        <p>{{ model.place }}</p>
      </div>
      <div class="button">
        <button class="book" @click="emitOnDone" v-if="!model.status">
          Book Your Table
        </button>
        <button class="remove" @click="emitOnRemove" v-else>Remove</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppEvent',
  components: {},
  emits: ['onDone', 'onRemove'],
  props: {
    model: {
      requi$red: true,
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
    const emitOnDone = () => {
      emit('onDone');
    };

    return {
      emitOnRemove,
      emitOnDone,
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
      &.remove {
        background: $coral;
      }
      &:hover {
        background: $yellow;
      }
    }
    .date,
    .event,
    .place,
    .button {
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

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
