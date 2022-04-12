<template>
  <div class="container">
    <span class="subtitle"><i class="far fa-heart"></i>Why Choose Us</span>
    <h1>The Perfect Help</h1>
    <div class="box">
      <div class="left">
        <div class="card">
          <div class="card-header">
            <div class="card-header-left">
              <span class="font-effect-shadow-multiple">01</span>
            </div>
            <div class="card-header-right">
              <span><i class="fas fa-map-marked-alt"></i></span>
            </div>
          </div>
          <div class="card-main">
            <h3>Places to get lost</h3>
            <p>
              Charity is the largest global for crowdfunding community with
              connecting nonprofits
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="card-header-left">
              <span class="font-effect-shadow-multiple">02</span>
            </div>
            <div class="card-header-right">
              <span><i class="fas fa-users"></i></span>
            </div>
          </div>
          <div class="card-main">
            <h3>Free refugee shelter</h3>
            <p>
              Charity is the largest global for crowdfunding community with
              connecting nonprofits
            </p>
          </div>
        </div>
      </div>
      <div class="right">
        <Donation />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Donation from './Donation.vue';
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:wght@500&display=swap&effect=shadow-multiple');
@import '../assets/styles/variables.scss';

.container {
  padding: 2rem;

  h1 {
    padding: 0 1rem 1rem;
    color: $blue;
    font-size: 2.5rem;
  }
  span.subtitle {
    font-family: 'Shalimar';
    color: $red;
    font-size: 2rem;
    margin-left: 1rem;
  }
  .box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .left {
      width: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      flex: 1 1 40rem;

      .card {
        width: 45%;
        border: 1px solid $black;
        text-align: center;
        border-radius: 1rem;
        padding-bottom: 2rem;
        margin: 1rem;
        flex: 1 1 15rem;
        overflow: hidden;

        &:hover {
          box-shadow: -5px 5px 0 rgba(0, 0, 0, 0.3);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          font-size: 2.5rem;
          .card-header-left {
            padding: 1rem;

            span {
              font-size: 4rem;
              color: $teal;
              padding: 1rem;
            }
          }
          .card-header-right {
            span {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 1rem;
              background: $teal;
              border-bottom-left-radius: 50%;
              color: $white;
            }
          }
        }
        .card-main {
          padding: 1rem;
          h3 {
            padding: 1rem 0.5rem;
            color: $blue;
          }
          p {
            line-height: 1.7rem;
            color: $gray;
          }
        }
        &:nth-child(2) .card-header-left span {
          color: $coral;
        }
        &:nth-child(2) .card-header-right span {
          background: $coral;
        }
      }
    }

    .right {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex: 1 1 40rem;
      .donation-box {
        position: relative;
        width: 100%;
        display: flex;
        justify-self: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        background: url(../assets/img/c-image.webp) no-repeat;
        background-size: cover;
        color: $white;
        padding: 1rem;
        border-radius: 1rem;
        z-index: 555;
        overflow: hidden;
        
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          background: rgba(47, 65, 88, 0.9);
          z-index: -1;
        }
      }
    }
  }
}
</style>
