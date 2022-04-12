<template>
  <div class="container">
    <router-link class="link" :to="{ name: 'Home' }"><i class="fa-solid fa-house"></i> Home</router-link>
    <h1>About Us</h1>
    <div class="image"><img src="../assets/img/about.webp" alt="" /></div>
  </div>
  <article class="article">
    <p>
      What Is A Charitable Organization? Charitable organization is a kind of
      institution or a business that falls under the category of NPO or
      non-profit organization. It can be run privately as well as publicly. This
      type of organization is often called a foundation or charity. It can be
      based on educational, religious or even based on public interest
      activities. The law and regulation of the charity is dependent on the
      country or the region where it has been established and operated. A
      charity is something which is gifted or donated to an organization or an
      individual to help them or to benefit them.
      <br /><br />
      This is generally gifted to make sure that it will help the person and get
      some kind of relief or for their education and advancement. There are many
      people around the world who are still under poverty. For this they cannot
      get a proper treatment or provide proper education to their children. This
      leads to the increase of poverty as well as illiteracy. Even there are
      many states that are affected by natural disasters. Charitable
      organizations are also meant to provide them shelter, foods and many other
      necessary items.
      <br /><br />
      Procedure For Operating The procedure for forming and operating a
      charitable organization varies from one state to another state or even
      from one country to another country. You have to know the laws and factors
      required in your state or country to form a charitable entity.
      Requirements for registration and filing can vary from one state to
      another and thus consulting and taking a legal advice is also important in
      this case. This organization is not meant to benefit any single person or
      for individuals.
      <br /><br />
      To run a charitable organization it is important for the entity to apply
      for tax exempt status before being an official organization. This is a
      very important thing for the charitable organizations and in order to
      qualify and maintain this you have to do the needful. Even after approval,
      the organization has to file with IRS every year and pay the unrelated
      employment and business tax. Only the donations that are done to
      charitable organization are qualified for the tax-deductibility.
      <br /><br />
      Private And Public Organizations Some charitable organizations operate as
      private organization and some are public ones. The private foundations get
      their funds via a family, corporation, individual or any financial source.
      They mainly use their donation funds for providing grants to the
      individuals who need it or to the organizations involved in charitable
      activities.
      <br /><br />
      On the other hand, public organizations get their grants from the state or
      central Government as well as from the individuals and private
      organizations. Public organizations help in many activities. For instance
      the public organizations in US are American Cancer Society, World Wildlife
      Fund and many other services. They seek contribution usually from the
      government. It can be hospitals, churches, institutes for medical
      researches etc.
      <br /><br />
      Different Types Of Activities There are different kinds of activities of
      the charitable organizations. Some of them are those who offer relief to
      the needy people who are in distressed, poverty or underprivileged. There
      are also some who are related to educational, scientific or religious
      affiliations. Some of the activities of charitable organization also
      include the creation of public building and monuments and take care of
      them. All these are done by the donations that a charitable organization
      gets.
      <br /><br />
      They also help to combat against deterioration of the community and do
      social service for the betterment of the people. They also fight for the
      safety of public, civil rights, children safety and their rights and also
      help to remove the discrimination and prejudice from the society. The
      charitable organizations are always there to help the needy people who
      need help and provide them a safer surrounding to live a better life.
      <br /><br />
      Conclusion Nowadays there are many charitable organizations establishing
      around the world. But all are not legal or genuine. Before choosing the
      right charitable organization for donating or gifting something you have
      to make sure that the organization is genuine and reliable. Internet
      provides you all types of information and so you can browse through
      internet and find out what are the works done in past by any particular
      organizations. If the organization has a great past record and has helped
      many, then surely you can go ahead and donate. The works by a charitable
      organization is for a good cause.
    </p>
  </article>
  <div class="title"><h2>A Day In Life in Africa</h2></div>
  <div class="player">
    <VideoPlayer class="player" />
  </div>
  <footer>
    <div class="contact">
      <div class="phone"><i class="fas fa-phone"></i> &nbsp; +123 456 789</div>
      <div class="mail"><i class="far fa-envelope"></i> &nbsp; email@.mail</div>
    </div>
    <div class="social">
      <a href=""> <i class="fab fa-facebook-f"></i></a>
      <a href=""> <i class="fab fa-twitter"></i></a>
      <a href=""> <i class="fab fa-instagram"></i></a>
      <a href=""> <i class="fab fa-youtube"></i></a>
    </div>
  </footer>
</template>
<script lang="ts">
import VideoPlayer from '../components/VideoPlayer.vue';

export default {
  components: { VideoPlayer },
};
</script>

<style scoped lang="scss">
@import '../assets/styles/variables.scss';
.container {
  width: 100%;
  padding: 2rem;

  .link {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: $blue;
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
    margin-bottom: 3rem;
  }
  .image {
    width: 100%;
    margin: 0 auto;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
.article {
  padding: 2rem 5rem;
  font-size: 1.3rem;
  color: $gray;
  line-height: 2rem;
  letter-spacing: 0.05rem;
  @media (max-width: 570px) {
    padding: 2rem 3rem;
    font-size: 1.3rem;
    color: var(--gray);
    line-height: 1.7rem;
    letter-spacing: 0.05rem;
  }
}

.title {
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  color: $blue;
  margin-top: 2rem;
  h2 {
    font-family: 'Shalimar';
    @media (max-width: 570px) {
      font-size: 2.5rem;
    }
  }
}

footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  color: $white;
  background: $blue;

  @media (max-width: 570px) {
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 1rem;
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
