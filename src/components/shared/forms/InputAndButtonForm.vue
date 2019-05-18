<template>
  <aside class="request-form">
    <form @submit.prevent="$emit('submit', form)" class="request-form__form">
      <transparent-input
        v-model="form.email.value"
        name="email"
        label="Твой E-mail"
        @input="checkValue(form.email)"
      />
      <form-button @click="$emit('submit', form)" :disabled="!form.email.valid" title="Хочу" />
    </form>
  </aside>
</template>
<script>
import TransparentInput from "@/components/shared/inputs/TransparentInput";
import FormButton from "@/components/shared/buttons/FormButton";
import { hasValue } from "@/helpers/validators.js";
export default {
  data() {
    return {
      form: {
        email: {
          value: '',
          valid: false,
          error: ''
        }
      }
    }
  },
  methods: {
    checkValue(model) {
      model.valid = hasValue(model);
    }
  },
  components: {
    TransparentInput,
    FormButton
  }
};
</script>
<style lang="scss" scoped>
.request-form {
  max-width: 406px;
  width: 100%;
  margin: 0 auto;
  height: 50px;

  border: 1px solid #E4E4E4;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.06);
  border-radius: 6px;

  &__form {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
}
</style>
