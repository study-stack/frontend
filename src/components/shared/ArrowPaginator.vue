<template>
  <div class="arrow-paginator">
    <font-awesome-icon :icon="['fa', 'arrow-left']" @click="changePage('prev')"/>
    <span class="pages">
      {{currentPage}}/{{pages}}
    </span>
    <font-awesome-icon :icon="['fa', 'arrow-right']" @click="changePage('next')"/>
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
          this.$emit('changePage', page);
        }
      }

      if (type === 'next') {
        if (this.currentPage < this.pages) {
          const page = this.currentPage + 1;
          this.$emit('changePage', page);
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.arrow-paginator {
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    cursor: pointer;
  }

  .pages {
    font-weight: bold;
    letter-spacing: 3px;
    width: 90px;
    display: block;
    text-align: center;
    font-size: 24px;
    line-height: 1;
  }
}
</style>
