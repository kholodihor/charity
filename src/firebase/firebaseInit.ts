import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCxoB17EA0J6uJlQlvcLoAHqhX6p3_6noE',
  
    authDomain: 'charity-6b405.firebaseapp.com',
  
    projectId: 'charity-6b405',
  
    storageBucket: 'charity-6b405.appspot.com',
  
    messagingSenderId: '4765727680',
  
    appId: '1:4765727680:web:29687a33ca676f8638e625',
  };

  const firebaseApp = initializeApp(firebaseConfig);
  
  export const db = getFirestore(firebaseApp)
  export const auth = getAuth(firebaseApp)
  