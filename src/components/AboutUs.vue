<template>
  <div class="box">
    <div class="image-box">
      <div class="image-one">
        <div class="image">
          <img src="../assets/img/water.webp" alt="" />
        </div>
      </div>
      <div class="inner-img-box">
        <div class="image">
          <img src="../assets/img/medicine.webp" alt="" />
        </div>
        <div class="image">
          <img src="../assets/img/school.webp" alt="" />
        </div>
      </div>
    </div>
    <div class="text">
      <div>
        <span><i class="far fa-heart"></i>About Us</span>
        <h1>Fight for right cause for save the world</h1>
        <p>
          From hunger to disaster relief, international charity organizations
          exist to address the many causes that affect those around the world.
          There are several types of international charities that are dedicated
          to promoting peace, defending human rights, providing disaster relief
          and more. Each of these organizations has a specific mission that it
          is devoted to and strives to make a difference in the lives of those
          who need assistance the most.
        </p>
      </div>
      <div class="motivation">
        <div>
          <ul>
            <li><i class="fas fa-check"></i> &nbsp; Food and water charity</li>
            <li><i class="fas fa-check"></i> &nbsp; Sent a gift anytime</li>
            <li><i class="fas fa-check"></i> &nbsp; Make donation</li>
            <li><i class="fas fa-check"></i> &nbsp; 24/7 support</li>
          </ul>
        </div>
        <div class="img">
          <img src="../assets/img/motivation-image.webp" alt="" />
          <span
            ><cite>Mironton T.</cite><br /><br />Life is a long lesson in
            humanity</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
@import '../assets/styles/variables.scss';
.box {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .image-box {
    flex: 1 1 40rem;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;

    .inner-img-box {
      display: flex;
      margin: 0.5rem 0;
      gap: 0.5rem;
    }

    .image {
      border-radius: 1rem;
      overflow: hidden;
      position: relative;
      transition: all 0.5s ease;

      &:hover img {
        transform: scale(1.1);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s ease;
      }
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 4rem;
        font-weight: 300;
      }

      &:nth-child(1) i {
        color: $teal;
      }
      &:nth-child(2) i {
        color: $yellow;
      }
      &:nth-child(2) i {
        color: $coral;
      }
    }
  }

  .text {
    flex: 1 1 40rem;
    width: 50%;
    padding: 3rem;

    span {
      font-family: 'Shalimar';
      color: $red;
      font-size: 2rem;
    }
    h1 {
      font-size: 4rem;
      font-weight: 600;
      color: $blue;
      margin: 3rem auto;

      @media (max-width: 750px) {
        font-size: 2rem;
      }
    }
    p {
      line-height: 1.7rem;
    }
    .motivation {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 1.5rem;
      margin-top: 3rem;
      li {
        padding: 0.5rem;
        margin: 0.5rem;
        font-weight: 700;
        @media (max-width: 750px) {
          font-size: 0.8rem;
        }
        i {
          color: $teal;
        }
      }
      .img {
        position: relative;
        width: 18rem;
        height: 12rem;
        overflow: hidden;
        border-radius: 1rem;
        @media (max-width: 750px) {
          margin-top: 2rem;
        }

        img {
          width: 100%;
        }
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: $coral;
          opacity: 0.3;
          border-radius: 1rem;
          z-index: 666;
        }
        span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Roboto';
          color: $white;
          font-size: 0.9rem;
          font-weight: 700;
          text-align: center;
          z-index: 6666;
        }
      }
    }
  }
}
</style>
