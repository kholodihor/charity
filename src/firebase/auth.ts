import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './firebaseInit'

// Shared Google sign-in used by the header and the events section.
// Auth state is picked up by onAuthStateChanged listeners, so no reload is needed.
export const signInWithGoogle = async () => {
  const res = await signInWithPopup(auth, new GoogleAuthProvider())
  if (res.user.displayName) {
    localStorage.setItem('user', res.user.displayName)
  }
  return res.user
}
