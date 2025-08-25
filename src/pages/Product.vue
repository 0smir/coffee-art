<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
// const props = defineProps({
//   id: {
//     type: String,
//     require: true,
//   }
// });
console.log(route.params.id)
</script>

<template>
  <div class="page page--product-details">
    <h1>Product Item {{ route.params.id }}</h1>
  </div>
</template>

<style lang="scss">

</style>