<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <div class="header__wrapper-img">
          <img src="@/assets/images/headerLogo.png" alt="logo">
        </div>
        <h1 class="header__title">SC.</h1>
      </div>

      <nav class="header__nav">
        <ul class="nav__list">
          <li class="nav__item" v-for="category in categories" :key="category"
          @click.prevent="$emit('changeCategory', category)">
            {{ category }}
          </li>
        </ul>

        <ul class="nav__logos">
          <li class="nav__logo">
            <img src="@/assets/images/shoppingCartLogo.svg" alt="basket">
          </li>
          <li class="nav__logo">
            <img src="@/assets/images/favoriteLogo.svg" alt="favorite">
          </li>
          <li class="nav__logo">
            <img src="@/assets/images/userLogo.svg" alt="profile">
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const categories = ref<string[]>(['all'])

onMounted(async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
  res.forEach((item: string) => {
    categories.value.push(item)
  })
})
</script>

<style lang="scss" scoped>
.header {
  &__container {
    display: flex;
    padding: 26px 64px 16px 64px;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }

  &__logo {
    display: flex;
    align-items: center;
    column-gap: 8px;

    cursor: pointer;
  }

  &__wrapper-img {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;

    color: #000000;
  }

  &__nav {
    width: 100%;
    display: flex;
    align-items: center;
  }
}

.nav {

  &__list {
    list-style: none;
    display: flex;
    align-items: center;
    column-gap: 32px;

    margin: 0 auto;
  }

  &__item {
    text-transform: capitalize;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    color: #000000;

    cursor: pointer;
  }

  &__item--active {
    border-bottom: 2px solid #000000;
  }

  &__logos {
    list-style: none;
    display: flex;
    align-items: center;
    column-gap: 33px;
  }

  &__logo {
    cursor: pointer;
  }
}
</style>
