<template>
  <Page>
    <template #header>
      <Navbar class="side-nav" :class="{ show: showMenu }" />
      <div class="slider-container">
        <Slider class="slider" v-slot="{ currentSlide }">
          <Slide v-for="(slide, index) in slides" :key="index">
            <div v-show="currentSlide === index + 1" class="slide-box">
              <img :src="require(`../assets/img/${slide}.webp`)" />
            </div>
          </Slide>
        </Slider>
        <div v-show="showIcon" id="nav-icon" @click="showMenu = !showMenu">
          <i v-if="!showMenu" class="fas fa-bars"></i>
          <i v-if="showMenu" class="fas fa-times"></i>
        </div>
      </div>
    </template>
    <template #main>
      <Donation />
      <AboutUs />
      <LatestCauses />
      <JoinUs />
      <ChooseUs />
      <Event />
      <NewsFeed />
    </template>
    <template #footer>
      <Footer />
    </template>
  </Page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRefsStore } from '../stores/refs.store';
import Page from '@/layouts/Page.vue';
import Slider from '@/components/slider/Slider.vue';
import Slide from '@/components/slider/Slide.vue';
import Navbar from '@/components/navigation/Navbar.vue';
import Donation from '@/components/Donation.vue';
import AboutUs from '@/components/AboutUs.vue';
import LatestCauses from '@/components/cards/LatestCauses.vue';
import JoinUs from '@/components/JoinUs.vue';
import ChooseUs from '@/components/ChooseUs.vue';
import Event from '@/components/Event.vue'
import NewsFeed from '@/components/NewsFeed.vue';
import Footer from '@/components/Footer.vue';

const slides = useRefsStore().slides;

const showMenu = ref(false);
const showIcon = ref(true);
let lastScrollPosition = 0

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', hideIcon);
    return () => {
      window.removeEventListener('scroll', hideIcon);
    }
  }
})
const hideIcon = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  if (currentScrollPosition < 0) {
    return
  }
  showIcon.value = currentScrollPosition < lastScrollPosition
  lastScrollPosition = currentScrollPosition
  console.log(currentScrollPosition)
}

</script>

<style lang="scss">
@import '../assets/styles/variables.scss';

.side-nav {
  position: absolute;
  top: 0;
  height: 100vh;
  z-index: 1000;
  transform: translateX(100%);
  transition: all 0.7s ease-in-out;

  &.show {
    transform: translateX(0);
  }
}

.slider-container {
  position: relative;
}

.slider {
  position: relative;
  height: 100vh;
  min-height: 100vh;
  top: 0;
  left: 0;

  @media screen and (min-width: 1200px) {
    height: 100vh;
    min-height: 100vh;
  }

  @media screen and (max-width: 1200px) {
    height: 80vh;
    min-height: 90vh;
  }

  @media (max-width: 990px) {
    height: 70vh;
    min-height: 70vh;
  }



  .slide-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    height: 100%;
    overflow: hidden;

    img {
      min-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

#nav-icon {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  color: $yellow;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
  z-index: 9999;

  i {
    font-size: 2rem;
    cursor: pointer;
  }
}
</style>
