<template>
  <div class="container">
    <div class="title">
      <span><i class="far fa-heart"></i>Events</span>
      <h1>Featured Events</h1>
    </div>
    <EventInput @onAddEvent="addEvent"></EventInput>
    <ul class="task-list my-list">
      <li v-for="item in eventList" :key="item.id">
        <Event
          @onRemove="removeEvent(item.id)"
          @onBook="setBookEvent(item.id)"
          @onCancel="cancelBookEvent(item.id)"
          :event="item"
        ></Event>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Event from './Event.vue';
import EventInput from './EventInput.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    Event,
    EventInput,
  },
  setup() {
    const eventList = ref([
      {
        id: 0,
        date: '2022-02-15',
        title: 'Year Renovation Programm 2022',
        place: 'New York',
        status: false,
      },
      {
        id: 1,
        date: '2021-11-15',
        title: 'Year Renovation Programm 2021',
        place: 'New York',
        status: false,
      },
    ]);
    const addEvent = ({
      date,
      title,
      place,
    }: {
      date: string;
      title: string;
      place: string;
    }) => {
      eventList.value = [
        ...eventList.value,
        {
          id: eventList.value[eventList.value.length - 1].id + 1,
          date,
          title,
          place,
          status: false,
        },
      ];
    };
    const setBookEvent = (id: number) => {
      eventList.value = eventList.value.map((x) => {
        if (x.id === id) x.status = true;
        return x;
      });
    };
    const cancelBookEvent = (id: number) => {
      eventList.value = eventList.value.map((x) => {
        if (x.id === id) x.status = false;
        return x;
      });
    };
    const removeEvent = (id: number) => {
      eventList.value = eventList.value.filter((x) => x.id !== id);
    };
    return {
      eventList,
      addEvent,
      removeEvent,
      setBookEvent,
      cancelBookEvent
    };
  },
});
</script>

<style scoped lang="scss">
@import '../../assets/styles/variables.scss';
.container {
  padding: 2rem;

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
}
</style>
