<script setup>
import SvgIcon from '@/components/base-components/SvgIcon.vue';
</script>

<template>
  <div class="dummy_img">
    <SvgIcon class="icon" name="photo"/>

  </div>
</template>



<style lang="scss">
.dummy_img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  color: $gray;
  &>.icon {
    width: 50px;
    height: 50px;
  }
}
</style>