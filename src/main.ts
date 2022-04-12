import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  {createPinia} from 'pinia'
import {initializeApp} from 'firebase/app';


createApp(App).use(createPinia()).use(router).mount('#app')


const firebaseConfig = {

  apiKey: "AIzaSyDHZVvkgK79385qlh3fw09nRaCrGMvILt8",

  authDomain: "weatherapp-f8ea8.firebaseapp.com",

  projectId: "weatherapp-f8ea8",

  storageBucket: "weatherapp-f8ea8.appspot.com",

  messagingSenderId: "476606896067",

  appId: "1:476606896067:web:f4a6df53a97a72d94e0f76"

  
  };
  
export const firebaseApp = initializeApp(firebaseConfig);
