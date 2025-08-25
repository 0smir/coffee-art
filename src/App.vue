<script setup>


import Header from '@/components/layouts/TheHeader.vue';
import Footer from '@/components/layouts/TheFooter.vue';



</script>

<template>
 <Header />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>

<style lang="scss">

</style>
