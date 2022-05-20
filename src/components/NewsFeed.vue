<template>
  <div class="container">
    <div class="title">
      <span><i class="far fa-heart"></i>Insights</span>
      <h1>News Feed</h1>
    </div>

    <div class="insights-cards">
      <div class="card" v-for="(card, index) in news" :key="index">
        <div class="image">
          <img :src="require(`../assets/img/${card.image}.webp`)" />
        </div>
        <div class="card-content">
          <span>{{ card.subtitle }}</span>
          <h3>{{ card.title }}</h3>
          <div class="card-footer">
            <div class="footer-item">
              <i class="fas fa-user"></i> <span>{{ card.owner }}</span>
            </div>
            <div class="footer-item">
              <i class="far fa-calendar-alt"></i> <span>{{ card.date }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card form">
        <div class="card-content">
          <div class="form-title">
            <span>Newsletter</span>
            <h4>Get weekly Newsletter</h4>
          </div>
          <form action="" method="POST" @submit.prevent="onSubscribe">
            <input
              type="text"
              placeholder="Enter full Name"
              v-model.trim="state.name"
              aria-label="Your Name"
            />
            <input
              type="text"
              placeholder="Enter your Email"
              v-model.trim="state.email"
              aria-label="Your Email"
            />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import axios from 'axios';
import { useRefsStore } from '../stores/refs.store';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

const news = useRefsStore().news;

const state = reactive({
  name: '',
  email: '',
});

const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
  };
});

const v$ = useVuelidate(rules, state);


const onSubscribe = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    axios
      .post(
        `https://charity-6b405-default-rtdb.firebaseio.com/subscribe.json`,
        {
          name: state.name,
          email: state.email,
        }
      )
      .then(() => {
        alert('You subscribed successfully');
      });
    setTimeout(() => {
      state.name = '';
      state.email = '';
    }, 2000);
  } else {
    alert('Validation failed');
  }
};
</script>

<style scoped lang="scss">
@import '../assets/styles/variables.scss';
.container {
  width: 100%;
  padding: 2rem;
  .title {
    span {
      font-family: 'Shalimar';
      color: $red;
      font-size: 2rem;
      padding: 0 1rem;
    }
    h1 {
      font-size: 4rem;
      color: $blue;
      padding: 0 1rem;
    }
  }
  .insights-cards {
    width: 100%;
    display: flex;

    @media (max-width: 1024px) {
      flex-wrap: wrap;
    }

    @media (max-width: 750px) {
      flex-wrap: wrap;
    }

    .card {
      position: relative;
      width: 22%;
      padding: 1.5rem 0.3rem 0.3rem;
      margin: 1rem;
      border-radius: 1rem;
      background: $white;
      overflow: hidden;

      @media (max-width: 1024px) {
        width: 40%;
        margin: 0.5rem auto;
      }

      @media (max-width: 750px) {
        width: 100%;
      }

      &:not(:last-of-type)::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 24px;
        background: linear-gradient(-135deg, #fff 12px, transparent 0%),
          linear-gradient(135deg, #fff 12px, transparent 0%);
        background-size: 1rem;
      }
      &:not(:last-of-type)::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 24px;
        background: linear-gradient(-45deg, #fff 12px, transparent 0%),
          linear-gradient(45deg, #fff 12px, transparent 0%);
        background-size: 1rem;
      }
      .image {
        width: 100%;
        height: 50%;
        border-radius: 1rem;
        overflow: hidden;
        transition: all 0.5s ease;

        @media (max-width: 750px) {
          height: auto;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.5s ease;
        }
        &:hover img {
          transform: scale(1.1);
        }
      }
      .card-content {
        width: 100%;
        padding: 0.5rem;
        span {
          color: $teal;
          font-size: 1.5rem;
        }
        h3 {
          font-weight: 500;
          color: $blue;
        }
      }
      .card-footer {
        width: 100%;
        display: flex;
        margin: 0.5rem 0;
        .footer-item {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 0.5rem;
          text-align: center;
          color: #666;
          span {
            font-family: 'Roboto';
            color: $coral;
            margin-top: 0.55rem;
            font-size: 1rem;
          }
        }
      }
      &.form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .form-title {
          padding: 1rem;
          text-align: center;
          span {
            color: $red;
            font-family: 'Shalimar';
            font-size: 2rem;
          }
        }
        form {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          input {
            width: 100%;
            margin: 1rem 0.5rem;
            padding: 0.6rem 1.2rem;
            border-radius: 2rem;
            background: $white;
            font-weight: 600;
            font-size: 1rem;
            background: none;
            border: 1px solid $black;
            transition: all 0.3s ease;
            z-index: 555;

            &:focus {
              background: #fff;
            }
          }

          button {
            margin: 1rem auto;
            padding: 1rem 2rem;
            cursor: pointer;
            border-radius: 1rem;
            background: $teal;
            color: $white;

            &:active,
            &:hover {
              background: $coral;
            }
          }
        }
      }
    }
  }
}
</style>
