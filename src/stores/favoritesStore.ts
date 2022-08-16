import { ProductType } from '@/types'
import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    favoritesProduct: [] as ProductType[]
  }),
  actions: {
    addFavoriteProduct (product: ProductType) {
      this.favoritesProduct.push(product)
      console.log(this.favoritesProduct)
    },
    removeFavoriteProduct (product: ProductType) {
      this.favoritesProduct = this.favoritesProduct.filter(
        (item: ProductType) => item.id !== product.id
      )
      console.log(this.favoritesProduct)
    }
  }
})
