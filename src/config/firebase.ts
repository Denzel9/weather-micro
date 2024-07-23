import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCn82jSMjNzjDopw0iKBvKGskyGuFIs1as",
  authDomain: "calendar-dedea.firebaseapp.com",
  projectId: "calendar-dedea",
  storageBucket: "calendar-dedea.appspot.com",
  messagingSenderId: "772339505038",
  appId: "1:772339505038:web:ddabc84188d035121ff6df"
}

export const app = initializeApp(firebaseConfig)

export const db = getFirestore()
