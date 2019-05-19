<template>
<button :class="{
  'form-button': true
  }" @click="$emit('click')" :disabled="disabled">{{title}}</button>
</template>
<script>
export default {
  props: {
    title: String,
    disabled: Boolean
  }
}
</script>
<style lang="scss" scoped>
.form-button {
  // font-family: PT Sans Caption;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  background: var(--third-color);
  border-radius: 4px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 15px 0;
  width: 100%;
  height: 100%;
}
</style>
