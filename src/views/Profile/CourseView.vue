<template>
  <div class="course-view-page">
    <course-view-section :page="page" :content="courseStep" :course="course" @updatePage="updatePage" />
  </div>
</template>
<script>
import { GET_COURSE_STEP, GET_COURSE } from "@/store/actions/course.js";
import CourseViewSection from "@/components/core/Profile/courses/CourseViewSection";

export default {
  data() {
    return {
      id: null,
      page: null
    }
  },
  components: {
    CourseViewSection
  },
  computed: {
    courseStep() {
      return this.$store.getters.getCourseStep;
    },
    course() {
      return this.$store.getters.getCourse;
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$store.dispatch("UPDATE_SIDEBAR", "small");
      this.id = parseInt(this.$router.currentRoute.params.id);
      this.page = parseInt(this.$router.currentRoute.params.page);
      if (!this.course.id) {
        this.$store.dispatch(GET_COURSE, this.id);
      }
      this.$store.dispatch("UPDATE_HEADER_BACK", {link: `/profile/courses/${this.id}`});
      this.$store.dispatch(GET_COURSE_STEP, this.page);
    },
    updatePage(data) {
      this.$router.push(`/profile/courses/${this.id}/page/${data}`);
      this.init();
    }
  }
};
</script>
<style lang="scss">
.course-view-page {
  margin: -60px -30px;
}
</style>
