<template>
  <div class="container">
    <router-link class="link" :to="{ name: 'Home' }"><i class="fa-solid fa-house"></i></router-link>
    <h1>Charity News</h1>
    <section class="water" v-for="(article,index) in articles" :key="index">
      <div class="image-box">
        <div class="image">
                       <img :src="require(`../assets/img/${article.image}.webp`)" />
          </div>
      </div>
      <article class="article">
        <span><i class="far fa-heart"></i>{{article.theme}}</span>
        <h2>{{article.title}}</h2>
        <p>
        {{article.text}}
        </p>
      </article>
    </section>


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

import { useArticlesStore } from '../stores/articles.store';

const articles = useArticlesStore().articles;
</script>

<style scoped lang="scss">
.container {

  .link {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 1.5rem;
    font-weight: bold;

    &:hover {
      color: $yellow;
    }
  }
  h1 {
    font-size: 5rem;
    text-align: center;
    font-family: 'Shalimar';
    color: $blue;
    letter-spacing: 0.3rem;

    @media (max-width: 990px) {
      font-size: 4rem;
      margin-top: 3rem;
    }
  }

  section {
    margin: 5rem 0;
    width: 100%;
    display: flex;
    &:nth-of-type(even){
      flex-direction: row-reverse;
    }

    @media (max-width: 990px) {
      flex-wrap: wrap;
    }
    .image-box {
      width: 50%;
      flex: 1 1 45rem;
      padding: 1rem;
      overflow: hidden;

      .image {
        width: 100%;
        min-height: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 1rem;
        transition: all 0.5s ease;

        img {
          min-width: 100%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1rem;
          transition: all 0.5s ease;
        }
        &:hover img {
          transform: scale(1.1);
        }
      }
    }
    .article {
      width: 50%;
      flex: 1 1 45rem;
      padding: 1rem;
      span {
        font-family: 'Shalimar';
        color: $red;
        font-size: 2rem;
      }
      h2 {
        color: $blue;
        font-size: 2rem;
        padding: 1rem;
      }
      p {
        color: $gray;
        line-height: 2rem;
        letter-spacing: 0.05rem;
        margin-top: 1rem;
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
  color: $white;
  background: $blue;

  @media (max-width: 570px) {
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1.5rem;
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
  .social i {
    color: $white;
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
