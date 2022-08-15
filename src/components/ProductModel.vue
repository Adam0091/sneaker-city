<template>
  <div class="product-model" @click.stop="$emit('clickModel')">
    <div class="product-model__container" @click.stop>
      <div class="product-model__product">
        <div class="product__header">
          <div class="product__description">
            <div class="product__name">
              <h5>{{ product.title }}</h5>
            </div>
            <div class="product__price">
              <span>{{ product.price }}RWF</span>
            </div>
          </div>

          <div class="product__add-favorite">
            <img src="@/assets/images/favorite.png" alt="add to favorite">
          </div>
        </div>

        <div class="product__slider-images">
          <img :src="product.image" :alt="product.title">
        </div>
      </div>

      <div class="product-model__description">
        <div class="description__header">
          <div class="description__title-wrapper">
            <div class="description__title">
              <span>Description</span>
            </div>

            <div class="description__arrow" :class="{ 'description__arrow--active': isHiddenDescription }"
              @click="handleArrow">
              <img src="@/assets/images/arrowUp.png" alt="show or hidden description">
            </div>
          </div>

          <div class="description__container" :class="{ 'description__container--hidden': isHiddenDescription }">
            <p class="description__text">
              {{ product.description }}
            </p>
          </div>
        </div>

        <div class="product-model__add-to-card">
          <div class="add-to-card__couter">
            <button class="couter__button">-</button>
            <div class="couter__input-wrapper">
              <input class="couter__input" type="number" min="0" max="999" value="1">
            </div>
            <button class="couter__button">+</button>
          </div>

          <button class="add-to-card__button">Add to card</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductType } from '@/types'
import { defineProps, ref, toRefs } from 'vue'

type TProps = {
  product: ProductType,
}

const props = defineProps<TProps>()
const { product } = toRefs(props)
const isHiddenDescription = ref(false)

const handleArrow = () => {
  isHiddenDescription.value = !isHiddenDescription.value
  console.log("handleArrow")
}
</script>

<style lang="scss" scoped>
.product-model {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(196, 196, 196, 0.3);

  &__container {
    max-width: 1440px;
    min-height: 300px;
    width: 100%;

    background: white;

    display: flex;
  }

  &__product {
    padding: 96px 65px 96px 64px;
    flex: 66% 0 1;
    background: rgba(0, 0, 0, 0.04);
  }

  &__description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 32px 64px;
    flex: 34% 0 1;
  }

  &__add-to-card {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
}

.product {

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__description {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 420px;
  }

  &__name {
    font-weight: 700;
    font-size: 36px;

    color: #000000;
  }

  &__price {
    margin-top: 24px;

    font-weight: 400;
    font-size: 18px;
    line-height: 28px;

    color: rgba(0, 0, 0, 0.65);
  }

  &__add-favorite {
    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__slider-images {
    max-width: 300px;
    max-height: 600px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.description {
  &__header {
    padding-bottom: 32px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  &__title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #000000;
  }

  &__arrow {
    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: all 0.2s;
    user-select: none;

    &--active {
      transform: rotate(180deg)
    }
  }

  &__container {
    overflow: hidden;
    height: 100%;
    transition: all 0.2s;

    &--hidden {
      height: 0px;
    }
  }

  &__text {
    margin-top: 18px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: rgba(0, 0, 0, 0.65);

  }
}

.add-to-card {

  &__couter {
    display: flex;
    align-items: center;
    column-gap: 5px;
  }

  &__button {
    width: 135px;
    height: 44px;

    background: #D90429;
    border: none;
    outline: none;

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    color: #FFFFFF;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #c95c6e;
    }
  }
}

.couter {
  &__button {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    outline: none;
    border: none;
    border-radius: 8px;
    background: none;

    font-weight: 400;
    font-size: 22px;
    line-height: 24px;

    color: #000000;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: rgba(0, 0, 0, 0.04);
    }
  }

  &__input-wrapper {

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &__input {
    text-align: center;

    max-width: 48px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 8px;

    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #000000;
  }
}
</style>
