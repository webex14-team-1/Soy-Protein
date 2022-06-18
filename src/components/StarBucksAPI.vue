<template>
  <div>
    <!-- 予算の選択 -->
    <div>
      <div>
        <div>budget</div>
        <input type="number" v-model="selectedbudget" />
      </div>
      <div>選択項目: {{ decidedbudget }}</div>
    </div>
    <!-- ドリンク表示 -->
    <div>
      <!-- フラペチーノ -->
      <div>
        <button v-on:click="getfrappuccino">フラペチーノ</button>
        <div v-if="openfrappuccino">
          <select v-model="selecteddrink" v-on:click="deleteitem">
            <option disabled value="">Please Select</option>
            <option
              v-for="(frappuccino, index) in frappuccinos"
              v-bind:key="index"
              v-bind:value="frappuccino"
            >
              <div>{{ frappuccino.product_name }}</div>
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
      <!-- エスプレッソ -->
      <div>
        <button v-on:click="getespresso">エスプレッソ</button>
        <div v-if="openespresso">
          <select v-model="selecteddrink" v-on:click="deleteitem">
            <option disabled value="">Please Select</option>
            <option
              v-for="(espresso, index) in espressos"
              v-bind:key="index"
              v-bind:value="espresso"
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
              <div>{{ size_price.size }}{{ size_price.price }}</div>
            </option>
          </select>
        </div>
      </div>
      <!-- ティー -->
      <div>
        <button v-on:click="gettea">ティー</button>
        <div v-if="opentea">
          <select v-model="selecteddrink" v-on:click="deleteitem">
            <option disabled value="">Please Select</option>
            <option
              v-for="(tea, index) in teas"
              v-bind:key="index"
              v-bind:value="tea"
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
              <div>{{ size_price.size }}{{ size_price.price }}</div>
            </option>
          </select>
        </div>
      </div>
      <!-- ドリップ -->
      <div>
        <button v-on:click="getdrip">ドリップ</button>
        <div v-if="opendrip">
          <select v-model="selecteddrink" v-on:click="deleteitem">
            <option disabled value="">Please Select</option>
            <option
              v-for="(drip, index) in drips"
              v-bind:key="index"
              v-bind:value="drip"
            >
              <div>{{ drip.product_name }}</div>
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
      <div>
        <button v-on:click="getother">その他</button>
        <div v-if="openother">
          <select v-model="selecteddrink" v-on:click="deleteitem">
            <option disabled value="">Please Select</option>
            <option
              v-for="(other, index) in others"
              v-bind:key="index"
              v-bind:value="other"
            >
              <div>{{ other.product_name }}</div>
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
    <!-- ドリンク決定ボタン（CustomViewに情報を送信) -->
    <div>
      <button v-on:click="senddrink">ドリンク決定</button>
    </div>
    <!-- ドリンクの情報を表示 -->
    <div>
      選んだドリンク{{ selecteddrink.product_name }}
      {{ selectedsizeprice.size }}￥{{ selectedsizeprice.price }}
    </div>
  </div>
</template>
<script>
import starbucks from "../assets/starbucks.json"
export default {
  data() {
    return {
      starbucks: starbucks,
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
