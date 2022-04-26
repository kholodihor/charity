<template>
  <div class="donation-box" id="donation">
    <div class="donation-box-text">
      <span>Make Donation</span>
      <h1>Become a Donar</h1>
    </div>
    <div class="donation-box-form">
      <form>
        <input type="text" placeholder="enter your name" v-model="name" />
        <input type="text" placeholder="enter sum of donation" v-model="sum" />
        <div>
          <button @click.prevent="sumFifty">50</button>
          <button @click.prevent="sumHundred">100</button>
          <select name="goal" id="" v-model="goal">
            <option value="water">Water</option>
            <option value="food">Food</option>
            <option value="education">Education</option>
          </select>

          <button @click.prevent="addDonation()" class="submit">
            Make a donation
          </button>
        </div>
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
    }).then(() => {
      alert('Your donation is accepted');
    });
  } else {
    alert('Please, fill the fields');
  }
};
const sumFifty = () => {
  return (sum.value = '50');
};
const sumHundred = () => {
  return (sum.value = '100');
};
</script>

<style scoped lang="scss">
@import '../assets/styles/variables.scss';
.donation-box {
  display: flex;
  justify-content: space-around;
  background: $blue;
  color: $white;
  padding: 2rem;
  @media (max-width: 580px) {
    flex-wrap: wrap;
  }

  .donation-box-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 975px) {
      text-align: center;
    }

    span {
      color: $teal;
    }
    h1 {
      font-size: 4rem;
      font-weight: 600;
    }
  }
  .donation-box-form {
    button {
      margin: 2rem 0.5rem;
      padding: 0.6rem 1.2rem;
      border-radius: 2rem;
      background: $white;
      font-weight: 600;
      font-size: 1rem;
      color: $white;
      opacity: 0.7;
      cursor: pointer;
      background: none;
      border: 1px solid $black;
      transition: all 0.3s ease;

      @media (max-width: 870px) {
        text-align: center;
      }
      @media (max-width: 580px) {
        width: 95%;
      }

      &.submit {
        background: $coral;

        @media (max-width: 975px) {
          margin: 0 auto;
        }
        @media (max-width: 870px) {
          width: 100%;
        }
      }
      &:focus,
      &:hover {
        background: $teal;
      }

      span {
        color: $white;
      }
    }
    input {
      margin: 2rem 0.5rem;
      padding: 0.6rem 1.2rem;
      border-radius: 2rem;
      background: $white;
      font-weight: 600;
      font-size: 1rem;
      background: none;
      border: 1px solid #262626;
      transition: all 0.3s ease;

      @media (max-width: 975px) {
        width: 95%;
      }

      &:focus {
        background: $white;
      }
    }
    select {
      padding: 0.5rem;
      margin: 2rem 0.5rem;
      width: 50%;
      background: transparent;
      color: $black;
      border: 1px solid $black;
      outline: none;
      border-radius: 0.5rem;
      transition: all 0.2s ease-in-out;
      option {
        background-color: $white;
      }

      @media (max-width: 975px) {
        width: 95%;
      }

      &:hover {
        background-color: $blue;
      }
    }
  }
}
</style>
