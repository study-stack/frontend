<template>
  <div class="question">
    <h4 class="question-title">
      {{ content.question.content }}
    </h4>
    <ul class="answer-list">
      <li
        class="answer-item"
        v-for="item in content.question.answers"
        :key="item.id"
        @click="select(item.id)"
      >
        {{ item.content }} {{item.id === answer ? 'checked' : ''}}
        <!-- TODO: add normal checkboxes for select answer -->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    content: Object,
  },
  data() {
    return {
      answer: null
    }
  },
  methods: {
    select(id) {
      this.answer = id;
      this.$emit('selected', id);
    }
  }

  // TODO: Add for questions step disabled state for NEXT button. If we haven't checked answers, we can't change step. And add send data for Answers type.
};
</script>
<style lang="scss">
.question {
  margin: 15px 0;
  font-size: 18px;
  line-height: 1.2;

  &-title {
    font-weight: 400;
    font-size: 20px;
  }
}

.answer {
  &-item {
    margin: 8px 0;
    font-weight: 600;
  }
}
</style>
