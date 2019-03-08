<template>
  <div class="home-landing page page__full">
    <div class="page__content">
      <my-header />
      <slot></slot>
    </div>
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
