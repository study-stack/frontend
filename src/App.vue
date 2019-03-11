<template>
  <v-app dark>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      locale: "ru"
    };
  },
  // created() {
  //   if (this.$store.getters.isAuthenticated) {
  //     this.$store.dispatch(USER_REQUEST);
  //   }
  // },
  mounted() {
    var userLang =
      localStorage.getItem("stack.language") ||
      navigator.language ||
      navigator.userLanguage;
    this.locale = userLang.substring(0, 2);
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    }
  }
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
