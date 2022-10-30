<template>
  <div class="container">
    <router-link class="link" :to="{ name: 'Home' }"><i class="fa-solid fa-house"></i></router-link>
    <h1>Gallery</h1>
    <div class="images">
      <div class="img-box" v-for="(image, index) in images" :key="index">
        <div class="image">
          <img :src="require(`../assets/gallery/${image}.webp`)" />
        </div>
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

const images = useRefsStore().images;
</script>

<style scoped lang="scss">
@import '../assets/styles/variables.scss';
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
  max-width: 80rem;
  margin: 2rem auto;
  columns: 3;
  column-gap: 1rem;
  padding: 1rem;
  background: #fff;

  @media (max-width: 850px) {
    max-width: 80rem;
    margin: 2rem auto;
    columns: 2;
    column-gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: 570px) {
    max-width: 80rem;
    margin: 2rem auto;
    columns: 1;
    column-gap: 1rem;
    padding: 1rem;
  }

  .image {
    max-width: 100%;
    margin: 0 0 0.7rem;
    overflow: hidden;
    img {
      width: 100%;
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
}
</style>
