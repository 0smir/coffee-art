<script setup>
import { ref } from 'vue';

import Header from '@/components/layouts/TheHeader.vue';
import Footer from '@/components/layouts/TheFooter.vue';

const menu = ref([
  {
    id: '',
    title: '',
    description: '',
    type: '',
    price: '',
    size: ['S', 'M', 'L'],
    components: ['coffe', 'milk']
  }
])

</script>

<template>
 <Header />
  <main>
  </main>
  <Footer />
</template>
