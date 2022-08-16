<template>
  <button class="button">{{ text }}</button>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

type TProps = {
  text: string,
}

const props = defineProps<TProps>()
const { text } = toRefs(props)
</script>

<style lang="scss" scoped>
.button {
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
</style>
