<template>
  <div class="course-page">
    <page-with-preview>
      <template slot="head-left">
        <h2 class="title">{{ course.name }}</h2>
        <ul class="list">
          <li class="list-item" v-for="(item, i) in course.skills" :key="i">
            {{ item }}
          </li>
        </ul>
      </template>
      <template slot="head-right">
        <custom-button
          :link="`${course.id}/page/1`"
          title="Начать"
          v-if="!course.currentStep"
        />
        <custom-button
          :link="`${course.id}/page/${course.currentStep}`"
          title="Продолжить"
          v-if="course.currentStep"
        />
      </template>
      <template slot="content">
        <div class="course-page__content">
          <div class="field">
            <p class="key">Описание курса</p>
            <p class="value">{{ course.description }}</p>
          </div>
        </div>
      </template>
    </page-with-preview>
  </div>
</template>
<script>
import { GET_COURSE } from "@/store/actions/course.js";
import PageWithPreview from "@/components/shared/Sections/PageWithPreview";
import CustomButton from "@/components/shared/ui/CustomButton";

export default {
  data() {
    return {
      id: null
    };
  },
  components: {
    PageWithPreview,
    CustomButton
  },
  computed: {
    loading() {
      return this.$store.getters.coursesLoading;
    },
    course() {
      return this.$store.getters.getCourse;
    }
  },
  created() {
    this.id = this.$router.currentRoute.params.id;
    this.$store.dispatch(GET_COURSE, this.id);
    this.$store.dispatch("UPDATE_SIDEBAR", "large");
  }
};
</script>
<style lang="scss" scoped>
.course-page {
  margin: -60px -30px;

  .field {
    margin: 15px 0;

    .key {
      font-size: 22px;
    }

    .value {
      font-size: 16px;
      line-height: 1.5;
      margin: 5px 0;
      font-weight: 300;
    }
  }

  .list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 10px -8px 0;

    &-item {
      margin: 0 8px;
      font-weight: 300;
    }
  }
}
</style>
