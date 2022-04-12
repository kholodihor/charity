<template>
  <div class="slider">
    <div class="slider-bar" ref="bar">
      <div class="slider-handle" :style="handleStyle" ref="handle">
        <span>{{ this.value.toFixed(2) * 100 }}%</span>
      </div>
      <div class="slider-fill" :style="fillStyle"></div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
.slider-bar {
  width: 100%;
  height: 0.3rem;
  background-color: #ccc;
}
.slider-handle {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: var(--coral);
  position: absolute;
  left: 0;
  top: calc(50% - 1rem);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider-handle span {
  color: var(--white);
  font-size: 0.8rem;
}
.slider-fill {
  width: 100%;
  height: 100%;
  background-color: var(--coral);
}
</style>
