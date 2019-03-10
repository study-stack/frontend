<template>
  <header class="c-header">
    <v-container>
      <div class="c-header__container">
        <div class="c-header__left">
          <div class="c-header__logo">
            <logo />
          </div>
          <home-nav class="c-header__nav" />
        </div>
        <div class="c-header__controlls">
          <router-link to="/login" class="link item">Войти</router-link>
          <router-link to="/signup" class="button button__invers item"
            >Регистрация</router-link
          >
        </div>
      </div>
    </v-container>
  </header>
</template>
<script>
import HomeNav from "@/components/shared/HomeNav";
import Logo from "@/components/shared/Logo";
export default {
  components: {
    HomeNav,
    Logo
  }
};
</script>
<style lang="scss">
.c-header {
  padding: 36px 0;

  &__container,
  &__left,
  &__controlls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__left {
    justify-content: flex-start;
  }

  &__nav {
    margin: 0 30px;
  }

  &__controlls {
    justify-content: flex-end;
    margin-left: -6px;
    margin-right: -6px;

    .item {
      margin: 0 6px;
    }
  }
}
</style>
