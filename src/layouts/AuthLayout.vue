<template>
  <div class="auth-page page page__full">
    <my-header />
    <slot></slot>
    <my-footer />
  </div>
</template>
<script>
import MyHeader from "@/components/partial/Header";
import MyFooter from "@/components/partial/Footer";

export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>
<style lang="scss">
.auth-page {
  background-color: var(--primary-color);
  color: var(--second-color);
}
</style>
