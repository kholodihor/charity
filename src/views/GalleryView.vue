<template>
  <div class="container">
    <router-link class="link" :to="{ name: 'Home' }"><i class="fa-solid fa-house"></i></router-link>
    <h1>Gallery</h1>
    <div class="images">
      <div class="img-box" v-for="(image, index) in images" :key="index" @click="openImage(image)">
        <div class="image">
          <img :src="require(`../assets/gallery/${image}.webp`)" :alt="'Gallery image ' + (index + 1)" loading="lazy" />
          <div class="overlay">
            <i class="fas fa-search-plus"></i>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Image Modal -->
    <div class="modal" v-if="selectedImage" @click="selectedImage = null">
      <div class="modal-content">
        <img :src="require(`../assets/gallery/${selectedImage}.webp`)" :alt="'Selected image'" />
        <button class="close-btn" @click.stop="selectedImage = null">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
    <footer>
      <div class="contact">
        <div class="phone">
          <i class="fas fa-phone"></i> &nbsp; +123 456 789
        </div>
        <div class="mail">
          <i class="far fa-envelope"></i> &nbsp; email@.mail
        </div>
      </div>
      <div class="social">
        <a href=""> <i class="fab fa-facebook-f"></i></a>
        <a href=""> <i class="fab fa-twitter"></i></a>
        <a href=""> <i class="fab fa-instagram"></i></a>
        <a href=""> <i class="fab fa-youtube"></i></a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRefsStore } from '../stores/refs.store';
import { ref } from 'vue';

const images = useRefsStore().images;
const selectedImage = ref<string | null>(null);

const openImage = (image: string) => {
  selectedImage.value = image;
};
</script>

<style scoped lang="scss">
.container {

  .link {
    position: absolute;
    top: 2.5rem;
    left: 2.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: $black;

    &:hover {
      color:$yellow;
    }
  }
  h1 {
    font-size: 5rem;
    text-align: center;
    font-family: 'Shalimar';
    color: $yellow;
    letter-spacing: 0.3rem;
  }

  .images {
    max-width: 90rem;
    margin: 2rem auto;
    columns: 4;
    column-gap: 1.5rem;
    padding: 1.5rem;
    background: #fff;
    
    @media (max-width: 1200px) {
      columns: 3;
    }

    @media (max-width: 850px) {
      columns: 2;
    }

    @media (max-width: 570px) {
      columns: 1;
      padding: 1rem;
    }

    .img-box {
      break-inside: avoid;
      margin-bottom: 1.5rem;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: translateY(-5px);
        
        .overlay {
          opacity: 1;
        }
      }

      .image {
        position: relative;
        width: 100%;
        
        img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;

          i {
            color: white;
            font-size: 2rem;
          }
        }
      }
    }
  }

  footer {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 0.5rem;
    text-align: center;
    color: $black;

    @media (max-width: 570px) {
      flex-wrap: wrap;
      gap: 2rem;
    }
    .contact {
      display: flex;
      align-items: center;
      gap: 3rem;
      font-size: 1.3rem;
      cursor: pointer;

      @media (max-width: 570px) {
        font-size: 1rem;
      }
    }
  }

  .social i {
    color: #262626;
    padding: 0.5rem;
    margin: 0 1rem;
    font-size: 1.3rem;
    cursor: pointer;

    &:hover {
      color: $yellow;
      transform: scale(1.2);
    }
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 2rem;

    .modal-content {
      position: relative;
      max-width: 90%;
      max-height: 90vh;

      img {
        max-width: 100%;
        max-height: 90vh;
        object-fit: contain;
      }

      .close-btn {
        position: absolute;
        top: -2rem;
        right: -2rem;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
        
        &:hover {
          color: $yellow;
        }
      }
    }
  }
}
</style>
