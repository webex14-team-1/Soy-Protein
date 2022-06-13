<template>
  <div>
    <h1>スタバAPIの取得</h1>
  </div>
  <div>
    <!-- ＃フラペチーノ -->
    <div>
      <div>フラペチーノ</div>
      <select>
        <option
          v-for="(frappuccino, index) in frappuccinos"
          v-bind:key="index"
          v-bind:value="frappuccino"
        >
          <div>{{ frappuccino.product_name }} ${{ frappuccino.price }}</div>
        </option>
      </select>
    </div>
    <!-- ＃エスプレッソ -->
    <div>
      <div>エスプレッソ</div>
      <select>
        <option
          v-for="(espresso, index) in espressos"
          v-bind:key="index"
          v-bind:value="frappuccino"
        >
          <div>{{ espresso.product_name }} ${{ espresso.price }}</div>
        </option>
      </select>
    </div>

    <!-- ＃ティー -->
    <div>
      <div>ティー</div>
      <select>
        <option
          v-for="(tea, index) in teas"
          v-bind:key="index"
          v-bind:value="tea"
        >
          <div>{{ tea.product_name }} ${{ tea.price }}</div>
        </option>
      </select>
    </div>

    <!-- ＃ドリップ -->
    <div>
      <div>ドリップ</div>
      <select>
        <option
          v-for="(drip, index) in drips"
          v-bind:key="index"
          v-bind:value="drip"
        >
          <div>{{ drip.product_name }}${{ drip.price }}</div>
        </option>
      </select>
    </div>

    <!-- ＃その他 -->
    <div>
      <div>その他</div>
      <select>
        <option
          v-for="(other, index) in others"
          v-bind:key="index"
          v-bind:value="other"
        >
          <div>{{ other.product_name }}</div>
          <div>${{ other.price }}</div>
        </option>
      </select>
    </div>
  </div>
</template>
<script>
import starbucks from "../assets/starbucks.json"
export default {
  data() {
    return {
      starbucks: starbucks,
      frappuccinos: "",
      espressos: "",
      teas: "",
      drips: "",
      others: "",
      selecteddrink: "",
      selectedprice: "",
    }
  },
  methods: {
    getdrink: function () {
      this.open = !this.open
    },
  },
  created: function () {
    console.log(starbucks)
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
    console.log(this.frappuccinos)
    console.log(this.espressos)
    console.log(this.teas)
    console.log(this.drips)
    console.log(this.others)
  },
}
</script>
