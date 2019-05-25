<template>
  <section class="articles">
    <v-container>
      <my-article :item="items[0]" />
    </v-container>
  </section>
</template>
<script>
import MyArticle from "./common/Article";
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "",
          category: "Лица создавшие Лейбл",
          description:
            "Фредерико расскажет, как создавалась дизайн система у самой крупной поисковой компании мира. Какие проблемы и ньюансы решались в процессе проектирования системы"
        }
      ]
    };
  },
  components: {
    MyArticle
  }
};
</script>
<style lang="scss" scoped>
.articles {
}
</style>
