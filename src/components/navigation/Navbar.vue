<template>
  <div class="menu">
    <div class="logo">
      <div class="logo-img">
        <img src="../../assets/img/heart-logo.png" />
      </div>
      <div class="logo-text">
        <h4>D<span>o</span>nation</h4>
        <p>Charity Organisation</p>
      </div>
    </div>
    <nav class="navbar">
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.url" :data-text="link.data">{{ link.name }}</a>
        </li>
        <li>
          <router-link :to="{ name: 'Donation' }">
            <a class="btn">Make a Donation</a>
          </router-link>
        </li>
        <li>
          <div class="social">
            <a><i class="fab fa-facebook"></i></a>
            <a><i class="fab fa-instagram"></i></a>
            <a><i class="fab fa-twitter"></i></a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRefsStore } from '../../stores/refs.store';

const links = useRefsStore().links;
</script>

<style scoped lang="scss">
@import '../../assets/styles/variables.scss';
.menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: $black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  .logo {
    display: flex;
    @media screen and (max-width: 990px) {
      flex-direction: column;
    }

    .logo-img {
      width: 5rem;
      margin: 0 auto;
      img {
        width: 100%;
        @media screen and (max-width: 750px) {
          width: 75%;
        }
      }
    }
    .logo-text {
      h4 {
        font-size: 1.5rem;
        color: $white;
        padding: 0.5rem;

        span {
          color: orangered;
          font-size: 1.8rem;
        }
      }

      p {
        font-size: 0.8rem;
        font-weight: bold;
        color: $yellow;
      }
    }
  }
  .navbar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 1100px) {
      margin: 3rem auto;
    }
    @media screen and (max-width: 990px) {
      margin: 0.8rem auto;
      justify-content: flex-start;
    }
    @media screen and (max-width: 700px) {
      margin: 0.7rem auto;
    }
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    li {
      position: relative;
      margin: 1.5rem auto;
      font-weight: 700;
      font-size: 1.7rem;
      letter-spacing: 0.2rem;
      width: 100%;
      overflow: hidden;
      @media screen and (max-width: 990px) {
        margin: 1rem auto;
        font-size: 1.5rem;
      }
      @media screen and (max-width: 700px) {
        margin: 0.7rem auto;
        font-size: 1rem;
      }
    }

    a {
      position: relative;
      color: $white;
      transition: 0.54s;
      transition-delay: 0.2s;
      cursor: pointer;

      &.active {
        color: $yellow;
        text-shadow: 0 0 10px $yellow;
      }
      &:hover {
        color: rgba(255, 255, 255, 0.1);
        transition-delay: 0s;
      }
      &::before {
        content: attr(data-text);
        position: absolute;
        color: $yellow;
        text-align: center;
        top: 48%;
        left: 48%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        text-shadow: 0 0 10px $yellow;
        letter-spacing: 30px;
        white-space: nowrap;
        opacity: 0;
        transition: 0.5s;
      }
      &:hover::before {
        letter-spacing: 3px;
        opacity: 1;
        transition-delay: 0.1s;
      }
    }
    a.btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      background: $white;
      color: $black;
      font-weight: 600;
      font-size: 1.2rem;
      width: 50%;
      margin: 0 auto;
      letter-spacing: 0.1rem;
      transition: all 0.3s ease;
      @media screen and (max-width: 990px) {
        font-size: 0.8rem;
         width: 70%;
      }
      &:hover {
        background: $yellow;
      }
    }
    .social {
      a {
        margin: 0 0.5rem;
        cursor: pointer;
        i {
          font-size: 1.5rem;
          color: $white;
          @media screen and (max-width: 500px) {
            font-size: 1.2rem;
          }
        }
        &:hover i {
          color: $yellow;
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
