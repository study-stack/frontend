<template>
  <div class="course-page">
    <p>{{ course.name }}</p>
    <p>{{ course.description }}</p>
  </div>
</template>
<script>
import { GET_COURSE } from "@/store/actions/course.js";

export default {
  data() {
    return {
      id: null
    };
  },
  components: {},
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
  }
};
</script>
<style lang="scss" scoped>
.course-page {
  p {
    margin: 15px 0;
  }
}
</style>
