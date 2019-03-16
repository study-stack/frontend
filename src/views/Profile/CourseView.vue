<template>
  <div>
    is course slider

    {{courseStep.title}} asdasd
    {{course}}
  </div>
</template>
<script>
import { GET_COURSE_STEP, GET_COURSE } from "@/store/actions/course.js";

export default {
  data() {
    return {
      id: null
    }
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
    this.$store.dispatch("UPDATE_SIDEBAR", "small");
    this.id = this.$router.currentRoute.params.id;
    if (!this.course.id) {
      this.$store.dispatch(GET_COURSE, this.id);
    }
  },
  mounted() {
    this.$store.dispatch("UPDATE_HEADER_BACK", {link: `/profile/courses/${this.id}`});
    this.$store.dispatch(GET_COURSE_STEP);
  }
};
</script>
