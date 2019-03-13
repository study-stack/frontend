<template>
  <header class="c-profile-header">
    <div class="c-profile-header__container">
      <div class="c-profile-header__left"></div>
      <div class="c-profile-header__right">
        <aside class="profile">
          <div class="profile-head">
            <div class="profile__avatar">
              <!-- <img src="@/assets/img/icons/user.svg" class="placeholder" alt=""> -->
              <span class="username">F</span>
            </div>
            <font-awesome-icon :icon="['fa', 'angle-down']" />
          </div>
        </aside>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  components: {}
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
}

.profile {
  &-head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
