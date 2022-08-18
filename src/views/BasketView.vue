<template>
  <AppHeader />

  <main class="main">
    <ProductBasket />
    <AppFooter />
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

import ProductBasket from "@/components/ProductBasket.vue"
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"

import { useBasketStore } from "@/stores/basketStore"
import { ProductType } from "@/types"

const products = ref<ProductType[]>([])

onMounted(() => {
  const store = useBasketStore()
  products.value = store.basket
})
</script>

<style scoped>
.main {
  margin: 0 64px;
}
</style>
