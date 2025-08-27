<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
  <div class="page page--home"> 
    <div class="container home__container">
      <div class="content">
        <h1 class="title">
          Fall in love with Coffee in Blissful Delight!
        </h1>
        <p class="text">Welcome to our cozy coffee corner, where every cup is a delightful for you.</p>
        <router-link class="btn-link btn-link__primary btn-link--medium menu-link" to="/menu">Get Started</router-link>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.page--home {
  position: relative;
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: $primary_dark;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7) 50%, transparent 100%), url('@/assets/images/bg/bg-mobile.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: $sm){
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7) 100%), 
                      url('@/assets/images/bg/bg-desktop.jpg');
  }

  .title {
    margin-top: 0;
    font-size: 32px;
    color: $white;
    @media (min-width: $sm){
      font-size: 36px;
    }
    @media (min-width: $md){
      font-size: 42px;
    }
  }
  .text {
    font-size: 18px;
    margin-bottom: 40px;
    font-weight: 100;
    color: rgba($white, .7);
  }
}
.home__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  @media (min-width: $sm){
    max-width: 70%;
  }
  @media (min-width: $md){
    max-width: 50%;
  }
}
</style>