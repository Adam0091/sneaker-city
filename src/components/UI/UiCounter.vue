<template>
  <div class="couter">
    <button class="couter__button" @click="changeCounter(-1)">-</button>
    <div class="couter__input-wrapper">
      <input class="couter__input" type="number" v-model.number="count" @input="inputChange">
    </div>
    <button class="couter__button" @click="changeCounter(1)">+</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(1)

const changeCounter = (value: number) => {
  if (count.value + value > 0 && count.value + value < 1000) {
    count.value = count.value + value
  }
}

const inputChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = Number(target.value)
  if (value > 0 && value < 1000) {
    count.value = value
  } else if (value <= 0) {
    count.value = 1
  } else if (value >= 1000) {
    count.value = 999
  }
}

</script>

<style lang="scss" scoped>
.couter {
  display: flex;
  align-items: center;
  column-gap: 5px;

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
