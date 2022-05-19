<template>
  <div class="box">
    <form action="#" >
      <input v-model="date" type="date" data-test="new-event-date" />
      <input v-model="title" type="text" placeholder="Name of the Event" data-test="new-event-title" />
      <input v-model="place" type="text" placeholder="Place of the Event" data-test="new-event-place" />
      <button type="submit" @click.prevent="onAddEvent" data-test="form">Add Event</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  emits: {
    onAddEvent({ date, title, place }) {
      if (date === '' || title === '' || place === '') {
        alert('Fill some info please!');
        return false;
      }
      return true;
    },
  },
  setup(props, { emit }) {
    const date = ref('');
    const title = ref('');
    const place = ref('');
    const onAddEvent = () => {
      emit('onAddEvent', {
        date: date.value,
        title: title.value,
        place: place.value,
      });
    };
    return {
      date,
      title,
      place,
      onAddEvent,
    };
  },
});
</script>

<style scoped lang="scss">
@import '../../assets/styles/variables.scss';
.box {
  width: 100%;
  padding: 2rem;

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
  button {
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
</style>
