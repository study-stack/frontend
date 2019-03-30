<template>
  <div class="course-view-page">
    <course-view-section :page="page" :content="courseStep" :course="course" @updatePage="updatePage" v-if="courseStep && course && !loading" />
  </div>
</template>
<script>
import {
  GET_COURSE_STEP,
  GET_COURSE,
  NEXT_COURSE_STEP
} from "@/store/actions/course.js";
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
    },
    loading() {
      return this.$store.getters.coursesLoading;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$store.dispatch("UPDATE_SIDEBAR", "small");
      this.id = parseInt(this.$router.currentRoute.params.id);
      this.page = parseInt(this.$router.currentRoute.params.page);
      this.$store.dispatch("UPDATE_HEADER_BACK", {link: `/profile/courses/${this.id}`});
      if (!this.course) {
        this.$store.dispatch(GET_COURSE, this.id).then(() => {

          this.$store.dispatch(GET_COURSE_STEP, this.id).then(res => {
            this.$router.push(`/profile/courses/${this.id}/page/${this.courseStep.id}`);
          });
        });
        return;
      }
      this.$store.dispatch(GET_COURSE_STEP, this.id).then(res => {
        this.$router.push(`/profile/courses/${this.id}/page/${this.courseStep.id}`);
      });
    },
    updatePage(data) {
      if (data.type === 'next') {
        this.$store.dispatch(NEXT_COURSE_STEP, this.id).then(() => {
          this.$router.push(`/profile/courses/${this.id}/page/${this.courseStep.id}`);
          this.init();
        });
      }
    }
  }
};
</script>
<style lang="scss">
.course-view-page {
  margin: -60px -30px;
}
</style>
