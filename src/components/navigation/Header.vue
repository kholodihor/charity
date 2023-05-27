<template>
    <div class="header">
        <h1>Charity Organisation</h1>
        <div class="actions">
            <h2 class="name" v-if="isLoggedIn">{{ userName }}</h2>
            <button v-if="!isLoggedIn" @click="signInWithGoogle">login <img :src="require(`@/assets/google.png`)"
                    alt=""></button>
            <button v-else @click="handleSignOut">logout</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { auth } from '@/firebase/firebaseInit';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

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
});

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
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
    signOut(auth).then(() => [
        localStorage.removeItem('user')
    ])
}

</script>

<style scoped lang="scss">
.header {
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $blue;
    color: $white;
    border-bottom: 1px solid $white;

    @media screen and (max-width:450px) {
        flex-direction: column;
        gap: 1rem;
    }


    h1 {
        flex: 1;
        font-style: italic;
        white-space: nowrap;
    }

    .actions {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .name {
            font-weight: 300;
        }

        button {
            padding: 0.8rem 2rem;
            border: 1px solid $white;
            background: none;
            color: $white;
            border-radius: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            text-transform: uppercase;
            cursor: pointer;

            &:hover {
                background-color: rgba(255, 255, 255, 0.2);
            }

            img {
                width: 1.5rem;
                height: 1.5rem;
            }
        }

    }
}
</style>