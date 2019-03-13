<template>
  <div class="page-section">
    <header class="page-section__head">
      <div class="left">
        <slot name="head-left"></slot>
      </div>
      <div class="right">
        <slot name="head-right"></slot>
      </div>
    </header>
    <div class="page-section__body">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page-section {
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
