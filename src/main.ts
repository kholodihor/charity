import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  {createPinia} from 'pinia'
import {initializeApp} from 'firebase/app';


createApp(App).use(createPinia()).use(router).mount('#app')


const firebaseConfig = {

  apiKey: "AIzaSyCxoB17EA0J6uJlQlvcLoAHqhX6p3_6noE",

  authDomain: "charity-6b405.firebaseapp.com",

  projectId: "charity-6b405",

  storageBucket: "charity-6b405.appspot.com",

  messagingSenderId: "4765727680",

  appId: "1:4765727680:web:29687a33ca676f8638e625"


  
  };
  
export const firebaseApp = initializeApp(firebaseConfig);
