<template>
  <div class="theory-content">
    {{ content.content }}
  </div>
</template>
<script>
export default {
  props: {
    content: Object
  }
};
</script>
<style lang="scss">
.theory-content {
  margin: 15px 0;
  font-size: 18px;
  line-height: 1.2;
}
</style>
