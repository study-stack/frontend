<template>
  <div class="page-changer">
    <button class="simple-button success" @click="changePage('prev')" :disabled="this.currentPage <= 1">Назад</button>
    <button class="simple-button success" @click="changePage('next')" :disabled="this.currentPage >= this.pages">Следующий</button>
  </div>
</template>
<script>
export default {
  props: {
    pages: Number,
    list: Array,
    currentPage: Number
  },
  methods: {
    changePage(type) {
      if (type === 'prev') {
        if (this.currentPage > 1) {
          const page = this.currentPage - 1;
          this.$emit('changePage', {type: 'prev', page: page});
        }
      }

      if (type === 'next') {
        if (this.currentPage < this.pages) {
          const page = this.currentPage + 1;
          this.$emit('changePage', {type: 'next', page: page});
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.page-changer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
