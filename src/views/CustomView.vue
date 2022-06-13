<template>
  <h1>こんにちは</h1>
  <StarBucksAPI />
  <SelectOption />
</template>
<script>
import StarBucksAPI from "@/components/StarBucksAPI.vue"
import SelectOption from "@/components/SelectOption.vue"

export default {
  components: {
    StarBucksAPI,
    SelectOption,
  },
}
</script>
