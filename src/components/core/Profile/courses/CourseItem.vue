<template>
  <article class="course">
    <div class="course__container">
      <router-link class="link" :to="`/profile/courses/${item.id}`">
        <div class="course__head"></div>
      </router-link>
      <div class="course__content">
        <h4 class="course__title">
          <router-link class="link" :to="`/profile/courses/${item.id}`">{{
            item.name
          }}</router-link>
        </h4>
        <p class="course__short">
          {{ item.description }}
        </p>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    item: Object
  }
};
</script>
<style lang="scss" scoped>
.course {
  width: 33%;
  padding: 0 15px;
  margin: 30px 0;
  min-width: 320px;

  &__container {
    background-color: var(--primary-second);
    border-radius: 8px;
    overflow: hidden;
    min-height: 280px;
  }

  &__head {
    min-height: 100px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
  }

  &__content {
    padding: 15px;
  }

  &__title {
    .link {
      font-size: 20px;
      font-weight: bold;
      margin: 15px 0;
      line-height: 1.2;
    }
  }

  &__short {
    font-size: 14px;
    line-height: 1.5;
    margin: 15px 0;
    font-weight: 300;
  }
}
</style>
