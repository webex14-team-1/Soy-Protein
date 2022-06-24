<template>
  <div class="Trivia">
    <div class="content-title"><h1>Trivia</h1></div>
    <div class="triviaquiz-container">
      <div class="trivia-explain">
        <div class="star-image">
          <img class="trivia-image" v-bind:src="imagepath" alt="スタバ画像" />
        </div>
        <div class="quiz-explain">
          <p>
            <span>Statbuck Trivia Quiz</span
            ><br />スターバックスコーヒーに関する問題を３つご用意しました。<br />ぜひチャレンジしてみてください。<br />スターバックスコーヒーマスターへの大いなる一歩です。
          </p>
        </div>
      </div>
      <div class="quiz-container">
        <div class="quiz-title"><h1>Quiz1</h1></div>
        <div class="quiz-text">{{ quizlist.quiz1.text }}</div>
        <div class="quiz-img-option1">
          <div>
            <img
              v-bind:src="require(`@/views/images/latte.jpg`)"
              alt=""
              class="image-container1"
            />
          </div>
          <div class="option-container1">
            <div v-for="(choice, index) in quizlist.quiz1.choices" :key="index">
              <button
                v-on:click="choices(index)"
                class="quiz-button btn btn--orange btn--radius"
              >
                {{ choice.text }}
              </button>
            </div>
          </div>
        </div>
        <div v-if="openfeedback1" class="feedback">{{ feedback1 }}</div>
      </div>
      <div class="quiz-container">
        <div class="quiz-title"><h1>Quiz2</h1></div>
        <div class="quiz-text">{{ quizlist.quiz2.text }}</div>
        <div class="quiz-img-option2">
          <div>
            <img
              v-bind:src="require(`@/views/images/tumbler.jpg`)"
              alt=""
              class="image-container2"
            />
          </div>
          <div class="option-container2">
            <div v-for="(choice, index) in quizlist.quiz2.choices" :key="index">
              <button
                v-on:click="choices2(index)"
                class="quiz-button btn btn--orange btn--radius"
              >
                {{ choice.text }}
              </button>
            </div>
          </div>
        </div>
        <div v-if="openfeedback2" class="feedback">{{ feedback2 }}</div>
      </div>
      <div class="quiz-container">
        <div class="quiz-title"><h1>Quiz3</h1></div>
        <div class="quiz-text">{{ quizlist.quiz3.text }}</div>
        <div class="quiz-img-option1">
          <div>
            <img
              v-bind:src="require(`@/views/images/star.size1.jpg`)"
              alt=""
              class="image-container1"
            />
          </div>
          <div class="option-container1">
            <div v-for="(choice, index) in quizlist.quiz3.choices" :key="index">
              <button
                v-on:click="choices3(index)"
                class="quiz-button btn btn--orange btn--radius"
              >
                {{ choice.text }}
              </button>
            </div>
          </div>
        </div>
        <div v-if="openfeedback3" class="feedback">{{ feedback3 }}</div>
      </div>
    </div>
  </div>
</template>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
}
.Trivia {
  background-color: #faf6f2;
  margin: 0;
  padding: 0;
  height: 3000px;
}

@keyframes slideIn2 {
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
}
.content-title {
  height: 100px;
  position: relative;
  animation-name: slideIn2;
  animation-duration: 2s;
}
.content-title h1 {
  position: absolute;
  font-size: 100px;
  margin: 0px;
  top: 12%;
  left: 8%;
}
.triviaquiz-container {
  height: 90%;
}
.quiz-container {
  height: 40%;
  margin-top: 70px;
}
.quiz-title {
  margin: 0;
  height: 15%;
  position: relative;
  margin-bottom: 30px;
  margin-top: 20px;
}
.quiz-title h1 {
  position: absolute;
  font-size: 75px;
  top: 8%;
  bottom: 2%;
  left: 8%;
  margin: 0px;
  padding: 0px;
  margin-bottom: 30px;
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
.trivia-explain {
  height: 17%;
  margin: 0px;
  padding: 0px;
  display: flex;
  position: relative;
  animation-name: slideIn4;
  animation-duration: 3s;
  margin-top: 60px;
}
.trivia-explain span {
  font-size: 29px;
  font-weight: 100;
}

.trivia-image {
  position: absolute;
  width: 42%;
  height: 80%;
  display: inline-block;
  margin: 0%;
  top: 8%;
  left: 8%;
}
.quiz-explain {
  position: absolute;
  width: 45%;
  height: 80%;
  display: inline-block;
  margin: 0%;
  top: 8%;
  right: 3%;
  font-size: 20px;
  text-align: center;
  line-height: 70px;
  margin-top: 5px;
}
.quiz-text {
  width: 100%;
  height: 75px;
  font-size: 45px;
  margin-left: 8%;
}

.quiz-container {
  height: 17%;
  margin-bottom: 300px;
  animation-name: slideIn4;
  animation-duration: 3s;
}
.quiz-img-option1 {
  display: inline-block;
  display: flex;
  margin: 0px;
}
.quiz-img-option2 {
  display: inline-block;
  display: flex;
  flex-direction: row-reverse;
  margin: 0px;
}
.image-container1 {
  width: 500px;
  height: 350px;
  margin-left: 100px;
}
.image-container2 {
  width: 500px;
  height: 350px;
  margin-right: 100px;
}
.option-container1 {
  display: flex;
  flex-direction: column;
  width: 42%;
  height: 300px;

  margin-left: 100px;
  margin-top: 0px;
  padding: 0%;
}
.option-container2 {
  display: flex;
  flex-direction: column;
  width: 42%;
  height: 300px;
  margin-left: 0px;
  margin-top: 0px;
  padding: 0%;
}
.quiz-button {
  width: 80%;
  height: 50px;
  margin-bottom: 57px;
  font-weight: 400;
  font-size: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #020826;
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

.feedback {
  width: 80%;
  height: 100px;
  font-size: 40px;
  text-align: center;
  margin: auto;
  padding-top: 60px;
}
</style>
<script>
export default {
  data() {
    return {
      visible: false,
      imagepath: require("@/views/images/stb.logo.png"),
      feedback1: "",
      feedback2: "",
      feedback3: "",
      openfeedback1: false,
      openfeedback2: false,
      openfeedback3: false,
      quizlist: {
        quiz1: {
          imagepath: require("@/views/images/latte.jpg"),
          text: "エスプレッソをミルクで１対９で割った飲み物は？",
          Image: "@/views/images/cafe.jpg",
          choices: [
            {
              text: "カフェオレ",
              isCorrect: false,
              feedback:
                "残念！カフェオレはドリップコーヒーとミルクが５対５で割れた飲み物です！",
            },
            {
              text: "カフェラテ",
              isCorrect: true,
              feedback:
                "正解！スターバックスでカフェラテを頼むときは「スターバックスラテ」！",
            },
            {
              text: "カフェモカ",
              isCorrect: false,
              feedback:
                "カフェモカはエスプレッソ・ミルク・チョコレートシロップの割合が、2: 7:1の飲み物！",
            },
            {
              text: "カプチーノ",
              isCorrect: false,
              feedback:
                "カプチーノはエスプレッソと温めたミルクとフォームミルクが1:1:1の飲み物！",
            },
          ],
        },

        quiz2: {
          imagepath: require("@/views/images/tumbler.jpg"),
          text: "スタバにタンブラーを持参すると何円引きになる？",
          Image: "@/views/images/tumbler.jpg",
          choices: [
            {
              text: "10円",
              isCorrect: false,
              feedback: "残念！",
            },
            {
              text: "20円",
              isCorrect: true,
              feedback: "正解！環境にもいいね！",
            },
            {
              text: "30円",
              isCorrect: false,
              feedback: "残念！",
            },
            {
              text: "40円",
              isCorrect: false,
              feedback: "残念！",
            },
          ],
        },

        quiz3: {
          imagepath: require("@/views/images/star.size1.jpg"),
          text: "スタバのドリンクで２番目に大きいサイズは？",
          Image: "@/views/images/stb.size.jpg",
          choices: [
            {
              text: "トール",
              isCorrect: false,
              feedback: "残念!トールは350㎖!下から２番目のサイズ！",
            },
            {
              text: "ベンティー",
              isCorrect: false,
              feedback: "おしい!ベンティーは590㎖!1番大きいサイズ!",
            },
            {
              text: "ショート",
              isCorrect: false,
              feedback: "残念!ショートは240㎖!１番小さいサイズ!",
            },
            {
              text: "グランデ",
              isCorrect: true,
              feedback: "正解!グランデは470㎖!",
            },
          ],
        },
      },
    }
  },

  methods: {
    choices(index) {
      this.openfeedback1 === false
      this.feedback1 = this.quizlist.quiz1.choices[index].feedback
      if (this.quizlist.quiz1.choices.isCorrect === true) {
        this.imagepath = require("@/views/images/cafe.jpg")
      }
      if (this.openfeedback1 === false) {
        this.openfeedback1 = true
      }
    },
    choices2(index) {
      this.openfeedback2 === false
      this.feedback2 = this.quizlist.quiz2.choices[index].feedback
      if (this.quizlist.quiz2.choices.isCorrect === true) {
        this.imagepath = require("@/views/images/cafe.jpg")
      }
      if (this.openfeedback2 === false) {
        this.openfeedback2 = true
      }
    },
    choices3(index) {
      this.openfeedback3 === false
      this.feedback3 = this.quizlist.quiz3.choices[index].feedback
      if (this.quizlist.quiz3.choices.isCorrect === true) {
        this.imagepath = require("@/views/images/cafe.jpg")
      }
      if (this.openfeedback3 === false) {
        this.openfeedback3 = true
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
    },
  },
}
</script>
