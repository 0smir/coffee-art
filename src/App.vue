<script setup>
import { ref } from 'vue';

import Header from '@/components/layouts/TheHeader.vue';
import Footer from '@/components/layouts/TheFooter.vue';

import CoffeeItem from '@/components/CoffeeItem.vue';
import {MENU} from '@/appData.js';



const menu = ref(MENU);

</script>

<template>
 <Header />
  <main>
    <div class="container">
      <ul class="products-list">
        <li class="products-list__item" v-for="product in menu">
          <CoffeeItem :key="product.id" :product="product" />
        </li>
      </ul>
    </div>
  </main>
  <Footer />
</template>

<style lang="scss">
.products-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
</style>
