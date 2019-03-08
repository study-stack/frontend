<template>
  <header class="c-header">
    <v-container>
      <div class="c-header__container">
        <div class="c-header__logo"></div>
        <home-nav />
      </div>
    </v-container>
  </header>
</template>
<script>
import HomeNav from "@/components/shared/HomeNav";
export default {
  components: {
    HomeNav
  }
};
</script>
