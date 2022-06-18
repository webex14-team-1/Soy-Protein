<template>
  <div>
    <!-- 甘さの選択 -->
    <div>
      <div>甘さのレベルを教えてください</div>
      <select v-model.number="selectedsweetness">
        <option disabled value="">Please Select</option>
        <option
          v-for="(sweet, index) in Sweetness"
          v-bind:key="index"
          v-bind:value="sweet"
          type="number"
        >
          <div>{{ sweet }}</div>
        </option>
      </select>
      <div>選択項目: {{ selectedsweetness }}</div>
    </div>
    <!-- <div>
      <select v-model="customplan">
        <option disabled value="">Please Select</option>
        <option
          v-for="(plan, index) in customplans"
          v-bind:key="index"
          v-bind:value="plan"
        >
          <div>{{ plan }}</div>
        </option>
      </select>
      <div>カスタム{{ customplan }}</div>
    </div> -->
    <div>
      <button v-on:click="DrinkCustom">決定</button>
    </div>
    <div>
      <div>おすすめのカスタムは</div>
      <div
        v-for="(custom, index) in selectedcustom"
        v-bind:key="index"
        v-bind:value="custom"
      >
        {{ custom.name }}
      </div>
      <div v-if="openwarning">カスタムできません</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["fuga"], // StarBucksAPIから受信した情報
  data() {
    return {
      gotdrink: this.fuga,
      choices: [
        // 無料
        // { name: "ホイップクリーム増量", sweetlevel: 3, price: 0 },
        // { name: "ホイップクリーム減量", sweetlevel: 2, price: 0 },
        // { name: "ホイップクリーム無し", sweetlevel: 1, price: 0 },
        // { name: "シロップ増量", sweetlevel: 3, price: 0 },
        // { name: "シロップ減量", sweetlevel: 2, price: 0 },
        // { name: "シロップ無し", sweetlevel: 1, price: 0 },
        // { name: "パウダー/チョコチップ増量", sweetlevel: 3, price: 0 },
        // { name: "パウダー/チョコチップ減量", sweetlevel: 2, price: 0 },
        // { name: "パウダー/チョコチップ無し", sweetlevel: 1, price: 0 },
        // { name: "キャラメルソース追加", sweetlevel: 3, price: 0 },
        // { name: "チョコレートソース追加", sweetlevel: 2, price: 0 },
        // { name: "はちみつ追加", sweetlevel: 2, price: 0 },
        // { name: "シナモンパウダー追加", sweetlevel: 2, price: 0 },
        // 有料
        { name: "バニラシロップ", sweetlevel: 3, price: 50 },
        { name: "クラシックシロップ", sweetlevel: 3, price: 100 },
        { name: "キャラメルシロップ", sweetlevel: 1, price: 50 },
        { name: "モカシロップ", sweetlevel: 1, price: 100 },
        { name: "ホワイトモカシロップ", sweetlevel: 2, price: 50 },
        { name: "アーモンドトフィーシロップ", sweetlevel: 3, price: 50 },
        { name: "チャイシロップ", sweetlevel: 1, price: 100 },
        { name: "バニラシロップ2", sweetlevel: 2, price: 50 },
        { name: "クラシックシロップ2", sweetlevel: 1, price: 100 },
        { name: "キャラメルシロップ2", sweetlevel: 2, price: 50 },
        { name: "モカシロップ2", sweetlevel: 1, price: 100 },
        { name: "ホワイトモカシロップ2", sweetlevel: 1, price: 50 },
        { name: "アーモンドトフィーシロップ2", sweetlevel: 3, price: 50 },
        { name: "チャイシロップ2", sweetlevel: 2, price: 100 },
      ],
      // customplans: ["charge", "free"],
      Sweetness: [1, 2, 3],
      count: [1, 2, 3],
      decidedcustom: "",
      decidedcustomprice: 0,
      customplan: "",
      selectedsweetness: "",
      selectedchoices: "",
      customnumber: "",
      selectedcustom: "",
      custombudget: 0,
      openwarning: false,
      completecustom: { product_name: "", custom: "", image: "", price: "" },
    }
  },
  methods: {
    DrinkCustom: function () {
      console.log(this.fuga)
      console.log(this.customplan)
      this.custombudget = this.fuga[0]
      // 無料カスタムだけ
      // if (this.customplan === "free") {
      //   this.selectedchoices = this.choices.filter((element) => {
      //     return element.price === 0
      //   })
      //   console.log(this.selectedchoices)
      //   console.log(this.selectedsweetness)
      //   this.selectedchoices = this.selectedchoices.filter((element) => {
      //     return element.sweetlevel === this.selectedsweetness
      //   })
      //   console.log(this.selectedchoices)
      //   const result = []
      //   const countindex = Math.floor(Math.random() * this.count.length)
      //   console.log(countindex)
      //   for (let i = 0; i <= countindex; i++) {
      //     const customindex = Math.floor(
      //       Math.random() * this.selectedchoices.length
      //     )
      //     result[i] = this.selectedchoices[customindex]
      //     this.selectedchoices.splice(customindex, 1)
      //   }
      //   console.log(result)
      //   this.selectedcustom = result
      //   console.log(this.selectedcustom)
      // } elseif (this.customplan === "charge") {

      if (this.custombudget.custombudget < 50) {
        // カスタムの予算が50円未満
        // カスタムの予算が50円未満の時警告を表示する。
        this.openwarning = !this.openwarning
        console.log(this.openwarning)
      } else if (
        50 <= this.custombudget.custombudget &&
        this.custombudget.custombudget < 100
      ) {
        // カスタムの予算が50円以上100円未満
        if (this.openwarning) {
          // 警告が出ていれば消去する
          this.openwarning = !this.openwarning
        }
        // 50円のカスタムだけ抽出
        this.selectedchoices = this.choices.filter((element) => {
          return element.price === 50
        })
        console.log(this.selectedchoices)
        console.log(this.selectedsweetness)
        // selectedsweetnessと同じsweetlevelのカスタムだけ抽出
        this.selectedchoices = this.selectedchoices.filter((element) => {
          return element.sweetlevel === this.selectedsweetness
        })
        console.log(this.selectedchoices)
        const result = []
        // 抽出する要素のインデックス番号をランダムに決める
        const customindex = Math.floor(
          Math.random() * this.selectedchoices.length
        )
        // 表示するカスタムの決定
        this.decidedcustom = this.selectedchoices[customindex]
        console.log(this.decidedcustom)
        console.log(this.decidedcustom.price)
        this.decidedcustomprice = this.decidedcustom.price
        console.log(this.decidedcustomprice)
        result[0] = this.decidedcustom
        console.log(result)
        this.selectedcustom = result
        console.log(this.selectedcustom)
        console.log(this.decidedcustomprice)
      } else {
        // カスタムの予算が100円以上
        if (this.openwarning) {
          // 警告が出ていれば消去する
          this.openwarning = !this.openwarning
        }
        // 50円と100円のカスタムを抽出
        this.selectedchoices = this.choices.filter((element) => {
          return element.price === 50 || element.price === 100
        })
        console.log(this.selectedchoices)
        console.log(this.selectedsweetness)
        // selectedsweetnessと同じsweetlevelのカスタムだけ抽出
        this.selectedchoices = this.selectedchoices.filter((element) => {
          return element.sweetlevel === this.selectedsweetness
        })
        console.log(this.selectedchoices)
        const result = []
        // カスタムの表示数を決める
        const countindex = Math.floor(Math.random() * this.count.length)
        console.log(countindex)
        // カスタムの合計価格をリセット
        this.decidedcustomprice = 0
        // カスタムの表示数分抽出する
        for (let i = 0; i <= countindex; i++) {
          const customindex = Math.floor(
            Math.random() * this.selectedchoices.length
          )
          this.decidedcustom = this.selectedchoices[customindex]
          console.log(this.decidedcustom)
          console.log(this.decidedcustom.price)
          // カスタムの金額を足す
          this.decidedcustomprice += this.decidedcustom.price
          console.log(this.decidedcustomprice)
          // カスタムの合計金額が予算を下回った場合だけreslutに足す
          if (this.decidedcustomprice < this.custombudget.custombudget) {
            result[i] = this.decidedcustom
          } else {
            // 上回った場合は合計金額から引く
            this.decidedcustomprice -= this.decidedcustom.price
          }
          // 同じカスタムを抽出するのを防ぐために抽出されたカスタムは配列から削除
          this.selectedchoices.splice(customindex, 1)
        }
        console.log(result)
        this.selectedcustom = result
        console.log(this.selectedcustom)
        console.log(this.decidedcustomprice)
      }
      // お気に入りに表示する用のオブジェクト作成
      this.completecustom.product_name = this.custombudget.product_name
      this.completecustom.custom = this.selectedcustom
      this.completecustom.price =
        Number(this.custombudget.price) + this.decidedcustomprice
      console.log(this.completecustom)
    },
  },
}
</script>
