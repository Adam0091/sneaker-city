<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import AppHeader from '@/components/AppHeader.vue'
import AsideBar from '@/components/AsideBar.vue'
import AppFooter from '@/components/AppFooter.vue'
import ProductsList from '@/components/ProductsList.vue'

import { GET_PRODUCTS, GET_PRODUCTS_BY_CATEGORY } from '@/utils/network'

import { ProductType } from '@/types/index'

const products = ref<ProductType[]>([])
const filterProducts = ref<ProductType[]>([])
const contegory = ref('')
const loading = ref(true)

onMounted(async () => {
  products.value = await GET_PRODUCTS()
  filterProducts.value = [...products.value]
  loading.value = false
})

watch(contegory, async () => {
  loading.value = true
  products.value = await GET_PRODUCTS_BY_CATEGORY(contegory.value)
  filterProducts.value = [...products.value]
  loading.value = false
})

const filter = (filterOptions: any) => {
  filterProducts.value = products.value.filter(product =>
    product.price >= filterOptions.value.price.min &&
    product.price <= filterOptions.value.price.max &&
    product.rating.rate >= filterOptions.value.rating
  )
}
</script>

<template>
  <AppHeader @change-category="contegory = $event" />
  <div class="content">
    <AsideBar @change-filter="filter" />
    <div class="wrapper">
      <main class="main">
        <ProductsList :products="filterProducts" :loading="loading" />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
}

.main {
  padding: 32px 0 92px 0;
  min-height: 800px;
}

.wrapper {
  margin: 0 64px;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
