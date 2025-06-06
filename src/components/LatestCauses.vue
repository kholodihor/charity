<template>
  <div class="causes">
    <div class="causes-title">
      <span data-test="subtitle"><i class="far fa-heart"></i>Causes</span>
      <h1>Latest Causes</h1>
    </div>
    <div class="causes-cards">
      <Card
        :title="cards[0].title"
        :subtitle="cards[0].subtitle"
        :image="cards[0].image"
        :raised="waterRaised"
        :goal="cards[0].goal"
      />
      <Card
        :title="cards[1].title"
        :subtitle="cards[1].subtitle"
        :image="cards[1].image"
        :raised="educationRaised"
        :goal="cards[1].goal"
      />
      <Card
        :title="cards[2].title"
        :subtitle="cards[2].subtitle"
        :image="cards[2].image"
        :raised="medicineRaised"
        :goal="cards[2].goal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/firebaseInit'
import { useRefsStore } from '@/stores/refs.store'
import { type IDonation } from '@/interfaces/interfaces'
import Card from './Card.vue'

const waterRaised = ref(0)
const educationRaised = ref(0)
const medicineRaised = ref(0)
const allDonations = ref<IDonation[]>([])
const colRef = collection(db, 'donations')
const cards = useRefsStore().cards

onMounted(async () => {
  const querySnapshot = await getDocs(colRef)
  const donations: IDonation[] = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  querySnapshot.forEach((doc: any) => {
    const donation = {
      id: doc.id,
      sum: doc.data().sum,
      name: doc.data().name,
      goal: doc.data().goal,
    }
    donations.push(donation)
  })
  allDonations.value = donations
  getSum(waterRaised, 'water')
  getSum(educationRaised, 'education')
  getSum(medicineRaised, 'medicine')
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSum = (reference: any, category: string) => {
  const sums: number[] = []
  allDonations.value
    .filter((card: IDonation) => {
      return card.goal === category
    })
    .forEach((card) => {
      sums.push(Number(card.sum))
    })
  function sumArrayNumbers(arr: number[]) {
    return arr.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0)
  }
  const result = sumArrayNumbers(sums)
  reference.value = result
}
</script>

<style scoped lang="scss">
.causes {
  width: 100%;
  background: url(/img/map.png) no-repeat;
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
  }
}
</style>
