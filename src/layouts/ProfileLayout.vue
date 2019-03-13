<template>
  <div class="profile-page page page__full">
    <profile-sidebar />
    <section class="profile-page__container">
      <profile-header />
      <main class="profile-page__content">
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
  }
};
</script>
<style lang="scss">
.profile-page {
  background-color: var(--primary-color);
  color: var(--second-color);

  &__container {
    margin-left: var(--sidebar-width);
  }

  &__content {
    padding: 60px 30px;
  }
}
</style>
