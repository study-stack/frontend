<template>
  <label :class="{
    'transparent-input': true,
    'has-content': value && value.length > 0 || focus,
    'has-error': error && error.length > 0
  }">
    <span class="transparent-input__label">{{label}}</span>
    <input
      class="transparent-input__input"
      :type="type ? type : 'text'"
      :name="name"
      :readonly="readonly"
      @focus="focus = true"
      @blur="focus = false"
      v-on:input="$emit('input', $event.target.value)"
      :autofocus="autofocus"
      autocomplete="off"
      v-bind:value="value"
    />
  </label>
</template>
<script>
export default {
  props: {
    readonly: Boolean,
    autofocus: Boolean,
    type: String,
    name: String,
    value: String,
    error: String,
    label: String
  },
  data() {
    return {
      focus: false,
    }
  }
};
</script>
<style lang="scss" scoped>
.transparent-input {
  height: 100%;
  color: #5E5E5E;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  align-items: baseline;
  position: relative;

  &__label {
    position: absolute;
    left: 60px;
    top: 50%;
    transform: translate(0, -50%);
    transition: opacity .15s ease;
    opacity: 1;
    cursor: text;
  }

  &__input {
    height: 100%;
    padding: 0 20px;
  }

  &.has-content {
    .transparent-input__label {
      opacity: 0;
    }
  }
}
</style>
