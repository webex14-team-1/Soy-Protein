<template>
  予算の選択
  <div>
    <div>budget</div>
    <input type="number" v-model.number="selectedbudget" />
  </div>
  <div>選択項目: {{ selectedbudget }}</div>

  #甘さの選択
  <div v-for="(sweet, index) in Sweetness" v-bind:key="index">
    <div>{{ sweet.name }}</div>
    <select v-model.number="selectedsweetness">
      <option
        v-for="(option, index) in sweet.options"
        v-bind:key="index"
        v-bind:value="option"
        type="number"
      >
        {{ option }}
      </option>
    </select>
  </div>
  <div>選択項目: {{ selectedsweetness }}</div>

  <div>
    <button v-on:click="DrinkCustom">決定</button>
  </div>

  <div>
    <div>
      あなたにおすすめのカスタムは
      {{ this.selectedcustom.name }}
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choices: [
        { name: "ホイップクリーム増量", sweetlevel: 3 },
        { name: "ホイップクリーム減量", sweetlevel: 2 },
        { name: "ホイップクリーム無し", sweetlevel: 1 },
        { name: "シロップ増量", sweetlevel: 3 },
        { name: "シロップ減量", sweetlevel: 2 },
        { name: "シロップ無し", sweetlevel: 1 },
        { name: "パウダー/チョコチップ増量", sweetlevel: 3 },
        { name: "パウダー/チョコチップ減量", sweetlevel: 2 },
        { name: "パウダー/チョコチップ無し", sweetlevel: 1 },
        { name: "キャラメルソース追加", sweetlevel: 3 },
        { name: "チョコレートソース追加", sweetlevel: 2 },
        { name: "はちみつ追加", sweetlevel: 2 },
        { name: "シナモンパウダー追加", sweetlevel: 2 },
      ],
      Sweetness: [{ name: "sweetness" }, { options: [1, 2, 3] }],
      selectedsweetness: "",
      selectedchoices: "",
      customnumber: "",
      selectedcustom: "",
    }
  },
  methods: {
    DrinkCustom: function () {
      console.log(this.selectedsweetness)
      this.selectedchoices = this.choices.filter(function (element) {
        return element.sweetlevel === this.selectedsweetness
      })
      console.log(this.selectedchoices)
      this.customnumber = Math.floor(
        Math.random() * this.selectedchoices.length
      )
      console.log(this.customnumber, this.selectedchoices[this.customnumber])
      this.selectedcustom = this.selectedchoices[this.customnumber]
      console.log(this.selectedcustom)
    },
  },
}
</script>
