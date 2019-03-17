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
        <span></span>
        <!-- <arrow-paginator :currentPage="page" :pages="course.steps.length" @changePage="changePage"/> -->
        <page-change-buttons :currentPage="page" :pages="course.steps.length" @changePage="changePage"/>
      </div>
      <div class="placeholder-content" :style="{'transform': `translate3d(-${40 * (page-1)}px, -${40 * (page-1)}px, 0)`}" ref="placeholderList">
        <div
          class="placeholder"
          v-for="(item, i) in placeholders"
          :key="item"
          :ref="`placeholder${i}`"
          v-show="page - 1 < i"
          :style="{
            'margin': `${40 * i}px`,
            'opacity': `${i === page ? '0.6' : i === page + 1? '0.4': 0.3 / i }`
          }"></div>
      </div>
    </div>
    <aside class="course-view__right">
      <h3 class="course-view__hello">
        Hello, Vladislav
      </h3>
      <div class="points">
        <div class="title good">{{page}} Good points</div>
        <div class="points-line">
          <div class="progress" :style="{'width': `${100/course.steps.length * page}%`}"></div>
        </div>
        <div class="title bad">{{course.steps.length - page}} Suggested improvements</div>
      </div>
      <ul class="list">
        <li :class="{
          'list__item': true,
          'active': content.id === item.id,
          'success': item.id < page,
        }" v-for="item in course.steps" :key="item.id">{{item.id}}. {{item.title}}</li>
      </ul>
    </aside>
  </section>
</template>
<script>
// import ArrowPaginator from "@/components/shared/ArrowPaginator";
import PageChangeButtons from "@/components/shared/PageChangeButtons";

export default {
  data() {
    return {
      placeholders: []
    }
  },
  props: {
    course: Object,
    content: Object,
    page: Number
  },
  components: {
    // ArrowPaginator,
    PageChangeButtons
  },
  created() {
     for (let i = 0; i < this.course.steps.length; i++) {
       this.placeholders.push(i);
     }
  },
  methods: {
    changePage(data) {
      this.$emit('updatePage', data);
    }
  }
}
</script>
<style lang="scss">
.points {
  margin: 15px 0;

  .points-line {
    width: 100%;
    height: 12px;
    background-color: var(--error-color);
    border-radius: 2px;
    margin: 8px 0;
    overflow: hidden;

    .progress {
      height: 100%;
      background-color: var(--success-color);
    }
  }

  .title {
    font-weight: 400;
    font-size: 18px !important;

    &.bad {
      color: var(--error-color);
    }

    &.good {
      color: var(--success-color);
    }
  }
}

.course-view {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: calc(100vh - 140px);
  position: relative;
  z-index: 1;

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

  .content {
    width: 100%;
    height: 100%;
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
    margin: 30px 60px 30px 20px;
    position: relative;
    z-index: 1;
    border-radius: 4px;

    .title {
      font-size: 42px !important;
      line-height: 1.3;
      color: var(--purr-color);
    }

    .top {
      height: 100%;
      overflow-y: auto;
    }
  }

  .placeholder-content {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all .15s ease-in-out;

    .placeholder {
      width: 100%;
      height: 100%;
      background-color: var(--second-color);
      opacity: .6;
      margin: 40px;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 4px;
    }
  }

  &__controllers {
    border-top: 1px solid var(--light-color);
    margin: 0 -30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 45px;
  }

  &__right {
    padding: 60px 30px;
    min-width: var(--course-list-width);
    max-width: var(--course-list-width);
    background-color: var(--primary-color);
    height: calc(100vh - 80px);
    z-index: 1;
    position: relative;
    overflow-y: auto;
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
        opacity: .4;
      }

      &.active {
        &::before {
          opacity: 1;
          background-color: var(--success-color);
        }
      }

      &.success {
        background-color: transparent;

        &::before {
          opacity: .6;
          background-color: var(--success-color);
        }
      }

      &.error {
        background-color: transparent;

        &::before {
          opacity: .6;
          background-color: var(--error-color);
        }
      }
    }
  }
}
</style>
