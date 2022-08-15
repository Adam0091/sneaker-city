export type ProductType = {
  id: string
  title: string
  image: string
  price: number
  description: string
  rating: {
    rate: number
    count: number
  }
}

export type FilterOptionsType = {
  price: {
    min: number,
    max: number
  },
  rating: number
}
