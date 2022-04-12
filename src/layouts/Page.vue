<template>
  <div class="page">
    <header>
      <div class="header">
        <slot name="header" />
      </div>
    </header>

    <main>
      <slot name="main" />
    </main>

    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageLayout',
  components: {},
});
</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  padding: 0;
  header {
    position: relative;
  }
  main {
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  footer {
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>
