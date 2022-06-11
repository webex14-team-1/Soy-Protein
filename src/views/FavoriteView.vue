<template>
  <div class="page">
    <h1>ドリンク一覧</h1>
    <div class="gallery">
      <div v-for="drink in favorite_drinks" :key="drink.id">
        <div class="com8">
          <h4>{{ drink.text }}</h4>
          <button v-on:click="deleteFavorite(drink.id)">お気に入り削除</button>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <p>footer</p>
  </div>
</template>

<script>
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
export default {
  data() {
    return {
      favorite_drinks: [],
    };
  },
  methods: {
    deleteFavorite(id) {
      deleteDoc(doc(db, "favorite", id));
    },
  },
  created() {
    getDocs(collection(db, "favorite")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.favorite_drinks.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    });
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
