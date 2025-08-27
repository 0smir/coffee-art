<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue';
import ProductItemDetails from '@/components/ProductItemDetails.vue'
import {MENU} from '@/appData.js'

const route = useRoute();
const menu = ref(MENU);
const id = route.params.id;

const product = computed(() => {
  return menu.value.find(item => item.id == id) ?? null;
});

</script>

<template>
  <div class="page page--product-details">
    <div class="container">
      <ProductItemDetails v-if="product" :product="product"/>
      <p v-else>Product not found.</p>
    </div>
  </div>
</template>

<style lang="scss">
.page--product-details{
  padding-top: 20px;

  @media(min-width: $sm){
    padding-top: 40px;
  }
}

</style>