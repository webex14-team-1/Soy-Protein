<template>
  <div class="page">
    <h1>ドリンク一覧</h1>
    <div class="buttons">
      <button v-on:click="viewRanking">閲覧順</button>
      <button v-on:click="viewNew">最新順</button>
      <button v-on:click="viewRegister">登録順</button>
    </div>
    <div class="gallery">
      <div v-for="(drink, index) in favorite_drinks" :key="drink.id">
        <div class="com8">
          <h4>{{ drink.drink }}</h4>
          <!-- 詳細かくす切り替え -->
          <!-- （修正）要素全てに対して適用されてしまっている -->
          <button v-on:click="detail(index)">{{ drink.changeDetail }}</button>
          <p v-if="drink.onOff">{{ drink.price }}</p>
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
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
export default {
  data() {
    return {
      favorite_drinks: [],
      registerTime: [],
    };
  },
  methods: {
    detail(index) {
      if (this.favorite_drinks[index].changeDetail === "詳細へ") {
        // console.log(this.favorite_drinks[0].count);
        // console.log(this.favorite_drinks);
        // console.log(this.favorite_drinks[index]);
        // console.log(index);
        // console.log(this.favorite_drinks);
        this.favorite_drinks[index].changeDetail = "かくす";
        this.favorite_drinks[index].onOff = true;
        this.favorite_drinks[index].count++;
        updateDoc(doc(db, "favorite", this.favorite_drinks[index].id), {
          count: this.favorite_drinks[index].count,
        });
        // console.log(this.favorite_drinks[index].count);
        // setDoc(
        //   doc(db, "favorite", this.favorite_drinks[index].id),
        //   {
        //     count: this.favorite_drinks[index].count,
        //   },
        //   { merge: true }
        // );
      } else {
        this.favorite_drinks[index].changeDetail = "詳細へ";
        this.favorite_drinks[index].onOff = false;
      }
    },
    async deleteFavorite(id) {
      await deleteDoc(doc(db, "favorite", id));
      location.reload();
    },
    // sort : viewRanking, viewNew, viewRegister
    viewRanking() {
      this.favorite_drinks.sort(function (a, b) {
        console.log(a.count);
        if (a.count < b.count) {
          return 1;
        } else if (a.count > b.count) {
          return -1;
        } else {
          return 0;
        }
      });
    },
    viewNew() {
      this.favorite_drinks.sort(function (a, b) {
        if (a.registerDate < b.registerDate) {
          return 1;
        } else if (a.registerDate > b.registerDate) {
          return -1;
        } else {
          return 0;
        }
      });
    },
    viewRegister() {
      this.favorite_drinks.sort(function (a, b) {
        if (a.registerDate > b.registerDate) {
          return 1;
        } else if (a.registerDate < b.registerDate) {
          return -1;
        } else {
          return 0;
        }
      });
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
    // for (let i = 0; i < this.favorite_drinks.length; i++) {
    //   this.favorite_drinks[i].count = 0;
    // }
    // for (let i = 0; i < this.favorite_drinks.length; i++) {
    //     this.favorite_drinks[i].changeName = "詳細へ";
    //     this.favorite_drinks[i].push("詳細へ");
    //   console.log(this.favorite_drinks[i]);
    // }
    // console.log(this.favorite_drinks[0]);
    // console.log(this.favorite_drinks);
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
