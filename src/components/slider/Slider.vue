<template>
  <div class="slider" ref="root">
    <slot :currentSlide="currentSlide" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Define component name for Vue devtools
defineOptions({
  name: 'SliderComponent',
})

const props = withDefaults(defineProps<{ autoPlay?: boolean; interval?: number }>(), {
  autoPlay: true,
  interval: 5000,
})

const root = ref<HTMLElement | null>(null)
const currentSlide = ref(1)
const slideCount = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

const nextSlide = () => {
  currentSlide.value = currentSlide.value >= slideCount.value ? 1 : currentSlide.value + 1
}

onMounted(() => {
  slideCount.value = root.value?.querySelectorAll('.slide').length ?? 0
  if (props.autoPlay) {
    timer = setInterval(nextSlide, props.interval)
  }
})

onUnmounted(() => {
  clearInterval(timer)
})

// Expose refs and methods for testing and external access
defineExpose({
  currentSlide,
  nextSlide,
})
</script>
