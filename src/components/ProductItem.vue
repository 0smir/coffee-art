<script setup>
import RatingLabel from '@/components/RatingLabel.vue';
import BaseButton from '@/components/base-components/BaseButton.vue';
import NoImg from '@/components/base-components/NoImg.vue';
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute()

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const itemUrl = computed(() => {
  return route.fullPath + '/' + props.product.id; 
})

</script>

<template>
  <div class="product-item">
    <div class="product-item__img-wrapper">
      <img v-if="product?.img.length > 0" class="product-item__img" :src="product.img[0]" :alt="product.title" width="200" height="300">
      <NoImg v-else />
      <RatingLabel :rating="product.rating" :floated="true"/>
    </div>
      <h2 class="title">
        <router-link :to="itemUrl">{{ product.title }}</router-link>
      </h2>
      <span class="subtitle">{{ product.base }}</span>
    <div class="product-item__details">
      <span class="price">${{ product.price }}</span>
      <BaseButton class="btn btn--small btn__primary btn__add" aria-label="add to cart">+</BaseButton>
    </div>
  </div>
</template>



<style lang="scss">
.product-item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex-basis: 230px;
  background-color: $white;
  border-radius: $radius_medium;
  border: 1px solid transparent;

  &:hover,
  &:focus,
  &:active {
    box-shadow: $shadow;
    border-color: $gray_light;
  }

  &__img-wrapper {
    position: relative;
    width: 100%;
    height: auto;
    max-width: 210px;
    max-height: 300px;
    aspect-ratio: 210/300;
    border-radius: $radius_medium;
    overflow: hidden;
    border: 1px solid $gray_light;

    &:hover{
      .product-item__img {
        transform: scale(1.25);
        transition: all 1.5s ease;
      }
    }
  }
  
  &__img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform 1.5s ease;
  }

  &__details {
    display: flex;
    align-items: center;
    justify-content: space-between;
  } 
}
.price {
  margin-right: 5px;
  font-size: 24px;
  font-weight: 700;
}

.title {
  margin-bottom: 10px;
}

.subtitle {
color: $gray;
text-transform: capitalize;
font-weight: 300;
font-size: 14px;
}

.btn__add {
  font-size: 20px;
}

</style>