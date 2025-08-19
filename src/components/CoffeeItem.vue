<script setup>
import { ref } from 'vue';
import RatingLabel from '@/components/RatingLabel.vue';
const rating = ref(5)

</script>

<template>
  <div class="product-item">
    <RatingLabel :rating="rating" />
    <div class="product-item__img-wrapper"><img src="" alt=""></div>

    
  </div>
</template>



<style scoped>

</style>