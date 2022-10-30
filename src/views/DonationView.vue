<template>
  <div class="container">
    <router-link class="link" :to="{ name: 'Home' }"
      ><i class="fa-solid fa-house"></i> Home</router-link
    >
    <div class="form">
      <form action="">
        <h1>Donation Form</h1>
        <label for="">Your Name</label>
        <input type="text" placeholder="Name" v-model="name" />
        <label for="">Sum of Donation</label>
        <input type="text" v-model="sum" placeholder="Sum" />
        <label for="">The Goal of Your Donation</label>
        <select name="goal" v-model="goal">
          <option value="water">Water</option>
          <option value="food">Food</option>
          <option value="education">Education</option>
        </select>
        <button @click.prevent="addDonation()" type="submit">
          Make a Donation
        </button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const name = ref('');
const sum = ref('');
const goal = ref('');

const db = getFirestore();
const colRef = collection(db, 'donations');
getDocs(colRef)
  .then((snapshot) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let donations: any = [];
    snapshot.docs.forEach((doc) => {
      donations.push({ ...doc.data(), id: doc.id });
    });
    console.log(donations);
  })
  .catch((err) => {
    console.log(err.message);
  });
const addDonation = async () => {
  if (name.value && sum.value && goal.value) {
    await addDoc(colRef, {
      name: name.value,
      sum: sum.value,
      goal: goal.value,
    });
  } else {
    alert('Please, fill the fields');
  }
};
</script>

<style scoped lang="scss">
@import '../assets/styles/variables.scss';
.container {
  padding: 3rem 2rem;
  min-height: 100vh;
  background: url(../assets/img/map.png) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width:550px){
    padding: 2rem 1rem;
  }

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
  form {
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    width: 60vw;
    border-radius: 1rem;
    h1 {
      padding: 1rem;
      color: $black;
    }

    input {
      padding: 0.7rem 1rem;
      margin: 1rem auto;
      width: 70%;
      border-radius: 0.5rem;
      border: 3px solid transparent;
      transition: all 0.2s ease-in-out;
      &:nth-of-type(2) {
        width: 60%;
      }
      &:focus {
        border: 3px solid $teal;
      }
        @media(max-width:550px){
    width: 90%;
  }
    }
    select {
      padding: 0.5rem 1rem;
      margin: 1rem auto;
      width: 50%;
      border: 2px solid transparent;
      border-radius: 0.5rem;
      transition: all 0.2s ease-in-out;
      &:focus {
        border: 2px solid $teal;
      }
      &:hover {
        background-color: #fff;
      }

      option {
        background: #fff;
      }
    }
    button {
      padding: 0.7rem 2rem;
      margin: 1rem;
      background: $coral;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        background: $yellow;
      }
    }
  }
}
</style>
