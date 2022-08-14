export const GET_PRODUCTS = async () =>
  await fetch('https://fakestoreapi.com/products').then((res) => res.json())

export const GET_PRODUCTS_BY_CATEGORY = async (category: string) => {
  if (category === 'all') {
    return GET_PRODUCTS()
  } else {
    return await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    ).then((res) => res.json())
  }
}
