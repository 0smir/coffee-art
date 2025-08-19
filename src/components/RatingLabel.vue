<script setup>

import SvgIcon from '@/components/base-components/SvgIcon.vue';

const props = defineProps({
  rating: {
    type: Number,
    required: true
  }
})

</script>

<template>
  <div class="rating__label">
    <SvgIcon class="icon" name="star" /> {{ rating }} 
  </div>
</template>



<style lang="scss" scoped>

</style>