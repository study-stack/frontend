<template>
  <nav class="home-nav">
    <ul class="home-nav__list">
      <li class="home-nav__item" v-for="(item, i) in nav" :key="i">
        <router-link :to="item.link" class="home-nav__link">{{
          $t(item.name)
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      nav: [
        { link: "", name: "goods" },
        { link: "", name: "contacts" },
        { link: "", name: "prices" },
        { link: "", name: "reviews" },
        { link: "", name: "news" }
      ]
    };
  }
};
</script>
<style lang="scss">
.home-nav {
  &__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: -15px;
    margin-right: -15px;
  }

  &__item {
    margin: 0 15px;
  }

  &__link {
    font-size: 13px;
    letter-spacing: -0.4px;
    opacity: 0.8;
    color: var(--second-color);

    &:hover {
      opacity: 1;
    }
  }
}
</style>
