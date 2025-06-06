<template>
  <div class="slide">
    <transition name="slide">
      <slot />
    </transition>
  </div>
</template>


<script setup lang="ts">
// Using script setup syntax for better TypeScript integration
defineOptions({
  name: 'SlideItem'
});
</script>

<style scoped lang="scss">
@use '@/styles/_shared' as *;

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.7s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-to,
.slide-leave-active {
  opacity: 1;
}
</style>
