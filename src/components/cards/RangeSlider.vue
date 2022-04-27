<template>
  <div class="container">
    <input
      :value="myValue"
      type="range"
      class="range-slider"
      min="0"
      max="1"
      step="0.1"
    />
    <span class="range-value">{{ myValue.toFixed(2) * 100 }}%</span>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  myValue: {
    type: Number,
    default: 0,
  },
});
</script>
<style scoped lang="scss">
@import '../../assets/styles/variables.scss';
.container {
  position: relative;
  height: 50px;
  width: 100%;
  margin: 5px auto;

  .range-slider {
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-20%, -50%);
    width: 80%;
    height: 5px;
    border-radius: 1rem;
    outline: none;
  }
  .range-value {
    position: absolute;
    background-color: #fff;
    top: 50%;
    right: -3%;
    transform: translate(-50%, -50%);
    width: 42px;
    height: 30px;
    border-radius: 0.5rem;
    color: $gray;
    font-weight: 600;
    border: 1px solid $gray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
