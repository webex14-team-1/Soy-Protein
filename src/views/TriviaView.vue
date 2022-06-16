<template>
  <h1>StarBucks Trivia</h1>
  <div class="Trivia"></div>
  <img class="trivia-image" v-bind:src="imagepath" alt="スタバ画像" />

  <p>エスプレッソをミルクで１対９で割った飲み物は？</p>
  <p>スタバにタンブラーを持参すると何円引きになる？</p>
  <p>スタバのドリンクで２番目に大きいサイズは？</p>

  <div
    class="container"
    v-for="(choice, index) in quizlist.quiz1.choices"
    :key="index"
  >
    <button v-on:click="choice(0)">
      {{ choice.text }}
    </button>
  </div>
  <div
    class="container"
    v-for="(choice, index) in quizlist.quiz2.choices"
    :key="index"
  >
    <button v-on:click="choice(1)">
      {{ choice.text }}
    </button>
  </div>
  <div
    class="container"
    v-for="(choice, index) in quizlist.quiz3.choices"
    :key="index"
  >
    <button v-on:click="choice(2)">
      {{ choice.text }}
    </button>
  </div>

  <div>{{ feedback }}</div>
</template>

<script>
export default {
  data() {
    return {
      imagepath: require("@/views/images/stb.logo.png"),
      feedback: "",
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

        quiz2: [
          {
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
        ],

        quiz3: [
          {
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
        ],
      },
    };
  },

  methods: {
    choices() {
      this.feedback = this.quizlist.quiz1.choices[1].feedback;
      if (this.quiz.choices.isCorrect === true) {
        this.imagepath = require("@/views/images/cafe.jpg");
      }
    },
  },
};
</script>

<style>
.app {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.quiz-image {
  height: 300px;
  width: 300px;
  object-fit: contain;
}

.container {
  display: flex;
  height: 2em;
  width: 300px;
  padding: 1em;
  justify-content: space-around;
}
</style>
