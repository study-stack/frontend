<template>
  <aside class="footer-nav">
    <ul class="footer-nav__list">
      <li
        :class="{
          'footer-nav__item': true,
          title: item.isTitle
        }"
        v-if="!item.link"
      >
        <span class="footer-nav__link">{{ item.title }}</span>
      </li>
      <template v-for="(el, index) in item.links">
        <li
          :class="{
            'footer-nav__item': true,
            title: el.isTitle,
            hiddest: el.hide
          }"
          :key="index"
        >
          <router-link :to="el.link" class="footer-nav__link">{{
            el.title
          }}</router-link>
        </li>
      </template>
    </ul>
  </aside>
</template>
<script>
export default {
  props: {
    item: Object
  }
};
</script>
<style lang="scss" scoped>
.footer-nav {
  margin: 28px 0 0;

  &__item {
    &.title {
      .footer-nav__link {
        font-weight: bold;
      }
    }

    &.hiddest {
      opacity: 0;
      min-height: 18px;
    }
  }

  &__link {
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    color: #333333;
    display: block;
    margin: 5px 0;

    &.title {
      font-weight: bold;
    }
  }
}
</style>
