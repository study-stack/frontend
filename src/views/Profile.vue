<template>
  <profile-layout>
    <router-view />
  </profile-layout>
</template>
<script>
import ProfileLayout from "@/layouts/ProfileLayout";

export default {
  components: {
    ProfileLayout
  },
  created() {
    this.$store.dispatch("UPDATE_HEADER_BACK", null);
    this.$store.dispatch("UPDATE_SIDEBAR", "large");
  }
};
</script>
