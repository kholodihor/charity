<template>
  <div class="slider">
    <slot :currentSlide="currentSlide" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Define component name for Vue devtools
defineOptions({
  name: 'SliderComponent'
});

const currentSlide = ref(1);
const getSlideCount = ref(0);
const autoPlayEnabled = ref(true);
const timeoutDuration = ref(5000);


const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1;

    return;
  }
  currentSlide.value += 1;
};

const autoPlay = () => {
  setInterval(() => {
    nextSlide();
  }, timeoutDuration.value);
};
if (autoPlayEnabled.value) {
  autoPlay();
}

onMounted(() => {
  getSlideCount.value = document.querySelectorAll('.slide').length;
});
</script>

