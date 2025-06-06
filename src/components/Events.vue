<template>
  <section class="events">
    <div class="title">
      <span><i class="far fa-heart"></i>Events</span>
      <h1>Featured Events</h1>
    </div>
    <div class="box">
      <div v-if="eventStore.error" class="error-message">
        {{ eventStore.error }}
      </div>
      
      <form action="#" @submit.prevent="addEvent">
        <input v-model="eventDate" type="date" data-test="new-event-date" required />
        <input
          v-model="eventTitle"
          type="text"
          placeholder="Name of the Event"
          data-test="new-event-title"
          required
        />
        <input
          v-model="eventPlace"
          type="text"
          placeholder="Place of the Event"
          data-test="new-event-place"
          required
        />
        <button 
          type="submit" 
          class="add" 
          aria-label="Add Event" 
          data-test="form"
          :disabled="eventStore.loading"
        >
          {{ eventStore.loading ? 'Adding...' : 'Add Event' }}
        </button>
      </form>

      <div v-if="eventStore.loading && !eventStore.events.length" class="loading">
        Loading events...
      </div>

      <template v-if="eventStore.events.length > 0">
        <div class="container">
          <div
            class="card"
            :class="{ done: event.booked }"
            v-for="event in eventStore.events"
            :key="event.id"
            data-test="event"
          >
            <div class="date">
              <span>{{ event.date }}</span>
            </div>
            <div class="event">
              <span>Charity</span>
              <h4>{{ event.title }}</h4>
            </div>
            <div class="place">
              <p>{{ event.place }}</p>
            </div>
            <div class="buttons">
              <button
                class="book"
                aria-label="Book Your Table"
                @click="updateEvent(event.id)"
                v-if="!event.booked"
                :disabled="eventStore.loading"
              >
                Book Your Table
              </button>
              <button
                class="cancel"
                aria-label="Cancel Booking"
                @click="updateEvent(event.id)"
                v-else-if="eventStore.isEventBookedByCurrentUser(event.id)"
                :disabled="eventStore.loading"
              >
                Cancel Booking
              </button>
              <button
                class="booked"
                aria-label="Already Booked"
                disabled
                v-else
              >
                Already Booked
              </button>
              <button
                v-if="canRemoveEvents"
                class="remove"
                aria-label="Remove Event"
                @click="deleteEvent(event.id)"
                :disabled="eventStore.loading"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </template>
      
      <div v-else-if="!eventStore.loading" class="no-events">
        No events available. Add your first event!
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useEventStore } from '@/stores/events.store'
import { auth } from '@/firebase/firebaseInit'
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import swal from '@/utils/swal'
import { useRouter } from 'vue-router'

const router = useRouter()
const eventStore = useEventStore()

const eventDate = ref('')
const eventTitle = ref('')
const eventPlace = ref('')
const isAuthenticated = ref(false)
const isAdmin = ref(false)

// Check authentication status and admin role
onAuthStateChanged(auth, async (user) => {
  isAuthenticated.value = !!user
  
  // Check if user is admin (you can implement your own admin check logic)
  // For example, check if user email is in admin list or has admin claim
  if (user) {
    // Example: Check if user email is admin
    isAdmin.value = user.email === 'admin@example.com' // Replace with your admin check
  } else {
    isAdmin.value = false
  }
})

// Google Sign In function - same as in Header.vue
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res.user)
      localStorage.setItem('user', res.user.displayName as string)
      // Refresh the page to update authentication state
      router.go(0)
    })
    .catch((err) => {
      console.log(err)
      swal.fire({
        title: 'Authentication Failed',
        text: 'Failed to sign in with Google. Please try again.',
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#f7941d',
        customClass: {
          confirmButton: 'btn btn-primary px-4 py-2'
        },
        buttonsStyling: true,
        background: '#fff',
        backdrop: `
          rgba(0,0,0,0.4)
          center
          no-repeat
        `,
        showClass: {
          popup: 'animate__animated animate__fadeInDown animate__faster'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp animate__faster'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // Try signing in again if the user clicks 'Try Again'
          signInWithGoogle();
        }
      })
    })
}

// Computed property to check if user can remove events
const canRemoveEvents = computed(() => isAdmin.value)

// Fetch events when component is mounted
onMounted(() => {
  eventStore.fetchEvents()
})

async function addEvent(): Promise<void> {
  if (!eventDate.value || !eventTitle.value || !eventPlace.value) return
  
  if (!isAuthenticated.value) {
    showAuthRequiredPopup('add an event')
    return
  }
  
  await eventStore.addEvent(eventTitle.value, eventDate.value, eventPlace.value)
  eventTitle.value = ''
  eventPlace.value = ''
  eventDate.value = ''
}

async function deleteEvent(id: string): Promise<void> {
  if (!isAdmin.value) {
    showAdminRequiredPopup()
    return
  }
  
  // Confirm deletion
  const result = await swal.fire({
    title: 'Are you sure?',
    text: 'This event will be permanently deleted!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
  })
  
  if (result.isConfirmed) {
    await eventStore.deleteEvent(id)
    swal.fire('Deleted!', 'The event has been deleted.', 'success')
  }
}

async function updateEvent(id: string): Promise<void> {
  if (!isAuthenticated.value) {
    showAuthRequiredPopup('book an event')
    return
  }
  
  await eventStore.updateEvent(id)
}

// Show authentication required popup
function showAuthRequiredPopup(action: string): void {
  swal.fire({
    title: 'Authentication Required',
    text: `You need to be logged in to ${action}.`,
    icon: 'info',
    confirmButtonText: 'Sign In with Google',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    customClass: {
      confirmButton: 'btn btn-primary px-4 py-2 mx-2',
      cancelButton: 'btn btn-outline-secondary px-4 py-2 mx-2'
    },
    buttonsStyling: true,
    confirmButtonColor: '#f7941d', // Primary orange color matching charity theme
    cancelButtonColor: '#6c757d',
    background: '#fff',
    backdrop: `
      rgba(0,0,0,0.4)
      center
      no-repeat
    `,
    showClass: {
      popup: 'animate__animated animate__fadeInDown animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp animate__faster'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      // Use the same Google sign-in function as in Header.vue
      signInWithGoogle();
    }
  })
}

// Show admin required popup
function showAdminRequiredPopup(): void {
  swal.fire({
    title: 'Admin Access Required',
    text: 'Only administrators can perform this action.',
    icon: 'warning',
    confirmButtonText: 'OK',
    customClass: {
      confirmButton: 'btn btn-primary px-4 py-2'
    },
    buttonsStyling: true,
    confirmButtonColor: '#f7941d',
    background: '#fff',
    backdrop: `
      rgba(0,0,0,0.4)
      center
      no-repeat
    `
  })
}
</script>

<style scoped lang="scss">
.events {
  padding: 1rem;

  @media (max-width: 550px) {
    padding: 0;
  }

  .title {
    text-align: center;
    padding: 1rem;

    span {
      @include sectionLogo();
    }

    h1 {
      font-size: 4rem;
      color: $blue;
    }
  }

  .box {
    width: 100%;
    padding: 2rem;
    margin-top: 2rem;

    @media (max-width: 550px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 0.5rem;
    }

    input {
      padding: 1rem;
      width: 30%;
      border: 1px solid $gray;
      border-radius: 1rem;
      margin-left: 1rem;

      @media (max-width: 550px) {
        width: 100%;
        margin: 0.5rem auto;
        padding: 0.7rem;
      }
    }

    button.add {
      display: block;
      width: 50%;
      margin: 2rem auto 0;
      padding: 0.7rem 1.5rem;
      background: $teal;
      border-radius: 1rem;

      &:hover {
        background: $yellow;
      }
    }
  }

  .container {
    width: 80%;
    padding: 1rem;
    margin: 2rem auto;

    @media (max-width: 1100px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
    }

    @media (max-width: 850px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 700px) {
      padding: 0.5rem;
      width: 100%;
    }

    .card {
      width: 100%;
      padding: 2rem 0.5rem;
      margin: 1rem auto;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      box-shadow: 0 0 5px #ccc;

      &.done {
        background-color: $lightgreen;
      }

      @media (max-width: 1100px) {
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;
      }

      @media (max-width: 700px) {
        padding: 1rem 0;
      }

      @media (max-width: 500px) {
        flex-wrap: wrap;
        text-align: center;
      }

      .date,
      .event,
      .place {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        @media (max-width: 1100px) {
          width: 100%;
        }
      }

      .buttons {
        width: 25%;
        margin-right: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 0.3rem;

        @media (max-width: 1100px) {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 500px) {
          width: 100%;
          margin: 0.5rem 0;
        }

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          cursor: pointer;
          border-radius: 1rem;
          white-space: nowrap;

          @media (max-width: 990px) {
            padding: 0.7rem 1.5rem;
          }

          @media (max-width: 700px) {
            padding: 0.5rem 1rem;
          }

          &.book {
            background: $teal;
          }

          &.cancel {
            background: $coral;
          }

          &.remove {
            background: $red;
          }

          &:hover {
            background: $yellow;
          }
        }
      }

      .date span {
        display: block;
        padding: 1rem;
        background: $yellow;
        border-radius: 1rem;
        margin-right: 5rem;

        @media (max-width: 1100px) {
          margin-right: 0;
        }

        @media (max-width: 990px) {
          margin-right: 1rem;
          padding: 0.7rem;
        }

        @media (max-width: 700px) {
          margin-right: 0;
          padding: 0.5rem;
        }
      }

      .event span {
        font-family: 'Shalimar';
        color: $red;
        font-size: 1.5rem;
      }

      .event h4 {
        color: $blue;
        font-size: 1.3rem;
      }

      .place {
        color: $gray;
      }
    }
  }
}
</style>
