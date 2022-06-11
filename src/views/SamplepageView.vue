<template>
  <div class="page">
    <h1>ドリンク一覧</h1>
    <div class="gallery">
      <div v-for="(drink, index) in drinks" :key="drink.id">
        <div class="com8">
          <h4>{{ drink }}</h4>
          <button v-on:click="registerFavorite(index)">お気に入り</button>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <p>footer</p>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
export default {
  data() {
    return {
      drinks: [
        "ドリンク1",
        "ドリンク2",
        "ドリンク3",
        "ドリンク4",
        "ドリンク5",
        "ドリンク6",
        "ドリンク7",
        "ドリンク8",
        "ドリンク9",
      ],
    };
  },
  methods: {
    registerFavorite(drink_id) {
      /* firestoreに追加するコードを書く */
      addDoc(collection(db, "favorite"), {
        text: this.drinks[drink_id],
      });
    },
  },
};
</script>

<style>
.page {
  padding: 30px;
  margin: 0 auto;
  height: 1200px;
  width: 1000px;
  background-color: azure;
}

.gallery {
  margin: 0 auto;
  width: 940px;
  height: 800px;
  display: flex;
  flex-wrap: wrap;
}

.com8 {
  height: 250px;
  width: 200px;
  margin: 50px;
  background-color: green;
  color: white;
}

.footer {
  height: 50px;
  background-color: black;
  color: white;
}
</style>
