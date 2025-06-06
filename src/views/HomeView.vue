<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRefsStore } from '../stores/refs.store'
import Slider from '@/components/slider/Slider.vue'
import Slide from '@/components/slider/Slide.vue'
import NavBar from '@/components/NavBar.vue'
import Header from '@/components/Header.vue'
import Donation from '@/components/Donation.vue'
import AboutUs from '@/components/AboutUs.vue'
import LatestCauses from '@/components/LatestCauses.vue'
import JoinUs from '@/components/JoinUs.vue'
import ChoseUs from '@/components/ChoseUs.vue'
import Events from '@/components/Events.vue'
import NewsFeed from '@/components/NewsFeed.vue'
import Footer from '@/components/Footer.vue'

const slides = useRefsStore().slides

const showMenu = ref(false)
const showIcon = ref(true)
let lastScrollPosition = 0

// Function to toggle body scroll
const toggleBodyScroll = (disable: boolean) => {
  if (disable) {
    // Save current scroll position
    lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    // Apply styles to disable scrolling
    document.body.style.position = 'fixed'
    document.body.style.top = `-${lastScrollPosition}px`
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'
  } else {
    // Re-enable scrolling
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    document.body.style.overflow = ''
    // Restore scroll position
    window.scrollTo(0, lastScrollPosition)
  }
}

// Watch for changes to showMenu and toggle scrolling accordingly
watch(showMenu, (newValue) => {
  toggleBodyScroll(newValue)
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', hideIcon)
    return () => {
      window.removeEventListener('scroll', hideIcon)
    }
  }
})

const hideIcon = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  if (currentScrollPosition < 0) {
    return
  }
  showIcon.value = currentScrollPosition < lastScrollPosition
  if (!showMenu.value) {
    lastScrollPosition = currentScrollPosition
  }
}
</script>

<template>
  <div class="home-container">
    <!-- Navigation Component -->
    <NavBar class="side-nav" :class="{ show: showMenu }" />

    <!-- Hero Section with Slider -->
    <section class="hero-section">
      <!-- Motto Overlay - Simple text with transparent background -->
      <div class="motto-overlay">
        <h1>
          Helping Hands <br />
          Healing Hearts
        </h1>
        <p>Together we can make a difference in the lives of those who need it most</p>
      </div>

      <div class="slider-container">
        <Slider class="slider" v-slot="{ currentSlide }">
          <Slide v-for="(slide, index) in slides" :key="index">
            <div v-show="currentSlide === index + 1" class="slide-box">
              <img :src="`/img/${slide}.webp`" alt="Charity Slide" />
            </div>
          </Slide>
        </Slider>

        <!-- Navigation Toggle Button -->
        <div v-show="showIcon" id="nav-icon" @click="showMenu = !showMenu">
          <i v-if="!showMenu" class="fas fa-bars"></i>
          <i v-if="showMenu" class="fas fa-times"></i>
        </div>
      </div>
    </section>
    <Header class="main-header" />
    <Donation />
    <AboutUs />
    <LatestCauses />
    <JoinUs />
    <ChoseUs />
    <Events />
    <NewsFeed />
    <Footer class="main-footer" />
  </div>
</template>

<style lang="scss">
/* Fade transition for slider */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Motto overlay styles */
.motto-overlay {
  position: absolute;
  top: 70%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 10;
  width: 90%;
  max-width: 700px;
  pointer-events: none;
  padding: 2rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  @media (max-width: 1200px) {
    top: 65%;
    padding: 1.8rem;
  }
  
  @media (max-width: 992px) {
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    top: 60%;
    padding: 1.2rem;
    max-width: 90%;
    text-align: center;
  }
  
  @media (max-width: 576px) {
    top: 60%;
    padding: 1rem;
    border-radius: 0.8rem;
  }

  h1 {
    color: $yellow;
    font-size: 4rem;
    margin-bottom: 1rem;
    font-weight: 800;
    letter-spacing: 1px;
    text-align: left;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    
    @media (max-width: 1200px) {
      font-size: 3.5rem;
    }
    
    @media (max-width: 992px) {
      font-size: 3rem;
      text-align: center;
    }

    @media (max-width: 768px) {
      font-size: 2.2rem;
      margin-bottom: 0.8rem;
      text-align: center;
    }
    
    @media (max-width: 576px) {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
  }

  p {
    color: white;
    font-size: 2rem;
    line-height: 1.5;
    font-weight: 500;
    text-shadow:
      2px 2px 8px rgba(0, 0, 0, 0.9),
      0 0 15px rgba(0, 0, 0, 0.7);
    max-width: 100%;
    margin: 0;
    text-align: left;
    
    @media (max-width: 1200px) {
      font-size: 1.8rem;
    }
    
    @media (max-width: 992px) {
      font-size: 1.6rem;
      text-align: center;
    }

    @media (max-width: 768px) {
      font-size: 1.3rem;
      line-height: 1.4;
      text-align: center;
    }
    
    @media (max-width: 576px) {
      font-size: 1.1rem;
      line-height: 1.3;
    }
  }
}

/* Styles for HomeView component */
.home-container {
  width: 100%;
  overflow-x: hidden;
}

.hero-section {
  position: relative;
  width: 100%;
}

.side-nav {
  position: fixed;
  top: 0;
  right: 0;
  // height: 80vh;
  z-index: 1000;
  transform: translateX(100%);
  display: none;
  transition: all 0.7s ease-in-out;

  &.show {
    transform: translateX(0);
    display: block;
  }
}

.slider-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider {
  position: relative;
  height: 100vh;
  min-height: 100vh;
  top: 0;
  left: 0;
  width: 100%;

  @media screen and (min-width: 1200px) {
    height: 100vh;
    min-height: 100vh;
  }

  @media screen and (max-width: 1200px) {
    height: 80vh;
    min-height: 90vh;
  }

  @media (max-width: 990px) {
    height: 75vh;
    min-height: 75vh;
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

.content-section {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  .welcome-section {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}

.main-header {
  width: 100%;
}

.main-footer {
  width: 100%;
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
