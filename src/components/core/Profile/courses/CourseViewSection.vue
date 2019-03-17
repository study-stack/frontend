<template>
  <section class="course-view">
    <div class="course-view__content">
      <div class="top">
        <template v-if="content">
          <div class="course-view__container">
            <div class="number">
              {{content.id}}.
            </div>
            <div class="content">
              <h2 class="title">{{content.title}}</h2>
              <p class="description">{{content.shortDescription}}</p>
            </div>
          </div>
        </template>
      </div>
      <div class="course-view__controllers">
        <arrow-paginator :currentPage="page" :pages="course.steps.length" @changePage="changePage"/>
      </div>
    </div>
    <aside class="course-view__right">
      <h3 class="course-view__hello">
        Hello, Vladislav
      </h3>
      <ul class="list">
        <li :class="{'list__item': true, 'active': content.id === item.id}" v-for="item in course.steps" :key="item.id">{{item.id}}. {{item.title}}</li>
      </ul>
    </aside>
  </section>
</template>
<script>
import ArrowPaginator from "@/components/shared/ArrowPaginator";
export default {
  props: {
    course: Object,
    content: Object,
    page: Number
  },
  components: {
    ArrowPaginator
  },
  methods: {
    changePage(data) {
      this.$emit('updatePage', data);
    }
  }
}
</script>
<style lang="scss">
.course-view {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: calc(100vh - 80px);

  &__container {
    display: flex;
    justify-content: flex-start;

    .right {
      width: 100%;
    }
  }

  .number {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.3;
    margin-right: 12px;
    color: var(--light-color);
    margin-top: 4px;
  }

  &__hello {
    font-size: 24px;
  }

  &__content {
    width: 100%;
    background-color: var(--second-color);
    color: var(--primary-color);
    height: 100%;
    padding: 60px 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      font-size: 32px !important;
      line-height: 1.3;
    }
  }

  &__controllers {
    padding: 15px 30px;
    border-top: 1px solid var(--light-color);
    margin: 0 -30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &__right {
    padding: 60px 15px;
    min-width: var(--sidebar-width);
    max-width: var(--sidebar-width);
  }

  .list {
    margin: 30px 0;

    &__item {
      font-size: 18px;
      font-weight: 400;
      margin: 15px 0;
      margin-left: 14px;
      position: relative;
      line-height: 1.2;

      &::before {
        content: "";
        position: absolute;
        left: -12px;
        top: 6px;
        background-color: var(--second-color);
        border-radius: 50%;
        width: 6px;
        height: 6px;
      }

      &.active {
        &::before {
          background-color: var(--third-color);
        }
      }
    }
  }
}
</style>
