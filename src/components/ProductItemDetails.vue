<script setup>
import { ref } from 'vue';

import RatingLabel from '@/components/RatingLabel.vue'
import NoImg from '@/components/base-components/NoImg.vue';
const props = defineProps({
  product: {
    type: Object,
    require: true
  }
});


const size_variants = ref(props.product.size);
const size_selected = ref([]);

console.log(size_selected.value);
</script>

<template>
  <div class="product">
    <div class="product-item__img-wrapper">
      <img v-if="product?.img.length > 0" 
              class="product__img" 
              :src="product.img[0]" 
              :alt="product.title" 
            />
      <NoImg v-else />
    </div>
    <div class="product__details">
      <h1 class="title">{{ product.title }}</h1>
      <div class="description">
        <span class="description__label">Description:</span>
        <p class="text description__text">{{ product.description }}</p>
      </div>
      <RatingLabel :rating="product.rating" :floated="false"/>
      <div class="product__size">
        <form >
        <label v-for="variant in size_variants" 
              :key="variant.id"
              :for="variant.id" 
              class="product__size-label btn btn__secondary">
          <input type="radio" name="size" :id="variant.id" :value="variant.size" v-model="size_selected">
          <span>{{ variant.size }}</span>
        </label>
      </form>
      </div>
      <p class="text">Selected size ID: {{ size_selected }}</p>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.product {
  display: flex;
  gap: 20px;

  &__img-wrapper {
    overflow: hidden;
    max-width: 300px;
    max-height: 210px;
    aspect-ratio: 300/210;
    border: 1px solid red;
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
    flex-direction: column;
  }
  .title {
    margin-top: 0;
  }
  &__size {
    display: flex;
    gap: 15px;
  }
  &__size-label {
    display: flex;
    flex-basis: 120px;
    &:has(:checked){
      @extend .active
    }
  }
}

.description {
  &__label {
    display: inline-block;
    margin-bottom: 10px;
  }
  &__text {
    color: $gray;
  }
}

</style>