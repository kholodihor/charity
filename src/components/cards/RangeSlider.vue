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
    <span class="range-value">{{ +myValue.toFixed(2) * 100 }}%</span>
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
    height: 10px;
    background: #ccc;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 1rem;
    outline: none;
    overflow: hidden;
    box-shadow: inset 0 0 5px $gray;
  }
  .range-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $white;
    box-shadow: -407px 0 0 400px $blue;
  }
  .range-slider::-moz-range-thumb {
    -moz-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $white;
    box-shadow: -407px 0 0 400px $blue;
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
