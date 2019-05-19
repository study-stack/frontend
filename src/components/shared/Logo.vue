<template>
  <div :class="{
    'logo': true,
    'reverse': black
  }">
    <router-link to="/">
      <h1 class="logo__main">
        <span class="pre">std:</span>
        <div class="post"><i>:</i>stack</div>
      </h1>
    </router-link>
    <span class="logo__text">learn today grow tomorrow</span>
  </div>
</template>
<script>
export default {
  props: {
    black: Boolean
  }
}
</script>
<style lang="scss">
.logo {

  &.reverse {
    .logo__main {
      color: #262626;
    }

    .logo__text {
      color: #333;
    }
  }

  &__main {
    font-size: 24px;
    color: var(--second-color);
    white-space: nowrap;
    display: flex;
    justify-content: flex-start;

    .post {
      font-weight: 400;
      color: var(--third-color);

      i {
        font-weight: 600;
        font-style: normal;
      }
    }
  }

  &__text {
    font-size: 9px;
    white-space: nowrap;
  }
}
</style>
