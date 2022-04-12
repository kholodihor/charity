<template>
  <div class="causes">
    <div class="causes-title">
      <span><i class="far fa-heart"></i>Causes</span>
      <h1>Latest Causes</h1>
    </div>
    <div class="causes-cards">
      <div class="card" v-for="(card, index) in cards" :key="index">
        <div class="image">
          <img :src="require(`../../assets/img/${card.image}.webp`)" />
        </div>
        <RangeSlider  :myValue="card.raised / card.goal"/>
               <div class="card-content">
          <span>{{ card.subtitle }}</span>
          <h3>{{ card.title }}</h3>
          <div class="card-footer">
            <div class="footer-item">
              <i class="fas fa-globe"></i>Goal <span>${{ card.goal }}</span>
            </div>
            <div class="footer-item">
              <i class="fas fa-users"></i>Raised <span>${{ card.raised }}</span>
            </div>
            <div class="footer-item">
              <i class="fas fa-exclamation"></i>To go
              <span>${{ card.togo }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRefsStore } from '../../stores/refs.store';
import RangeSlider from './RangeSlider.vue';

const cards = useRefsStore().cards;
</script>

<style scoped lang="scss">
@import '../../assets/styles/variables.scss';
.causes {
  width: 100%;
  background: url(../../assets/img/map.png) no-repeat;
  background-size: contain;
  padding: 1rem;

  .causes-title {
    width: 100%;
    text-align: center;

    span {
      font-family: 'Shalimar';
      color: $red;
      font-size: 2rem;
    }
    h1 {
      font-size: 4rem;
      color: $blue;
    }
  }
  .causes-cards {
    width: 100%;
    display: flex;
    margin-top: 4rem;
    @media (max-width: 750px) {
      flex-wrap: wrap;
    }

    .card {
      width: 30%;
      padding: 0.2rem;
      margin: 1rem;
      border: 1px solid $black;
      margin-bottom: 2rem;
      border-radius: 1rem;

      @media (max-width: 750px) {
        width: 100%;
        transition: all 0.5s ease;
      }

      &:hover {
        box-shadow: -5px 5px 0 rgba(0, 0, 0, 0.3);
      }
      .image {
        width: 100%;
        border-radius: 1rem;
        overflow: hidden;
        transition: all 0.8s ease;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.8s ease;
        }
        &:hover img {
          transform: scale(1.1);
        }
      }
      .card-content {
        width: 100%;
        padding: 0.5rem;

        span {
          color: $red;
          font-size: 2rem;
          font-family: 'Shalimar';
        }
        h3 {
          font-weight: 500;
          color: $blue;
        }
      }
      .card-footer {
        width: 100%;
        display: flex;
        margin: 2rem 0 1rem;
        .footer-item {
          width: 33%;
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
            font-size: 1.3rem;
          }
        }
      }
    }
  }
}
</style>
