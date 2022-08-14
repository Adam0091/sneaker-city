<template>
  <div class="price-filter">
    <div class="price-filter__input-wrapper">
      <div class="slider">
        <div ref="progress" class="progress"></div>
      </div>
      <div class="range-input">
        <input class="range-max" type="range" min="0" max="5" step="0.1" v-model.number="range2" @input="updateRange" />
      </div>
    </div>

    <div class="price-filter__prices">
      <span class="prices__value">{{ 0 }}</span>
      <span class="prices__value">{{ range2 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const progress = ref<any>(null)
const emit = defineEmits(['inputRange'])

const range2 = ref(5)

const updateRange = (event: any) => {
  emit('inputRange', 'rating', range2)
  progress.value.style.right = (100 - range2.value / 5 * 100) + '%'
}
</script>

<style lang="scss" scoped>
.slider {
  position: relative;

  height: 2px;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

.slider .progress {
  position: absolute;
  left: 0%;
  right: 0%;
  height: 2px;
  background-color: #000000;
  border-radius: 5px;
}

.range-input {
  position: relative;
}

.range-input input {
  position: absolute;
  top: -4px;
  height: 5px;
  width: 100%;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  height: 12px;
  width: 12px;
  -webkit-appearance: none;
  pointer-events: auto;
  border-radius: 50%;
  background: #000000;
}

input[type="range"]::-moz-range-thumb {
  height: 12px;
  width: 12px;
  border: none;
  border-radius: 50%;
  -moz-appearance: none;
  pointer-events: auto;
  border-radius: 50%;
  background: #000000;
}

.price-filter {
  margin-top: 23px;

  &__prices {
    margin-top: 17px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.prices {

  &__value {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #000000;
  }
}
</style>
