<template>
  <div class="profile-page page page__full">
    <aside class="profile-sidebar">
      is sidebar
    </aside>
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

export default {
  components: {
    ProfileHeader
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

.profile-sidebar {
  width: var(--sidebar-width);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: var(--primary-second);
  height: 100%;
}
</style>
