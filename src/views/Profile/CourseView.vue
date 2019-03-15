<template>
  <div>
    is course slider
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("UPDATE_SIDEBAR", "small");
  }
};
</script>
