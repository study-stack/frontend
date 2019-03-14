<template>
  <router-link
    :to="link || '#'"
    :class="{ 'button button__icon': true, button__invers: inverse }"
  >
    <span class="text">{{ title }}</span>
    <div class="icon">
      <div class="icon__container">
        <div class="icon__left"></div>
        <div class="icon__rigth"></div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    link: String,
    title: String,
    inverse: Boolean
  }
};
</script>
