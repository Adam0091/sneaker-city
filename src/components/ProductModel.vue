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
          <UiSliderImage :images="fakeArrayImages" />
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
          <UiCounter />
          <UiButton text="Add to card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiButton from '@/components/UI/UiButton.vue'
import { ProductType } from '@/types'
import { defineProps, ref, toRefs } from 'vue'
import UiCounter from '@/components/UI/UiCounter.vue'
import UiSliderImage from '@/components/UI/UiSliderImage.vue'

type TProps = {
  product: ProductType,
}

const props = defineProps<TProps>()
const { product } = toRefs(props)
const isHiddenDescription = ref(false)

const fakeArrayImages = ref(Array(4).fill(product.value.image))

const handleArrow = () => {
  isHiddenDescription.value = !isHiddenDescription.value
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
    max-width: 90%;
    min-height: 300px;
    max-height: 90%;
    width: 100%;
    height: 100%;

    background: white;

    display: flex;
    justify-content: center;
  }

  &__product {
    padding: 30px 65px 30px 64px;
    flex: 66% 0 1;

    background: rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    row-gap: 40px;
  }

  &__description {
    flex: 34% 0 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 32px 64px;
  }

  &__add-to-card {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    row-gap: 20px;
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
    max-width: 47vw;
    height: 100%;
    overflow: hidden;
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
</style>
