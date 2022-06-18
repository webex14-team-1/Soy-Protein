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
    <div>
      <div>
        <img
          v-if="opencustomimage"
          v-bind:src="require(`@/assets/${completecustom.drink_image}.png`)"
        />
      </div>
      <div
        v-for="(custom, index) in completecustom.custom"
        v-bind:key="index"
        v-bind:value="custom"
      >
        <img
          v-if="opencustomimage"
          v-bind:src="require(`@/assets/custom.img/${custom.customimage}.png`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import customchoices from "../assets/custom.json"
export default {
  props: ["fuga"],
  data() {
    return {
      customchoices: customchoices,
      gotdrink: this.fuga,
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
      opencustomimage: false,
      completecustom: {
        product_name: "",
        drink_image: "",
        custom: "",
        price: "",
      },
    }
  },
  methods: {
    DrinkCustom: function () {
      console.log(this.customchoices)
      this.custombudget = this.fuga[0]
      if (this.custombudget.custombudget < 50) {
        this.openwarning = true
      } else if (
        50 <= this.custombudget.custombudget &&
        this.custombudget.custombudget < 100
      ) {
        if (this.openwarning) {
          this.openwarning = false
        }
        this.selectedchoices = this.customchoices.filter((element) => {
          return element.price === 50
        })
        // selectedsweetnessと同じsweetlevelのカスタムだけ抽出
        this.selectedchoices = this.selectedchoices.filter((element) => {
          return element.sweetlevel === this.selectedsweetness
        })
        console.log(this.this.selectedchoices)
        const result = []
        const customindex = Math.floor(
          Math.random() * this.selectedchoices.length
        )
        this.decidedcustom = this.selectedchoices[customindex]
        this.decidedcustomprice = this.decidedcustom.price
        result[0] = this.decidedcustom
        this.selectedcustom = result
      } else {
        if (this.openwarning) {
          this.openwarning = false
        }
        this.selectedchoices = this.customchoices.filter((element) => {
          return element.price === 50 || element.price === 100
        })
        // selectedsweetnessと同じsweetlevelのカスタムだけ抽出
        this.selectedchoices = this.selectedchoices.filter((element) => {
          return element.sweetlevel === this.selectedsweetness
        })
        const result = []
        const countindex = Math.floor(Math.random() * this.count.length)
        this.decidedcustomprice = 0
        for (let i = 0; i <= countindex; i++) {
          const customindex = Math.floor(
            Math.random() * this.selectedchoices.length
          )
          this.decidedcustom = this.selectedchoices[customindex]
          this.decidedcustomprice += this.decidedcustom.price
          if (this.decidedcustomprice < this.custombudget.custombudget) {
            result[i] = this.decidedcustom
          } else {
            this.decidedcustomprice -= this.decidedcustom.price
          }
          this.selectedchoices.splice(customindex, 1)
        }
        this.selectedcustom = result
      }
      this.completecustom.product_name = this.custombudget.product_name
      this.completecustom.drink_image = this.custombudget.drink_image
      this.completecustom.custom = this.selectedcustom
      this.completecustom.price =
        Number(this.custombudget.price) + this.decidedcustomprice
      this.completecustom.size = this.custombudget.size
      if (this.opencustomimage === false) {
        this.opencustomimage = !this.opencustomimage
      }
    },
  },
}
</script>
