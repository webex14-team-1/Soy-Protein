<template>
  <div class="Custom">
    <div class="content-title"><h1>Customize</h1></div>
    <div class="StarBucksAPI">
      <div class="favorite-explain">
        <div class="customize-explain-text">
          <p class="customize-explain-text-p">
            <span>Customize</span
            ><br />ここではあなたに合わせたカスタムを提案します。<br />もし気にいればお気に入り登録をしましょう。<br />Favoriteに保存して後から見ることができます。
          </p>
        </div>
      </div>
      <!-- 予算の選択 -->
      <div class="budget">
        <div class="explain-budget">
          <div>
            <h1>Step1</h1>
            <h2>予算を入力してください。(半角数字)</h2>
          </div>
        </div>
        <div class="budget-container">
          <div bidget-text>予算</div>
          <input type="number" v-model="selectedbudget" class="budgetinput" />
        </div>
        <div class="decidedbudget">選択金額:{{ selectedbudget }}円</div>
      </div>
      <!-- ドリンク表示 -->
      <div class="drink">
        <div class="select-drink">
          <div>
            <h1>Step2</h1>
            <h2>ドリンクとサイズを選択してください。</h2>
          </div>
        </div>

        <!-- フラペチーノ -->
        <div class="drinker">
          <div class="drink-container">
            <button
              v-on:click="getfrappuccino"
              class="button btn btn--orange btn--radius"
            >
              フラペチーノ
            </button>
            <div v-if="openfrappuccino">
              <select v-model="selecteddrink" v-on:click="deleteitem">
                <option disabled value="">Please Select</option>
                <option
                  v-for="(frappuccino, index) in frappuccinos"
                  v-bind:key="index"
                  v-bind:value="frappuccino"
                >
                  <div class="drink-name">{{ frappuccino.product_name }}</div>
                </option>
              </select>
              <select v-model="selectedsizeprice">
                <option disabled value="">Please Select</option>
                <option
                  v-for="(size_price, index) in selecteddrink.sizes_prices"
                  v-bind:key="index"
                  v-bind:value="size_price"
                >
                  <div class="size-price">
                    {{ size_price.size }}{{ size_price.price }}
                  </div>
                </option>
              </select>
            </div>
          </div>
          <!-- エスプレッソ -->
          <div class="drink-container">
            <button
              v-on:click="getespresso"
              class="button btn btn--orange btn--radius"
            >
              エスプレッソ
            </button>
            <div v-if="openespresso">
              <select v-model="selecteddrink" v-on:click="deleteitem">
                <option disabled value="">Please Select</option>
                <option
                  v-for="(espresso, index) in espressos"
                  v-bind:key="index"
                  v-bind:value="espresso"
                  class="drink-name"
                >
                  {{ espresso.product_name }}
                </option>
              </select>
              <select v-model="selectedsizeprice">
                <option disabled value="">Please Select</option>
                <option
                  v-for="(size_price, index) in selecteddrink.sizes_prices"
                  v-bind:key="index"
                  v-bind:value="size_price"
                >
                  <div class="size-price">
                    {{ size_price.size }}{{ size_price.price }}
                  </div>
                </option>
              </select>
            </div>
          </div>
          <!-- ティー -->
          <div class="drink-container">
            <button
              v-on:click="gettea"
              class="button btn btn--orange btn--radius"
            >
              ティー
            </button>
            <div v-if="opentea">
              <select v-model="selecteddrink" v-on:click="deleteitem">
                <option disabled value="">Please Select</option>
                <option
                  v-for="(tea, index) in teas"
                  v-bind:key="index"
                  v-bind:value="tea"
                  class="drink-name"
                >
                  <div>{{ tea.product_name }}</div>
                </option>
              </select>
              <select v-model="selectedsizeprice">
                <option disabled value="">Please Select</option>
                <option
                  v-for="(size_price, index) in selecteddrink.sizes_prices"
                  v-bind:key="index"
                  v-bind:value="size_price"
                >
                  <div class="size-price">
                    {{ size_price.size }}{{ size_price.price }}
                  </div>
                </option>
              </select>
            </div>
          </div>
          <!-- ドリップ -->
          <div class="drink-container">
            <button
              v-on:click="getdrip"
              class="button btn btn--orange btn--radius"
            >
              ドリップ
            </button>
            <div v-if="opendrip">
              <select v-model="selecteddrink" v-on:click="deleteitem">
                <option disabled value="">Please Select</option>
                <option
                  v-for="(drip, index) in drips"
                  v-bind:key="index"
                  v-bind:value="drip"
                  class="drink-name"
                >
                  <div class="size-price">{{ drip.product_name }}</div>
                </option>
              </select>
              <select v-model="selectedsizeprice">
                <option disabled value="">Please Select</option>
                <option
                  v-for="(size_price, index) in selecteddrink.sizes_prices"
                  v-bind:key="index"
                  v-bind:value="size_price"
                >
                  <div>{{ size_price.size }}{{ size_price.price }}</div>
                </option>
              </select>
            </div>
          </div>
          <!-- その他 -->
          <div class="drink-container">
            <button
              v-on:click="getother"
              class="button btn btn--orange btn--radius"
            >
              その他
            </button>
            <div v-if="openother">
              <select v-model="selecteddrink" v-on:click="deleteitem">
                <option disabled value="">Please Select</option>
                <option
                  v-for="(other, index) in others"
                  v-bind:key="index"
                  v-bind:value="other"
                  class="drink-name"
                >
                  <div class="size-price">{{ other.product_name }}</div>
                </option>
              </select>
              <select v-model="selectedsizeprice">
                <option disabled value="">Please Select</option>
                <option
                  v-for="(size_price, index) in selecteddrink.sizes_prices"
                  v-bind:key="index"
                  v-bind:value="size_price"
                >
                  <div>{{ size_price.size }}{{ size_price.price }}</div>
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- ドリンクの情報を表示 -->
      <div class="get-drink">
        選んだドリンクは {{ selecteddrink.product_name }} です。 サイズは
        {{ selectedsizeprice.size }} で価格は
        {{ selectedsizeprice.price }} 円です。
      </div>
      <!-- ドリンク決定ボタン（CustomViewに情報を送信) -->
      <div class="decide-drink">
        <div class="explain-decide">
          <div>
            <h1>Step3</h1>
            <h2>決定ボタンを推してしてください。</h2>
          </div>
        </div>
        <div class="send-drink">
          <button
            v-on:click="senddrink"
            class="button btn btn--orange btn--radius"
          >
            決定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.Custom {
  margin: 0;
  padding: 0;
  background-color: #faf6f2;
  font-size: 20px;
}

.content-title {
  height: 100px;
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
.customize-explain {
  height: 20%;
  margin: auto;
  line-height: 50px;
  margin: auto;
  animation-name: slideIn4;
  animation-duration: 2s;
  padding-bottom: 100px;
}
.StarBucksAPI {
  margin-top: 0%;
}
.customize-container {
  margin: 0%;
  height: 90%;
}
.budget {
  display: flex;
  background-color: #f5ede6;
}
.explain-budget {
  margin-left: 120px;
  margin-bottom: 100px;
}
.budget-container {
  margin-top: 70px;
  margin-left: 50px;
  width: 50px;
  height: 100px;
  float: right;
}
.decidedbudget {
  margin-top: 100px;
  margin-left: 170px;
  width: 100px;
  height: 100px;
  float: right;
}
.drink {
  margin-bottom: 100px;
}
.drinker {
  display: flex;
  margin-left: 120px;
}
.select-drink {
  margin-left: 120px;
}

.drink-container {
  margin-top: 80px;
}
.decide-drink {
  background-color: #f5ede6;
  padding-left: 108px;
  padding-bottom: 40px;
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px;
}
.get-drink {
  text-align: center;
  margin-top: 30px;
}
.send-drink {
  margin-top: 50px;
  margin-left: 300px;
  width: 100px;
  height: 100px;
  float: right;
}
.button {
  width: 200px;
  height: 100px;
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
.customize-explain {
  height: 20%;
  margin: auto;
  line-height: 50px;
  margin: auto;
  animation-name: slideIn4;
  animation-duration: 2s;
  padding-bottom: 100px;
}
.customize-explain-text {
  height: 300px;
  text-align: center;
  font-weight: 200;
  font-size: 25px;
}
.customize-explain-text-p {
  margin: auto;
  text-align: center;
  line-height: 70px;
  margin-top: 100px;
}
.customize-explain-text-p span {
  font-size: 30px;
}
.button {
  width: 200px;
  height: 100px;
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
.button {
  width: 200px;
  height: 100px;
}
</style>
<script>
import starbucks from "../assets/starbucks.json"
export default {
  data() {
    return {
      starbucks: starbucks,
      selectedbudget: "",
      decidedbudget: "",
      custombudget: 0,
      frappuccinos: "",
      espressos: "",
      teas: "",
      drips: "",
      others: "",
      selecteddrink: "",
      selectedsizeprice: "",
      openfrappuccino: false,
      openespresso: false,
      opentea: false,
      opendrip: false,
      openother: false,
      opendrink: false,
    }
  },
  methods: {
    deleteitem: function () {
      this.selectedsizeprice = ""
    },
    // ドリンク情報の送信
    senddrink: function () {
      this.openimage = !this.openimage
      this.custombudget = this.selectedbudget - this.selectedsizeprice.price
      this.selecteddrink.custombudget = this.custombudget
      this.selecteddrink.price = this.selectedsizeprice.price
      this.selecteddrink.size = this.selectedsizeprice.size
      this.$emit("get-selected-drink", this.selecteddrink)
    },
    // フラペチーノを表示（他のカテゴリが開いている場合は閉じる）
    getfrappuccino: function () {
      this.openfrappuccino = !this.openfrappuccino
      this.selecteddrink = ""
      this.selectedsizeprice = ""
      if (this.openespresso === true) {
        this.openespresso = !this.openespresso
      }
      if (this.opentea === true) {
        this.opentea = !this.opentea
      }
      if (this.opendrip === true) {
        this.opendrip = !this.opendrip
      }
      if (this.openother === true) {
        this.openother = !this.openother
      }
      if (this.openimage === true) {
        this.openimage = !this.openimage
      }
    },
    // エスプレッソを表示（他のカテゴリが開いている場合は閉じる）
    getespresso: function () {
      this.openespresso = !this.openespresso
      this.selecteddrink = ""
      this.selectedsizeprice = ""
      if (this.openfrappuccino === true) {
        this.openfrappuccino = !this.openfrappuccino
      }
      if (this.opentea === true) {
        this.opentea = !this.opentea
      }
      if (this.opendrip === true) {
        this.opendrip = !this.opendrip
      }
      if (this.openother === true) {
        this.openother = !this.openother
      }
      if (this.openimage === true) {
        this.openimage = !this.openimage
      }
    },
    // ティーを表示（他のカテゴリが開いている場合は閉じる）
    gettea: function () {
      this.opentea = !this.opentea
      this.selecteddrink = ""
      this.selectedsizeprice = ""
      if (this.openfrappuccino === true) {
        this.openfrappuccino = !this.openfrappuccino
      }
      if (this.openespresso === true) {
        this.openespresso = !this.openespresso
      }
      if (this.opendrip === true) {
        this.opendrip = !this.opendrip
      }
      if (this.openother === true) {
        this.openother = !this.openother
      }
      if (this.openimage === true) {
        this.openimage = !this.openimage
      }
    },
    // ドリップを表示（他のカテゴリが開いている場合は閉じる）
    getdrip: function () {
      this.opendrip = !this.opendrip
      this.selecteddrink = ""
      this.selectedsizeprice = ""
      if (this.openfrappuccino === true) {
        this.openfrappuccino = !this.openfrappuccino
      }
      if (this.openespresso === true) {
        this.openespresso = !this.openespresso
      }
      if (this.opentea === true) {
        this.opentea = !this.opentea
      }
      if (this.openother === true) {
        this.openother = !this.openother
      }
      if (this.openimage === true) {
        this.openimage = !this.openimage
      }
    },
    //  その他を表示（他のカテゴリが開いている場合は閉じる）
    getother: function () {
      this.openother = !this.openother
      this.selecteddrink = ""
      this.selectedsizeprice = ""
      if (this.openfrappuccino === true) {
        this.openfrappuccino = !this.openfrappuccino
      }
      if (this.openespresso === true) {
        this.openespresso = !this.openespresso
      }
      if (this.opentea === true) {
        this.opentea = !this.opentea
      }
      if (this.opendrip === true) {
        this.opendrip = !this.opendrip
      }
      if (this.openimage === true) {
        this.openimage = !this.openimage
      }
    },
  },
  // ページ読み込み時にjsonからドリンクの情報を持ってくる
  created: function () {
    this.frappuccinos = starbucks.filter(function (element) {
      return element.category2_list_path === "frappuccino"
    })
    this.espressos = starbucks.filter(function (element) {
      return element.category2_list_path === "espresso"
    })
    this.teas = starbucks.filter(function (element) {
      return element.category2_list_path === "tea"
    })
    this.drips = starbucks.filter(function (element) {
      return element.category2_list_path === "drip"
    })
    this.others = starbucks.filter(function (element) {
      return element.category2_list_path === "others"
    })
  },
}
</script>
<style>
.frappuccino-container {
  background-color: #fffffe;
}
.espresso-container {
  background-color: #fffffe;
}
.drip-container {
  background-color: #fffffe;
}
.tea-container {
  background-color: #fffffe;
}
.other-container {
  background-color: #fffffe;
}
</style>
