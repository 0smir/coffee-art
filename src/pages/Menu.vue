<script setup>
import { ref } from 'vue';
import CoffeeItem from '@/components/CoffeeItem.vue';
import {MENU} from '@/appData.js';

const menu = ref(MENU);
</script>

<template>
  <div class="page page--menu">
    <h1>Menu page</h1>
    <div class="container">
      <ul class="products-list">
        <li class="products-list__item" v-for="product in menu">
          <CoffeeItem :key="product.id" :product="product" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.products-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;
  &__item {
    display: flex;
  }
}
</style>