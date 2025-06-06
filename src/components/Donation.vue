<template>
  <div class="donation-box" id="donation">
    <div class="donation-box-text">
      <span>Make Donation</span>
      <h1>Become a Donar</h1>
    </div>
    <div class="donation-box-form">
      <form>
        <input 
          type="text" 
          placeholder="your name" 
          v-model.trim="state.name" 
        />
        <div v-if="v$.name.$error" class="error-message">Name is required</div>
        <input 
          type="text" 
          placeholder="sum of donation" 
          v-model.trim="state.sum" 
          data-test="sum" 
        />
        <div v-if="v$.sum.$error" class="error-message">Sum is required</div>
        <div>
          <button @click.prevent="sumFifty" data-test="fifty">$50</button>
          <button @click.prevent="sumHundred">$100</button>
          <select name="goal" id="" v-model="state.goal">
            <option value="" disabled selected hidden>
              Please choose the goal for your donation
            </option>
            <option value="water">Water</option>
            <option value="medicine">Medicine</option>
            <option value="education">Education</option>
          </select>
          <div v-if="v$.goal.$error" class="error-message">Please select a goal</div>
          <button @click.prevent="addDonation()" class="submit">Make a donation</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Swal from '@/utils/swal'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebaseInit'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const colRef = collection(db, 'donations')
const router = useRouter()

const state = reactive({
  name: '',
  sum: '',
  goal: ''
})

const rules = computed(() => {
  return {
    name: { required },
    sum: { required },
    goal: { required }
  }
})

const v$ = useVuelidate(rules, state)

onMounted(() => {
  const user = localStorage.getItem('user')
  if (user) {
    state.name = user
  }
})

const addDonation = async () => {
  v$.value.$validate()
  if (!v$.value.$error) {
    await addDoc(colRef, {
      name: state.name,
      sum: state.sum,
      goal: state.goal,
    }).then(() => {
      Swal.fire({
        title: 'Thank you for Your Donation',
        icon: 'info',
      })
    })
    router.push('/')
  } else {
    Swal.fire({
      title: 'Please, fill the fields',
      icon: 'warning',
    })
  }
}

const sumFifty = () => {
  state.sum = '50'
}

const sumHundred = () => {
  state.sum = '100'
}
</script>

<style scoped lang="scss">
.error-message {
  color: #ff4d4f;
  font-size: 0.8rem;
  margin-left: 1rem;
}
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
      border: 1px solid $white;
      transition: all 0.3s ease;

      @media (max-width: 870px) {
        text-align: center;
      }

      @media (max-width: 580px) {
        width: 95%;
      }

      &.submit {
        background: $lightgreen;

        @media (max-width: 975px) {
          margin: 0 auto;
        }

        @media (max-width: 870px) {
          width: 100%;
        }

        &:focus,
        &:hover {
          background: $teal;
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
      border: 1px solid #fff;
      color: $white;
      transition: all 0.3s ease;

      @media (max-width: 975px) {
        width: 95%;
      }

      &:focus {
        background: $white;
        color: black;
      }
    }

    select {
      padding: 0.5rem;
      margin: 2rem 0.5rem;
      width: 50%;
      background: transparent;
      color: $white;
      border: 1px solid $white;
      outline: none;
      border-radius: 0.5rem;
      transition: all 0.2s ease-in-out;

      option {
        background-color: transparent;
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
