<template>
  <div class="page">
    <header class="page-head">
      <div class="page-head__left">
        <slot name="head-left"></slot>
      </div>
      <div class="page-head__right">
        <slot name="head-right"></slot>
      </div>
    </header>
    <section>
      <div class="page-content">
        <slot name="content"></slot>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
.page {
  &-head {
    min-height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 30px;
    background-color: rgba(255, 255, 255, 0.3);
  }

  &-content {
    padding: 30px;
  }
}
</style>
