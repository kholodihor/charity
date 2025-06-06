<template>
  <div class="header">
    <h1>Charity Organisation</h1>
    <div class="actions">
      <h2 class="name" v-if="isLoggedIn">{{ userName }}</h2>
      <button v-if="!isLoggedIn" @click="signInWithGoogle" class="google-login-btn">
        <i class="fab fa-google"></i> Login with Google
      </button>
      <button v-else @click="handleSignOut">Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebaseInit'

// Define component name for Vue devtools
defineOptions({
  name: 'SiteHeader',
})

const router = useRouter()
const userName = ref()
const isLoggedIn = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
      userName.value = user.displayName
    } else {
      isLoggedIn.value = false
    }
  })
})

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res.user)
      localStorage.setItem('user', res.user.displayName as string)
      router.push('/')
    })
    .catch((err) => {
      console.log(err)
    })
}

const handleSignOut = () => {
  signOut(auth).then(() => {
    localStorage.removeItem('user')
  })
}
</script>

<style scoped lang="scss">
@use "sass:color";
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: $blue;
  color: white;
  border-bottom: 1px solid $white;

  h1 {
    margin: 0;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1rem;

    .name {
      margin: 0;
      font-size: 1.2rem;
    }

    button {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 1px solid white;
      color: white;
      background-color: $blue;

      &.google-login-btn {
        background-color: #fff;
        color: #444;
        border: 1px solid #ddd;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;

        i.fab.fa-google {
          color: #4285f4;
          font-size: 1.2rem;
        }

        &:hover {
          color: $yellow;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      }

      &:not(.google-login-btn):hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        background-color: color.adjust($blue, $lightness: -10%);
      }
    }
  }
}
</style>
