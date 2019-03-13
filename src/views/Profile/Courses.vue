<template>
  <page-section>
    <template slot="head-left">
      <h2 class="profile-title">Мои Курсы</h2>
    </template>
    <template slot="content">
      <div class="courses">
        <course-item v-for="item in courses" :key="item.id" :item="item" />
      </div>
    </template>
  </page-section>
</template>
<script>
import { GET_COURSES } from "@/store/actions/course.js";
import PageSection from "@/components/shared/Sections/PageSection";
import CourseItem from "@/components/core/Profile/courses/CourseItem";

export default {
  data() {
    return {};
  },
  components: {
    PageSection,
    CourseItem
  },
  computed: {
    loading() {
      return this.$store.getters.coursesLoading;
    },
    courses() {
      return this.$store.getters.getCourses;
    }
  },
  mounted() {
    this.$store.dispatch(GET_COURSES);
  }
};
</script>
<style lang="scss" scoped>
.courses {
  margin: 0 -15px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
