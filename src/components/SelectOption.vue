<template>
  <div class="SlectOption">
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
      <div>濃厚さのレベルを教えてください</div>
      <select v-model.number="selectedrichness">
        <option disabled value="">Please Select</option>
        <option
          v-for="(rich, index) in Richness"
          v-bind:key="index"
          v-bind:value="rich"
          type="number"
        >
          <div>{{ rich }}</div>
        </option>
      </select>
      <div>選択項目: {{ selectedrichness }}</div>
    </div>
    <div>
      <div>カロリーのレベルを教えてください</div>
      <select v-model.number="selectedcalorie">
        <option disabled value="">Please Select</option>
        <option
          v-for="(calorie, index) in Calories"
          v-bind:key="index"
          v-bind:value="calorie"
          type="number"
        >
          <div>{{ calorie }}</div>
        </option>
      </select>
      <div>選択項目: {{ selectedcalorie }}</div>
    </div>
    <div>
      <button v-on:click="DrinkCustom">決定</button>
    </div>
    <div v-if="opencompletecustom">
      <div>おすすめのカスタムは</div>
      <div
        v-for="(custom, index) in completecustom.custom"
        v-bind:key="index"
        v-bind:value="custom"
      >
        {{ custom.customname }}
      </div>
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
      cutomstatus: "",
      Sweetness: [1, 2, 3],
      Richness: [1, 2, 3],
      Calories: [1, 2, 3],
      count: [1, 2, 3],
      decidedcustom: "",
      addingprice: 0,
      getcustomprice: 0,
      customplan: "",
      selectedsweetness: "",
      selectedrichness: "",
      selectedcalorie: "",
      selectedchoices: [],
      getchoices: "",
      customnumber: "",
      selectedcustom: "",
      custombudget: 0,
      opencustomimage: false,
      opencompletecustom: false,
      number: 0,
      custom: "",
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
      this.opencompletecustom === false
      this.selectedchoices = []
      this.getchoices = ""
      this.custombudget = this.fuga[0]
      this.customstatus = this.custombudget.status.map((obj) => obj.status)
      for (let i = 0; i <= this.customstatus.length; i++) {
        if (this.customstatus[i] === false) {
          this.custom = this.customchoices.filter((element) => {
            return (
              element.action === "add" &&
              element.categoryid === i &&
              (element.sweetlevel === this.selectedsweetness ||
                element.sweetlevel === this.selectedsweetness + 1) &&
              (element.richlevel === this.selectedrichness ||
                element.richlevel === this.selectedrichness + 1) &&
              (element.calorielevel === this.selectedcalorie ||
                element.calorielevel === this.selectedcalorie + 1)
            )
          })
          this.number = Math.floor(Math.random() * this.custom.length)
          this.custom = this.custom[this.number]
        } else if (this.customstatus[i] === true) {
          this.custom = this.customchoices.filter((element) => {
            return (
              element.action === "change" &&
              element.categoryid === i &&
              (element.sweetlevel === this.selectedsweetness ||
                element.sweetlevel === this.selectedsweetness + 1) &&
              (element.richlevel === this.selectedrichness ||
                element.richlevel === this.selectedrichness + 1) &&
              (element.calorielevel === this.selectedcalorie ||
                element.calorielevel === this.selectedcalorie + 1)
            )
          })
          this.number = Math.floor(Math.random() * this.custom.length)
          this.custom = this.custom[this.number]
        } else {
          this.custom = undefined
        }
        this.selectedchoices.push(this.custom)
      }
      this.getchoices = this.selectedchoices.filter((element) => {
        return !(element === undefined)
      })
      if (this.custombudget.custombudget < 55) {
        this.getchoices = this.getchoices.filter((element) => {
          return !(element.price === (55 || 110))
        })
        const result = []
        let countindex = Math.floor(Math.random() * this.count.length)
        this.decidedcustomprice = 0

        for (let i = 0; i <= countindex; i++) {
          let customindex = Math.floor(Math.random() * this.getchoices.length)
          this.decidedcustom = this.getchoices[customindex]
          result[i] = this.decidedcustom
          this.getchoices.splice(customindex, 1)
        }
        this.selectedcustom = result
        this.decidedcustomprice = 0
      }
      if (55 <= this.custombudget.custombudget) {
        if (
          55 <= this.custombudget.custombudget &&
          this.custombudget.custombudget < 110
        ) {
          this.getchoices = this.getchoices.filter((element) => {
            return element.price === (55 || 0)
          })
        }
        const result = []
        const countindex = Math.floor(Math.random() * this.count.length)
        this.decidedcustomprice = 0
        for (let i = 0; i <= countindex; i++) {
          const customindex = Math.floor(Math.random() * this.getchoices.length)
          this.decidedcustom = this.getchoices[customindex]
          this.getcustomprice = this.decidedcustom.price
          this.decidedcustomprice += this.getcustomprice
          if (this.decidedcustomprice < this.custombudget.custombudget) {
            result[i] = this.decidedcustom
          } else {
            this.decidedcustomprice -= this.decidedcustom.price
          }
          this.getchoices.splice(customindex, 1)
        }
        this.selectedcustom = result
      }
      console.log(this.selectedcustom)
      this.completecustom.product_name = this.custombudget.product_name
      this.completecustom.drink_image = this.custombudget.drink_image
      this.completecustom.custom = this.selectedcustom
      this.completecustom.price =
        Number(this.custombudget.price) + this.decidedcustomprice
      this.completecustom.size = this.custombudget.size
      if (this.opencompletecustom === false) {
        this.opencustomimage = !this.opencustomimage
        this.opencompletecustom = !this.opencompletecustom
      }
      this.$emit("get-complete-custom", this.completecustom)
    },
  },
}
</script>
