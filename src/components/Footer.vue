<template>
  <div class="box">
    <div class="move-up">
      <span @click="moveUp"><i class="fas fa-arrow-circle-up fa-2x"></i></span>
    </div>
    <div class="skew-first">
      <div class="container">
        <div class="about">
          <h2>About us</h2>
          <p>
            What Is A Charitable Organization? Charitable organization is a kind
            of institution or a business that falls under the category of NPO or
            non-profit organization. It can be run privately as well as
            publicly. This type of organization is often called a foundation or
            charity. It can be based on educational, religious or even based on
            public interest activities. The law and regulation of the charity is
            dependent on the country or the region where it has been established
            and operated. A charity is something which is gifted or donated to
            an organization or an individual to help them or to benefit them.
          </p>
          <div class="phone">
            <i class="fas fa-phone"></i> &nbsp; +123 456 789
          </div>
          <div class="phone">
            <i class="fas fa-phone"></i> &nbsp; +987 654 321
          </div>
          <div class="mail">
            <i class="far fa-envelope"></i> &nbsp; email@.mail
          </div>
        </div>
      </div>
    </div>
    <div class="skew-second">
      <div class="container">
        <div class="follow">
          <h2>Follow us</h2>
          <p>Let us be Social</p>
          <div class="social">
            <a href=""> <i class="fab fa-facebook-f"></i></a>
            <a href=""> <i class="fab fa-twitter"></i></a>
            <a href=""> <i class="fab fa-instagram"></i></a>
            <a href=""> <i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="gallery">
          <div class="flex-row">
            <img src="../assets/img/footer1.webp" alt="photo1" />
            <img src="../assets/img/footer2.webp" alt="photo2" />
            <img src="../assets/img/footer3.webp" alt="photo3" />
          </div>
          <div class="flex-row">
            <img src="../assets/img/footer4.webp" alt="photo4" />
            <img src="../assets/img/footer5.webp" alt="photo5" />
            <img src="../assets/img/footer6.webp" alt="photo6" />
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>Copyright &copy; byCold{{ year }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const moveUp = () => {
  window.scrollTo(0, 0);
};
const year = new Date().getFullYear().toString();
</script>

<style scoped lang="scss">
.box {
  width: 100vw;
  position: relative;
  overflow: hidden;

  .move-up {
    position: absolute;
    right: 49%;
    top: 2%;
    cursor: pointer;
    z-index: 99999;
    @media (max-width: 630px) {
      display: block;
      margin: 0 auto;
      right: 47%;
    }

    i {
      font-size: 2.5rem;
      transition: all 0.2s ease;

      &:hover {
        color: $yellow;
      }
    }
  }
  .skew-first {
    background: $blue;
    padding: 6rem 0;
    transform: skew(0deg, -10deg) translateY(-120px);
    overflow: hidden;
    color: $white;

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 3rem;
      transform: skew(0deg, 10deg);
      overflow: hidden;
      display: flex;

      @media (max-width: 700px) {
        flex-wrap: wrap;
      }

      .about {
        margin-top: 5rem;
        width: 50%;
        padding: 1rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex: 1 1 40rem;

        @media (max-width: 630px) {
          text-align: center;
          margin-top: 3rem;
        }

        h2 {
          color: var(--white);
          padding: 0.7rem;
          font-size: 2.5rem;

          @media (max-width: 630px) {
            margin: 0 auto;
          }
        }
        p {
          font-size: 1rem;
          margin: 0;
          padding: 0;
          width: 80%;
          line-height: 1.5rem;

          @media (max-width: 630px) {
            margin: 0 auto;
          }
        }
        .phone,
        .mail {
          margin-top: 1rem;
          padding: 0.7rem;
          color: $white;
        }
      }
    }
  }
  .skew-second {
    position: relative;
    padding: 3rem;
    font-family: arial;
    color: #262626;
    transform: translateY(-5rem);

    .container {
      transform: none;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 700px) {
        flex-wrap: wrap;
      }

      .follow {
        padding: 2rem;
        width: 50%;
        flex: 1 1 45rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: all 0.3s ease;

        h2 {
          font-size: 2.5rem;
          padding: 1rem;
        }

        p {
          font-size: 1rem;
          line-height: 1.5rem;
          text-align: right;
        }

        .social {
          padding: 1rem;
          margin-top: 2rem;
          font-size: 1.5rem;

          i {
            padding: 1rem;
            transition: all 0.2s ease;
          }
          a:hover i {
            color: $teal;
            transform: scale(1.2);
          }
        }
      }
      .gallery {
        width: 50%;
        flex: 1 1 45rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .flex-row {
          display: flex;
          gap: 0.5rem;
          margin: 0.2rem;

          img {
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
  .copyright {
    width: 100%;
    padding: 0.5rem;
    text-align: center;
    color: $white;
    background: $blue;
  }
}
</style>
