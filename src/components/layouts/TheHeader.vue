<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
  <header class="header">
    <div class="container">
      <ul class="header__navigation">
        <li class="header__navigation-item">
          <router-link class="header__nav-link" to="/" aria-label="link to Home page">Home</router-link>
        </li>
        <li class="header__navigation-item">
          <router-link class="header__nav-link" to="/menu" aria-label="link to Menu page">Menu</router-link>
        </li>
        <li class="header__navigation-item">
          <router-link class="header__nav-link" to="/delivery" aria-label="link to Delivery page">Delivery</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  padding-block: 15px;
  width: 100%;
  z-index: 100;
  border-bottom: 2px solid $primary_medium;
  background-color: $white;

  &__navigation {
    display: flex;
    justify-content: center;
  }

  &__navigation-item {
    margin-right: 10px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  &__nav-link {
    display: flex;
    padding: 8px 5px;
    font-weight: bold;
    color: $gray;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: border-bottom .35s linear;
    &:hover,
    &:focus {
      border-bottom-color: $gray;
      transition: border-bottom-color .35s linear;
    }
    &:focus-visible {
      outline: $primary auto 1px;
      background-color: $primary_light;
    }

    &.router-link-active {
      color: $primary;
      border-bottom: 2px solid $primary;
      transition: border-bottom-color .35s linear;
      &:hover,
      &:focus {
        color: $primary_light_dark;
        border-bottom-color: $primary_light_dark;
        transition: border-bottom-color .35s linear;
      }
      &:focus-visible {
        outline: $primary auto 1px;
        background-color: $primary_light;
      }
    }
  }
}

</style>