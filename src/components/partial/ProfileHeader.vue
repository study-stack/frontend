<template>
  <header :class="{ 'c-profile-header': true }">
    <div class="c-profile-header__container">
      <div class="c-profile-header__left">
        <div class="c-profile-header__back" v-if="headerBack">
          <router-link :to="headerBack.link">
            <font-awesome-icon :icon="['fa', 'arrow-left']" />
          </router-link>
        </div>
      </div>
      <div class="c-profile-header__right">
        <aside :class="{ profile: true, open: isOpen }">
          <div class="profile-head" @click="dropdown">
            <div class="profile__avatar">
              <!-- <img src="@/assets/img/icons/user.svg" class="placeholder" alt=""> -->
              <span class="username">F</span>
            </div>
            <div class="profile__icon">
              <font-awesome-icon :icon="['fa', 'angle-down']" />
            </div>
          </div>
          <div class="profile-dropdown">
            <div class="profile-dropdown__content">
              <ul class="profile-dropdown__list">
                <li
                  class="profile-dropdown__item"
                  v-for="link in nav"
                  :key="link.name"
                  @click="dropdown"
                >
                  <router-link class="profile-dropdown__link" :to="link.link">{{
                    link.name
                  }}</router-link>
                </li>
              </ul>
            </div>
            <div class="profile-dropdow__bottom">
              <ul class="profile-dropdown__list">
                <li class="profile-dropdown__item">
                  <button class="profile-dropdown__link" @click="exit">
                    Выйти
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </header>
</template>
<script>
import { AUTH_LOGOUT } from "@/store/actions/auth.js";

export default {
  data() {
    return {
      isOpen: false,
      nav: [{ link: "/profile", name: "Профиль" }]
    };
  },
  computed: {
    headerBack() {
      return this.$store.getters.getHeaderBack;
    }
  },
  methods: {
    dropdown() {
      this.isOpen = !this.isOpen;
    },
    exit() {
      this.$store.dispatch(AUTH_LOGOUT);
    }
  }
};
</script>
<style lang="scss" scoped>
.c-profile-header {
  padding: 0;
  background-color: var(--primary-second);
  padding: 15px 30px;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__back a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    color: var(--second-color);
    opacity: 1;
  }
}

.profile-dropdown {
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  min-width: 140px;
  background-color: var(--second-color);
  color: var(--primary-color);
  padding: 10px 0;
  border-radius: 4px;
  z-index: -1;
  transform: translate3d(0, -25px, 0);
  transition: all 0.15s ease-in-out;

  &__link {
    cursor: pointer;
    color: var(--primary-color);
    font-size: 16px;
    padding: 10px 30px;
    padding-left: 30px;
    text-decoration: none;
    display: block;
    width: 100%;
    text-align: left;
    transition: all 0.15s ease-in-out;

    &:hover {
      color: var(--primary-color);
      text-decoration: none;
      background-color: rgba(0, 0, 0, 0.15);
    }
  }

  &__bottom {
    border-top: 1px solid var(--primary-second);
  }
}

.profile {
  position: relative;

  &.open {
    .profile__icon {
      transform: scaleY(-1);
    }

    .profile-dropdown {
      z-index: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  &-head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    z-index: 2;
    position: relative;
  }

  &__icon {
    cursor: pointer;
    transform: scaleY(1);
    transition: all 0.15s ease-in;
  }

  &__avatar {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fa9496;
    font-weight: bold;
    font-size: 20px;
    margin: 0 10px;
    cursor: pointer;
    line-height: 1;

    .username {
      display: block;
      line-height: 1;
      margin: 2px 0 0;
    }

    img {
      max-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;

      &.placeholder {
        padding: 5px;
      }
    }
  }
}
</style>
