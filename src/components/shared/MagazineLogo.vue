<template>
  <div
    :class="{
      logo: true,
      reverse: black
    }"
  >
    <h1 class="logo__main">
      <span class="pre">std:</span>
      <div class="post"><i>:</i>magazine</div>
    </h1>
  </div>
</template>
<script>
export default {
  props: {
    black: Boolean
  }
};
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
      color: #eb2a36;

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
