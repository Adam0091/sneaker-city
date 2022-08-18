<template>
  <button class="button" :style="{ width: width }" :disabled="disabled">{{ text }}</button>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

type TProps = {
  text: string,
  width: string,
  disabled: boolean,
}

const props = defineProps<TProps>()
const { text, width, disabled } = toRefs(props)
</script>

<style lang="scss" scoped>
.button {
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
  &:disabled{
  background: #ca4057;
  color: #c59595;
  }
}
</style>
