<template>
  <div
    :class="{
      'c-step': true,
      left: item.position === 'left',
      right: item.position === 'right'
    }"
  >
    <article class="c-step__article">
      <h4 class="s-title c-step__title">
        <span class="block">{{ item.title }}</span>
        <span class="title-layout__under-border"></span>
      </h4>
      <div class="c-step__content">
        <template v-for="(p, index) in item.description">
          <p
            class="c-step__p"
            v-bind:style="{ color: p.color ? p.color : '' }"
            :key="index"
          >
            <template v-if="!p.color">{{ p }}</template>
            <template v-if="p.color">{{ p.text }}</template>
          </p>
        </template>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  props: {
    item: Object
  }
};
</script>
<style lang="scss" scoped>
.c-step {
  width: 100%;
  display: flex;
  padding: 80px 0;

  &.left {
    text-align: left;
  }

  &.right {
    text-align: right;

    .c-step__content {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin: 15px 0;

      p {
        margin: 15px 0;
      }
    }

    .c-step__title {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }

  &__title {
    display: flex;
    flex-direction: column;
  }

  &.left {
    justify-content: flex-start;
  }

  &.right {
    justify-content: flex-end;
  }

  &__article {
    width: 50%;
  }

  &__content {
    p {
      max-width: 464px;
      display: block;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
      color: var(--four-color);
      margin: 30px 0;
    }
  }
}
</style>
