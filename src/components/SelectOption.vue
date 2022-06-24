<template>
  <div class="SlectOption">
    <div class="startfeel">ここからはあなたの気分や好みを伺います</div>
    <div class="sweet-container">
      <div class="explain-sweet">
        <div>
          <h1>Step4</h1>
          <h2>甘さはどれくらいがいいですか？ (1:甘さ少なめ 2:普通 3:甘い)</h2>
        </div>
      </div>
      <select v-model.number="selectedsweetness" class="selectchoice">
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
      <div class="selectedstatus">選択項目: {{ selectedsweetness }}</div>
    </div>
    <div class="rich-container">
      <div class="explain-light">
        <div>
          <h1>Step5</h1>
          <h2>濃厚さはどれくらいがいいですか？(1:あっさり 2:普通 3:濃厚)</h2>
        </div>
      </div>
      <select v-model.number="selectedrichness" class="selectchoice">
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
      <div class="selectedstatus">選択項目: {{ selectedrichness }}</div>
    </div>
    <div class="claroe-container">
      <div class="explain-calorie">
        <div>
          <h1>Step6</h1>
          <h2>カロリーはどれくらいがいいですか？(1:低い 2:普通 3:高い)</h2>
        </div>
      </div>
      <select v-model.number="selectedcalorie" class="selectchoice">
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
      <div class="selectedstatus">選択項目: {{ selectedcalorie }}</div>
    </div>
    <div class="decided-feel">
      <div class="explain-decide">
        <div class="decidebutton">
          <h1>Step7</h1>
          <h2>決定ボタンを推してしてください。</h2>
        </div>
      </div>
      <div class="send-perfect">
        <button
          v-on:click="DrinkCustom"
          class="button btn btn--orange btn--radius"
        >
          決定
        </button>
      </div>
    </div>
    <div v-if="opencompletecustom" class="opencustom-container">
      <div
        class="customname"
        v-for="(custom, index) in completecustom.custom"
        v-bind:key="index"
        v-bind:value="custom"
      >
        カスタム： {{ custom.customname }}
      </div>
      <div>
        <div>
          <img
            class="drinkimg"
            v-if="opencustomimage"
            v-bind:src="require(`@/assets/${completecustom.drink_image}.png`)"
          />
        </div>
        <div>
          <div
            class="drinkmaster"
            v-for="(custom, index) in completecustom.custom"
            v-bind:key="index"
            v-bind:value="custom"
          >
            <img
              class="customimg"
              v-if="opencustomimage"
              v-bind:src="
                require(`@/assets/custom.img/${custom.customimage}.png`)
              "
            />
          </div>
        </div>
      </div>
      <button
        v-on:click="registerFavorite"
        class="button btn btn--orange btn--radius register-favorite"
      >
        お気に入り登録
      </button>
    </div>
  </div>
</template>
<style>
.SlectOption {
  font-size: 20px;
}
.selectchoice {
  width: 150px;
  height: 60px;
  font-size: 20px;
  display: block;
  margin-right: 30px;
}
.startfeel {
  text-align: center;
  margin-bottom: 100px;
  font-size: 25px;
}
.rich-container {
  background-color: #f5ede6;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-left: 108px;
  padding-bottom: 20px;
  font-size: 19px;
}
.sweet-container {
  margin-left: 120px;
  margin-bottom: 100px;
  font-size: 19px;
}
.claroe-container {
  margin-left: 120px;
  margin-bottom: 100px;
  font-size: 19px;
}
.decided-feel {
  background-color: #f5ede6;
  font-size: 19px;
  display: flex;
}
.send-perfect {
  text-align: center;
  margin-top: 50px;
  margin-left: 100px;
  width: 100px;
  height: 100px;
  float: right;
}
.selectchoice {
  text-align: center;
  margin: auto;
}
.opencustom-container {
  width: 500px;
  height: 500px;
  background-color: #f5ede6;
  margin-right: 100px;
  margin-top: 30px;
  margin-left: 500px;
}
.customnam {
  display: inline-block;
  margin-left: 100px;
}
.drinkmaster {
  display: flex;
  flex-wrap: wrap;
}
.customimg {
  display: block;
  width: 150px;
  height: 150px;
  margin: auto;
}
.drinkimg {
  width: 150px;
  height: 150px;
  margin-left: 200px;
}
.button1 {
  margin-right: 30px;
  margin-left: 20px;
  width: 100px;
  height: 50px;
  font-weight: 200;
  font-size: 20px;
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
  font-size: 20px;
}
.selectedstatus {
  text-align: center;
  margin-top: 30px;
  font-size: 20px;
}
.register-favorite {
  margin-left: 200px;
}
.decidebutton {
}
</style>
<script>
import customchoices from "../assets/custom.json"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../firebase"
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
      this.completecustom.count = this.custombudget.count
      this.completecustom.custom = this.selectedcustom
      this.completecustom.price =
        Number(this.custombudget.price) + this.decidedcustomprice
      this.completecustom.size = this.custombudget.size
      if (this.opencompletecustom === false) {
        this.opencustomimage = !this.opencustomimage
        this.opencompletecustom = !this.opencompletecustom
      }
      this.$emit("get-complete-custom", this.completecustom)
      console.log(this.completecustom)
      console.log(this.completecustom.drink_image)
    },
    async registerFavorite() {
      if (this.completecustom.changeName === "お気に入り") {
        this.completecustom.changeName = "登録済み"
        this.completecustom.switchDisabled = true
      }
      /* ↓firestoreに追加するコード↓ */
      await addDoc(collection(db, "favorite"), {
        drink: this.completecustom.product_name,
        price: this.completecustom.price,
        count: this.completecustom.count,
        custom: this.completecustom.custom,
        switchDisabled: false,
        changeDetail: "詳細へ",
        onOff: false,
        image_path: this.completecustom.drink_image,
        registerDate: Timestamp.fromDate(new Date()),
      })
    },
  },
}
</script>
