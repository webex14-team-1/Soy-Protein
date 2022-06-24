<template>
  <div class="Favorite">
    <div class="content-title"><h1>Favorite</h1></div>
    <div class="favorite-container">
      <div class="favorite-explain">
        <div class="favorite-explain-text">
          <p class="favorite-explain-text-p">
            <span>Everyone's Favorite</span
            ><br />ここはユーザーがお気に入り登録したカスタムを閲覧することができます。<br />カスタムを考える際の参考にしてもいいでしょう。<br />新たな味の発見につながるかも…
          </p>
        </div>
        <div class="choice-container">
          <h1>Favorite Drink List</h1>
          <div class="redisterbuttons">
            <button
              v-on:click="viewRanking"
              class="button1 btn btn--orange btn--radius"
            >
              閲覧順
            </button>
            <button
              v-on:click="viewNew"
              class="button1 btn btn--orange btn--radius"
            >
              最新順
            </button>
            <button
              v-on:click="viewRegister"
              class="button1 btn btn--orange btn--radius"
            >
              登録順
            </button>
          </div>
        </div>
        <div class="registered-container">
          <div
            v-for="(drink, index) in favorite_drinks"
            :key="drink.id"
            class="favorite-item-container"
          >
            <div class="com8">
              <div>ドリンク：{{ drink.drink }}</div>
              <div
                v-for="(custom, index) in drink.custom"
                :key="index"
                class="favorite-item-custom"
              >
                カスタム：{{ custom.customname }}
              </div>
              <div>ドリンク：{{ drink.price }}円</div>
              <!-- 詳細・かくす切り替え -->
              <!-- （修正）要素全てに対して適用されてしまっている -->
              <div class="drink-custom-image">
                <div class="open-drink-image">
                  <img
                    v-bind:src="require(`@/assets/${drink.image_path}.png`)"
                    class="drink_image"
                  />
                </div>
                <div
                  v-for="(custom, index) in drink.custom"
                  :key="index"
                  class="open-custom-image"
                >
                  <!-- src\assets\custom.img\milk.png -->
                  <img
                    v-bind:src="
                      require(`@/assets/custom.img/${custom.customimage}.png`)
                    "
                    class="custom_image"
                  />
                </div>
              </div>

              <!-- <h4>{{ drink.image_path }}</h4> -->
            </div>
            <div class="detailbutton">
              <button
                v-on:click="detail(index)"
                class="button2 btn btn--orange btn--radius"
              >
                {{ drink.changeDetail }}
              </button>
              <div v-if="drink.onOff" class="drink_detail">
                <p>{{ drink.price }}</p>
                <!-- <img
              v-bind:src="require(`${drink.image_path}`)"
              class="drink_image"
            /> -->
              </div>
              <button
                v-on:click="deleteFavorite(drink.id)"
                class="button2 btn btn--orange btn--radius"
              >
                お気に入り削除
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.Favorite {
  margin: 0;
  padding: 0;
  background-color: #faf6f2;
  font-size: 20px;
}

.content-title {
  height: 20%;
  position: relative;
  margin-bottom: 90px;
}
.content-title h1 {
  position: absolute;
  font-size: 100px;
  margin: 0px;
  top: 12%;
  left: 8%;
}
.favorite-container {
  margin: 0%;
  height: 90%;
}
@keyframes slideIn4 {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
  }
  40%,
  100% {
    opacity: 1;
  }
}
.favorite-explain {
  height: 20%;
  margin: auto;
  line-height: 50px;
  margin: auto;
  animation-name: slideIn4;
  animation-duration: 2s;
  padding-bottom: 100px;
}
.favorite-explain-text {
  height: 300px;
  text-align: center;
  font-weight: 200;
  font-size: 25px;
}
.favorite-explain-text-p {
  margin: auto;
  text-align: center;
  line-height: 70px;
  margin-top: 100px;
}
.favorite-explain-text-p span {
  font-size: 30px;
}
.choice-container {
  background-color: #f5ede6;
  margin-top: 100px;
  margin-left: 5%;
  width: 90%;
  padding-top: 30px;
  height: 3%;
  font-size: 60px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
.choice-container h1 {
  height: 100px;
  font-size: 90%;
  text-align: center;
  margin: auto;
  margin-top: 1%;
}
.button1 {
  margin-right: 30px;
  margin-left: 20px;
  width: 100px;
  height: 50px;
  font-weight: 200;
  font-size: 20px;
}
.btn--orange,
.btn--orange {
  color: #020826;
  background-color: #eaddcf;
}
.btn--orange:hover,
.btn--orange:hover {
  color: #020826;
  background: #eaddcf;
}

.btn--radius {
  border-radius: 100vh;
}

.registered-container {
  /* margin: 100px, 50px, 40px, 50px; */
  height: 88%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
}
.favorite-item-container {
  background-color: white;
  text-align: center;
  width: 400px;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 10px;
  height: 600px;
  height: 100vh;
}
.drink-custom-image {
  margin: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.open-drink-image {
  width: 180px;
  height: 180px;
}
.open-custom-image {
  width: 180px;
  height: 180px;
}
.drink_image {
  width: 180px;
  height: 180px;
}
.custom_image {
  width: 180px;
  height: 180px;
}
.button2 {
  margin-right: 20px;
  width: 120px;
  height: 40px;
  margin-bottom: 100px;
}
.drink-custom-image {
  display: flex;
}
</style>
<script>
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore"
import { db } from "../firebase"
export default {
  data() {
    return {
      favorite_drinks: [],
      registerTime: [],
    }
  },
  methods: {
    detail() {
      if (this.favorite_drinks.changeDetail === "詳細へ") {
        // console.log(this.favorite_drinks[0].count);
        // console.log(this.favorite_drinks);
        // console.log(this.favorite_drinks);
        // console.log(index);
        // console.log(this.favorite_drinks);
        this.favorite_drinks.changeDetail = "かくす"
        this.favorite_drinks.onOff = true
        this.favorite_drinks.count++
        updateDoc(doc(db, "favorite", this.favorite_drinks.id), {
          count: this.favorite_drinks.count,
        })
        // console.log(this.favorite_drinks.count);
        // setDoc(
        //   doc(db, "favorite", this.favorite_drinks.id),
        //   {
        //     count: this.favorite_drinks.count,
        //   },
        //   { merge: true }
        // );
      } else {
        this.favorite_drinks.changeDetail = "詳細へ"
        this.favorite_drinks.onOff = false
      }
    },
    async deleteFavorite(id) {
      await deleteDoc(doc(db, "favorite", id))
      location.reload()
    },
    // sort : viewRanking, viewNew, viewRegister
    viewRanking() {
      this.favorite_drinks.sort(function (a, b) {
        console.log(a.count)
        if (a.count < b.count) {
          return 1
        } else if (a.count > b.count) {
          return -1
        } else {
          return 0
        }
      })
    },
    viewNew() {
      this.favorite_drinks.sort(function (a, b) {
        if (a.registerDate < b.registerDate) {
          return 1
        } else if (a.registerDate > b.registerDate) {
          return -1
        } else {
          return 0
        }
      })
    },
    viewRegister() {
      this.favorite_drinks.sort(function (a, b) {
        if (a.registerDate > b.registerDate) {
          return 1
        } else if (a.registerDate < b.registerDate) {
          return -1
        } else {
          return 0
        }
      })
    },
  },
  // computed(){
  //   imgsrc(index){
  //     return require(favorite_drinks[index].path)
  //   }
  // },
  created() {
    getDocs(collection(db, "favorite")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.favorite_drinks.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
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
}
</script>

<style></style>
