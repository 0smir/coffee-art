<script setup>
import { ref } from 'vue';

import Header from '@/components/layouts/TheHeader.vue';
import Footer from '@/components/layouts/TheFooter.vue';

import CoffeeItem from '@/components/CoffeeItem.vue';



const menu = ref([
  {
    id: '001',
    title: 'Espresso ',
    description: 'Rich and bold shot of pure coffee',
    img: ['', ''],
    type: '',
    price: '3.25',
    size: ['S', 'M', 'L'],
    components: ['coffe'],
    rating: 4.7
  },
  {
    id: '002',
    title: 'Americano',
    description: 'Espresso topped with hot water',
    img: ['', ''],
    type: '',
    price: '3.53',
    size: ['S', 'M', 'L'],
    components: ['coffe', 'water'],
    rating: 5
  },
  {
    id: '003',
    title: 'Cappuccino',
    description: 'Espresso with steamed milk and thick milk foam',
    img: ['', ''],
    type: '',
    price: '4.50',
    size: ['S', 'M', 'L'],
    components: ['coffe', 'milk'],
    rating: 4.9
  },
  {
    id: '004',
    title: 'Latte',
    description: 'Espresso with steamed milk, light foam on top',
    img: ['', ''],
    type: '',
    price: '4.53',
    size: ['S', 'M', 'L'],
    components: ['coffe', 'water', 'milk'],
    rating: 4.5
  },
  // {
  //   id: '',
  //   title: '',
  //   description: '',
  //   img: ['', ''],
  //   type: '',
  //   price: '',
  //   size: ['S', 'M', 'L'],
  //   components: ['coffe', 'water']
  // }
])

</script>

<template>
 <Header />
  <main>
    <ul class="product-list">
      <li class="product-list__item" v-for="product in menu">
        <CoffeeItem :key="product.id" :product="product" />
      </li>
    </ul>
    
  </main>
  <Footer />
</template>
