<script setup>

const props = defineProps({
  classList: {
    type: String,
    reqired: false
  }
})

</script>

<template>
  <button :class="['btn', classList]">
    <slot></slot>
  </button>
</template>



<style scoped>

</style>