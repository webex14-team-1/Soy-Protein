<template>
  <div class="article">
    <div class="main">
      <div class="title-container">
        <div class="bg" />
        <h1 class="title1">CuSutarbucks</h1>
        <h2 class="title2">for StarBucks user</h2>
      </div>
      <div class="message-container" name="message">
        <a name="message"></a>
        <div v-show="visible" class="message">
          <p>
            <span class="top-message">いつもの生活をちょっと豊かに</span>
            <br />「誰もがスターバックスコーヒーを楽しめるように」<br />
            そんな思いからこのアプリが誕生しました。<br />スターバックスコーヒーが大好きな人も<br />初心者であまり詳しくない人も<br />あなたのスターバックスコーヒーライフがより楽しくなるようなコンテンツをお届けします。
          </p>
        </div>
      </div>
      <div class="explain-container">
        <div class="section-explain">Contents</div>
        <div class="contents-explain">
          <div class="custom-container">
            <div class="custom-explain">Customize</div>
            <div class="custom-explain-text">
              ユーザーの予算や気分に合ったカスタムを表示します。お気に入り登録もできます。
            </div>
            <div class="move-custom">
              <router-link to="/custom" class="link"
                >Move to Customize</router-link
              >
            </div>
          </div>
          <div class="favorite-container">
            <div class="favorite-explain">Favorite</div>
            <div class="favorite-explain-text">
              Custmizeでお気に入り登録されたカスタム一覧を見ることができます。
            </div>
            <div class="move-favorite">
              <router-link to="/favorite" class="link"
                >Move to Favorite</router-link
              >
            </div>
          </div>
          <div class="trivia-container">
            <div class="trivia-explain">Trivia</div>
            <div class="trivia-explain-text">
              Starbucksに関連した雑学をクイズをすることができます。
            </div>
            <div class="move-trivia">
              <router-link to="/trivia" class="link"
                >Move to Trivia</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      visible: false,
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll)
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        var top = this.$el.getBoundingClientRect().top
        this.visible = top < window.innerHeight + 10 * 6
      }
    },
    adddrink(value) {
      this.newdrink = []
      const drink = value
      this.newdrink.unshift(drink)
      console.log(this.newdrink)
    },
    addfavorite(value) {
      this.perfectdrink = []
      const drink = value
      this.perfectdrink.unshift(drink)
      console.log(this.perfectdrink)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  height: 100%;
}
body {
  color: #020c3f;
  overflow-x: hidden;
  margin: 0;
  height: 100%;
  padding: 0;
}
.article {
  display: flex;
  background-color: #fffffe;
  position: relative;
  height: 2250px;
}
.main {
  width: 100%;
  height: 2500px;
  margin-top: 20px;
}

.title-container {
  height: 600px;
  margin-top: 0px;
  padding: 0px;
}
@keyframes slideIn1 {
  0% {
    transform: translateX(180px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
  }
  40%,
  100% {
    opacity: 0.45;
  }
}
.bg {
  background-image: url("~@/assets/title.png");
  height: 100%;
  opacity: 0.45;
  position: relative;
  overflow: hidden;
  animation-name: slideIn1;
  animation-duration: 2.3s;
}
@keyframes slideIn2 {
  0% {
    transform: translateX(-100px);
    opacity: 0;
    color: cyan;
  }
  100% {
    transform: translateX(0px);
    color: #020c3f;
  }
  40%,
  100% {
    opacity: 1;
  }
}
.title1 {
  position: absolute;
  left: 120px;
  top: 130px;
  margin-top: 0;
  margin-bottom: 0;

  padding: 0;
  font-size: 130px;
  line-height: 150px;
  animation-name: slideIn2;
  animation-duration: 3s;
}
@keyframes slideIn5 {
  0% {
    transform: translateX(100px);
    opacity: 0;
    color: cyan;
  }
  100% {
    transform: translateX(0px);
    color: #020c3f;
  }
  40%,
  100% {
    opacity: 1;
  }
}
.title2 {
  position: absolute;
  left: 320px;
  top: 360px;
  margin-top: 0;
  margin-bottom: 0;

  padding: 0;
  font-size: 90px;
  line-height: 150px;
  animation-name: slideIn5;
  animation-duration: 3s;
}

.message-container {
  height: 750px;
  position: relative;
  margin: 0;
  padding: 0;
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
.message {
  display: block;
  position: absolute;
  text-align: center;
  top: 15%;
  bottom: 15%;
  left: 15%;
  right: 15%;
  margin: 0;
  padding: 0;
  line-height: 70px;
  animation-name: slideIn4;
  animation-duration: 4.5s;
  font-weight: 100;
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
}
.top-message {
  font-weight: bold;
  font-size: 20px;
}
.explain-container {
  width: 100%;
  height: 1000px;
  margin: 0;
}
.section-explain {
  height: 15%;
  margin-left: 70px;
  margin-bottom: 0;
  font-size: 100px;
}
.contents-explain {
  height: 900px;
  margin-left: 30px;
}
.custom-explain {
  font-size: 60px;
  width: 100%;
  height: 100px;
  padding-left: 20px;
  padding-top: 10px;
  color: #289db8;
}

.move-custom {
  font-size: 25px;
  float: right;
  padding-right: 20px;
  padding-bottom: 10px;
}
.favorite-explain {
  font-size: 60px;
  width: 100%;
  height: 100px;
  padding-bottom: 0px;
  padding-left: 20px;
  padding-top: 10px;
  color: #1371b9;
}

.move-favorite {
  font-size: 25px;
  float: right;
  padding-right: 20px;
  padding-bottom: 10px;
}
.trivia-explain {
  font-size: 60px;
  width: 100%;
  height: 100px;
  padding-left: 20px;
  padding-top: 10px;
  color: #0a5a97;
}
.trivia-explain-text {
  height: 100px;
  font-size: 30px;
  text-align: center;
}
.custom-explain-text {
  height: 100px;
  font-size: 30px;
  text-align: center;
}
.favorite-explain-text {
  height: 100px;
  font-size: 30px;
  text-align: center;
}
.move-trivia {
  font-size: 25px;
  float: right;
  padding-right: 20px;
  padding-bottom: 10px;
}

.custom-container {
  height: 250px;
  background-color: rgb(245, 239, 231);
  margin: 0;
  margin-bottom: 30px;
  margin-right: 30px;
}
.favorite-container {
  height: 250px;
  background-color: rgb(245, 239, 231);
  margin: 0;
  margin-bottom: 30px;
  margin-right: 30px;
}
.trivia-container {
  height: 250px;
  background-color: rgb(245, 239, 231);
  margin: 0;
  margin-bottom: 30px;
  margin-right: 30px;
}
.link {
  color: #020826;
  text-decoration: none;
  font-size: 26px;
  line-height: 100px;
}
/* .side {
  width: 19%;
  height: 2000px;
  position: relative;
  background-color: #f9f4ef;
}
@keyframes slideIn3 {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
  }
  40%,
  100% {
    opacity: 1;
  }
} */
/* .side-bar {
  margin: 0;
  width: 19%;
  height: 100%;
  background-color: rgba(232, 221, 221, 0.562);
  position: fixed;
  top: 0;
  z-index: 30;
  text-align: center;
  animation-name: slideIn3;
  animation-duration: 2.5s;
}
.side-bar ul {
  margin-top: 40px;
}

.side-bar li {
  list-style: none;
  font-size: 20px;
  height: 50px;
  padding-right: 40px;
} */

/* @keyframes slideIn3 {
  0% {
    transform: translateX(20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
  }
  40%,
  100% {
    opacity: 1;
  }
} */
/* .side-backimage {
  margin: 0;
  width: 100%;
  height: 33%;
  background-color: #eaddcf;
  position: absolute;
  z-index: 20;
  /* animation-name: slideIn3;
  animation-duration: 1.5s; */
/* } */
/* a {
  color: #2c3e50;
  text-decoration: none;
} */
</style>
