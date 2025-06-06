<template>
  <div class="menu">
    <div class="logo">
      <div class="logo-img">
        <img src="/img/heart-logo.png" alt="Charity Logo" />
      </div>
      <div class="logo-text">
        <h4>D<span>o</span>nation</h4>
        <p>Charity Organisation</p>
      </div>
    </div>
    <nav class="navbar">
      <ul>
        <li>
          <router-link to="/" custom v-slot="{ href, navigate }">
            <a :href="href" @click="navigate" data-text="Home">Home</a>
          </router-link>
        </li>
        <li>
          <router-link to="/news" custom v-slot="{ href, navigate }">
            <a :href="href" @click="navigate" data-text="News">News</a>
          </router-link>
        </li>
        <li>
          <router-link to="/branches" custom v-slot="{ href, navigate }">
            <a :href="href" @click="navigate" data-text="Branches">Branches</a>
          </router-link>
        </li>
        <li>
          <a href="#donate" class="btn">Make a Donation</a>
        </li>
        <li>
          <div class="social">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'NavBar',
})
</script>

<style scoped lang="scss">
.menu {
  width: 40vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 1050px) {
    width: 50vw;
  }

  @media screen and (max-width: 650px) {
    width: 100vw;
  }

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
      }
    }
  }
}
</style>
