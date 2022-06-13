// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyADWPkZA8nW9GRDnGwjwXpTib6GS3p1lrQ",
  authDomain: "soy-protein.firebaseapp.com",
  projectId: "soy-protein",
  storageBucket: "soy-protein.appspot.com",
  messagingSenderId: "783454243795",
  appId: "1:783454243795:web:c6a4eb7b381bc980803d26",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
