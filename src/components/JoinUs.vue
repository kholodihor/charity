<template>
  <div class="join">
    <div class="box">
      <div class="image">
        <img src="../assets/img/join-photo.webp" alt="" />
      </div>
      <div class="text">
        <span><i class="far fa-heart"></i>Join Us</span>
        <h1>Become a volunteer to save children</h1>
        <p>
          For children in Africa to be able to thrive and develop their full
          potential, it is crucial to step up and ensure that their rights are
          fully met. Necessary actions include: protecting children from all
          forms of violence; ending poverty; ensuring healthy lives for every
          child; providing access to education and lifelong learning; empowering
          girls and women and achieving gender equality; promoting employment
          and decent work for young people as well as peaceful and inclusive
          societies in which children and families can grow and develop.
        </p>
        <a
          href="https://www.savethechildren.org/us/ways-to-help/how-to-volunteer"
          class="button"
          target="_blank"
          >Apply here <i class="fas fa-angle-double-right"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
@import '../assets/styles/variables.scss';
.join {
  width: 100%;
  padding: 1rem;

  .box {
    width: 90%;
    margin: 2rem auto;
    display: flex;
    overflow: hidden;

    @media (max-width: 850px) {
      flex-wrap: wrap;
      height: auto;
    }

    .image {
      width: 100%;
      min-height: 100%;
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
    .text {
      width: 100%;
      height: 100%;
      padding: 1rem;

      span {
        font-family: 'Shalimar';
        color: $red;
        font-size: 2rem;
      }
      h1 {
        font-size: 2.5rem;
        color: $blue;
      }
      p {
        margin-top: 2rem;
        line-height: 1.5rem;
        color: #666;
        line-height: 2rem;
      }
      .button {
        width: 30%;
        padding: 0.7rem 1.5rem;
        background: $teal;
        border-radius: 1rem;
        margin-top: 2rem;
        text-transform: uppercase;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transition: all 0.3s ease;
        i {
          margin-left: 0.2rem;
        }
        &:hover {
          background: $coral;
        }

        @media (max-width: 990px) {
          width: 50%;
          padding: 0.7rem 1rem;
        }
        @media (max-width: 850px) {
          width: 40%;
          padding: 0.7rem 1rem;
        }
        @media (max-width: 350px) {
          width: 100%;
        }
      }
    }
  }
}
</style>
