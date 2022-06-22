<template>
  <div class="page">
    <h1>ドリンク一覧</h1>
    <div class="gallery">
      <div v-for="(drink, index) in drinks" :key="drink.id">
        <div class="com8">
          <h4>{{ drink.drink }}</h4>
          <button
            v-on:click="registerFavorite(index)"
            :disabled="drink.switchDisabled"
          >
            {{ drink.changeName }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <p>footer</p>
  </div>
</template>

<script>
import { collection, addDoc, Timestamp } from "firebase/firestore"
// import { getStorage, ref } from "firebase/storage";
import { db } from "../firebase"
// const storage = getStorage();
// const storageRef = ref(storage);
// const imagesRef = ref(storage, "images");
export default {
  data() {
    return {
      drinks: [
        // 仮データ構造
        // changeNameなんとかしたい
        {
          drink: "ドリンク1",
          price: 500,
          count: 0,
          changeName: "お気に入り",
          path: "./images/latte.jpg",
        },
        {
          drink: "ドリンク2",
          price: 600,
          count: 0,
          changeName: "お気に入り",
          path: "",
        },
        {
          drink: "ドリンク3",
          price: 700,
          count: 0,
          changeName: "お気に入り",
          path: "",
        },
        {
          drink: "ドリンク4",
          price: 550,
          count: 0,
          changeName: "お気に入り",
          path: "",
        },
        {
          drink: "ドリンク5",
          price: 650,
          count: 0,
          changeName: "お気に入り",
          path: "",
        },
        {
          drink: "ドリンク6",
          price: 300,
          count: 0,
          changeName: "お気に入り",
          path: "",
        },
        {
          drink: "ドリンク7",
          price: 580,
          count: 0,
          changeName: "お気に入り",
          path: "",
        },
        {
          drink: "ドリンク8",
          price: 800,
          count: 0,
          changeName: "お気に入り",
          path: "",
        },
        {
          drink: "ドリンク9",
          price: 900,
          count: 0,
          changeName: "お気に入り",
          path: "",
        },
      ],
    }
  },
  methods: {
    // お気に入りボタンを押すと、registerFavorite関数が動く
    // ボタンが「お気に入り」→「登録」に変わる
    async registerFavorite(index) {
      if (this.drinks[index].changeName === "お気に入り") {
        this.drinks[index].changeName = "登録済み"
        this.drinks[index].switchDisabled = true
      }
      /* ↓firestoreに追加するコード↓ */
      await addDoc(collection(db, "favorite"), {
        drink: this.drinks[index].drink,
        price: this.drinks[index].price,
        count: this.drinks[index].count,
        switchDisabled: false,
        changeDetail: "詳細へ",
        onOff: false,
        image_path: this.drinks[index].path,
        registerDate: Timestamp.fromDate(new Date()),
      })
    },
  },
}
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
