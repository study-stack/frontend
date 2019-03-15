<template>
  <div class="profile-page page page__full">
    <profile-sidebar />
    <section
      :class="{ 'profile-page__container': true, 'full-width': sidebarIsSmall }"
    >
      <profile-header />
      <main :class="{ 'profile-page__content': true }">
        <slot></slot>
      </main>
    </section>
  </div>
</template>
<script>
import ProfileHeader from "@/components/partial/ProfileHeader";
import ProfileSidebar from "@/components/shared/ProfileSidebar";

export default {
  components: {
    ProfileHeader,
    ProfileSidebar
  },
  computed: {
    sidebarIsSmall() {
      return this.$store.getters.getSidebarIsSmall;
    }
  },
  created() {
    this.$store.dispatch("UPDATE_SIDEBAR", "large");
  }
};
</script>
<style lang="scss">
.profile-page {
  background-color: var(--primary-color);
  color: var(--second-color);

  &__container {
    margin-left: var(--sidebar-width);
    transition: all 0.15s ease-in-out;

    &.full-width {
      margin-left: calc(var(--sidebar-width) - 200px);
    }
  }

  &__content {
    padding: 60px 30px;
  }
}
</style>
