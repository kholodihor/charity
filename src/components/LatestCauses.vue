<template>
  <div class="causes">
    <div class="causes-title">
      <span data-test="subtitle"><i class="far fa-heart"></i>Causes</span>
      <h1>Latest Causes</h1>
    </div>
    <div class="causes-cards">
      <Card
        v-for="card in cards"
        :key="card.image"
        :title="card.title"
        :subtitle="card.subtitle"
        :image="card.image"
        :raised="raisedByGoal[card.subtitle.toLowerCase()] ?? 0"
        :goal="card.goal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/firebaseInit'
import { useRefsStore } from '@/stores/refs.store'
import Card from './Card.vue'

const cards = useRefsStore().cards
// Total donated per goal ("water", "education", "medicine"), matched by card subtitle
const raisedByGoal = ref<Record<string, number>>({})

onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'donations'))
    const totals: Record<string, number> = {}
    querySnapshot.forEach((doc) => {
      const { goal, sum } = doc.data()
      const amount = Number(sum)
      // Skip malformed records so one bad entry doesn't turn the total into NaN
      if (typeof goal === 'string' && Number.isFinite(amount) && amount > 0) {
        totals[goal] = (totals[goal] ?? 0) + amount
      }
    })
    raisedByGoal.value = totals
  } catch (error) {
    console.error('Error loading donations:', error)
  }
})
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
