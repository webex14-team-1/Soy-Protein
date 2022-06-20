<template>
  <div class="Customview">
    <h1>スターバックスカスタム</h1>
    <StarBucksAPI @get-selected-drink="adddrink" />
    <SelectOption :fuga="newdrink" />
  </div>
</template>
<script>
import StarBucksAPI from "@/components/StarBucksAPI.vue"
import SelectOption from "@/components/SelectOption.vue"

export default {
  components: {
    StarBucksAPI,
    SelectOption,
  },
  data() {
    return {
      newdrink: [],
    }
  },
  methods: {
    adddrink(value) {
      this.newdrink = []
      const drink = value
      this.newdrink.unshift(drink)
      console.log(this.newdrink)
    },
  },
}
</script>
