<template>
  <h1>StarBucks Trivia</h1>
  <div class="Trivia"></div>
  <h2>Q. {{ quiz.text }}</h2>
  <img class="quiz-image" v-bind:src="imagepath" alt="" />

  <div class="container">
    <button v-on:click="choice(0)">
      {{ quiz.choices[0].text }}
    </button>
    <button v-on:click="choice(1)">
      {{ quiz.choices[1].text }}
    </button>
    <button v-on:click="choice(2)">
      {{ quiz.choices[2].text }}
    </button>
    <button v-on:click="choice(3)">
      {{ quiz.choices[3].text }}
    </button>
  </div>

  <div>{{ feedback }}</div>
</template>

<script>
export default {
  data() {
    return {
      imagepath: require("@/views/images/latte.jpg"),

      feedback: "",
      quizlist: {
        quiz1: [
          {
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
        ],
        quiz2: [
          {
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
        quiz3:[
          {
            text:"スタバのドリンクで２番目に大きいサイズは？",
            Image:"@/views/images/stb.size.jpg",
            choices: [
              {
                text:"トール",
                isCorrect: false,
                feedback: "残念!トールは350㎖!下から２番目のサイズ！",
              },
              {
                text:"ベンティー",
                isCorrect: false,
                feedback: "おしい!ベンティーは590㎖!1番大きいサイズ!",
              },
              {
                text:"ショート",
                isCorrect: false,
                feedback: "残念!ショートは240㎖!１番小さいサイズ!",
              },
              {
                text:"グランデ",
                isCorrect: true,
                feedback: "正解!グランデは470㎖!",
              },
            ]
          }
        ],

        }
      },
    };
  },
  methods: {
    choice(i) {
      this.feedback = this.quiz.chooices[i].feedback;
      if (this.quiz.choice[i].isCorrect === true) {
        this.imagepath = require("@/views/images/cafe.jpg");
      }
    },
  },
}
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
