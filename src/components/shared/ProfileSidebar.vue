<template>
  <aside class="profile-sidebar">
    <div class="profile-sidebar__head">
      <Logo />
    </div>
    <div class="profile-sidebar__body">
      <div class="profile-sidebar__section">
        <h4 class="profile-sidebar__title">Меню</h4>
        <nav class="profile-sidebar-nav">
          <ul class="profile-sidebar-nav__list">
            <li class="profile-sidebar-nav__item">
              <router-link
                class="profile-sidebar-nav__link"
                to="/profile/courses"
              >
                <span class="icon">
                  <font-awesome-icon :icon="['fa', 'book']" />
                </span>
                <span class="text">Мои Курсы</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
</template>
<script>
import Logo from "@/components/shared/Logo";

export default {
  components: {
    Logo
  }
};
</script>
<style lang="scss" scoped>
.profile-sidebar {
  width: var(--sidebar-width);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: var(--primary-second);
  height: 100%;

  &__head {
    height: 80px;
    border-bottom: 1px solid #34414c;
    border-right: 1px solid #34414c;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30px;
  }

  &__section {
    margin: 40px 0 0;
  }

  &__title {
    font-size: 22px;
    font-weight: 300;
    margin: 0 10px 20px 30px;
  }
}

.profile-sidebar-nav {
  &__list {
    display: block;
    width: 100%;
  }

  &__link {
    color: var(--second-color);
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 10px 10px 10px 30px;
    transition: all 0.15s ease-in-out;
    position: relative;

    span {
      display: block;
    }

    &.router-link-active {
      color: var(--footer);
      background-color: #394752;

      .text {
        color: var(--second-color);
      }

      &::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 4px;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: var(--footer);
      }
    }

    .icon {
      margin-right: 15px;
      width: 20px;
      color: #7f878e;
    }

    .text {
      color: #fff;
    }

    &:hover {
      background-color: #394752;
    }
  }
}
</style>
