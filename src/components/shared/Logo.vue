<template>
  <div class="logo">
    <router-link to="/">
      <h1 class="logo__main">
        <span class="pre">std:</span>
        <div class="post"><i>:</i>stack</div>
      </h1>
    </router-link>
    <span class="logo__text">learn today grow tomorrow</span>
  </div>
</template>
<style lang="scss">
.logo {
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
