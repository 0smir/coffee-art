<script setup>

import SvgIcon from '@/components/base-components/SvgIcon.vue';

const props = defineProps({
  rating: {
    type: Number,
    required: true
  },
  floated: {
    type: Boolean,
    default: false,
    required: false
  },
  theme: {
    type: String,
    default: 'dark',
    required: false
  }
})

</script>

<template>
  <div :class="['rating__label', {'floated': floated},  theme !== 'dark' ? 'light' : 'dark']">
    <SvgIcon  v-if="!rating" class="icon icon--medium icon--oulined" name="star-outlined" /> 
    <SvgIcon  v-else class="icon icon--medium icon--filled" name="star" /> 
    {{ rating }} 
  </div>
</template>



<style lang="scss">
.rating__label {
  display: flex;
  align-items: center;
  padding: 5px 3px;
 
  &.floated {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px 5px 5px 10px;
    font-size: 14px;
    font-weight: 300;
  }

  &.dark {
    color: $white;
    border-bottom-left-radius: $radius_large;
    background-color: rgba($black, .2);
  }

  &.light {
    background-color: transparent;
  }

  .icon {
    margin-right: 5px;
    color: $gold;
  }
  .icon--oulined {
    color: $gold;
  }
}
</style>