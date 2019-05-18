<template>
  <section class="c-docs">
    <v-container>
      <div class="c-docs__container">
        <h3 class="c-docs__title">Получи PDF с 7 советами от 7 людей, как быстро развиваться в ИТ</h3>
        <p class="c-docs__short">Оставь почту, на которую хочешь получить советы и маленький подарок от нас</p>
        <div class="c-docs__body">
          <input-and-button-form @submit="submit()" />
        </div>
      </div>
    </v-container>
  </section>
</template>
<script>
import InputAndButtonForm from "@/components/shared/forms/InputAndButtonForm";
export default {
  components: {
    InputAndButtonForm
  },
  methods: {
    submit() {

    }
  }
};
</script>
<style lang="scss">
.c-docs {
  padding: 100px 0 100px;
  background-color: #FBFBFB;

  &__title {
    font-size: 36px;
    line-height: 41px;
    color: #333;
    font-weight: 600;
    max-width: 900px;
    text-align: center;
    margin: 0 auto;
  }

  &__short {
    color: #191520;
    mix-blend-mode: normal;
    opacity: 0.7;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    margin: 20px 0;
  }

  &__body {
    margin: 20px 0;
  }
}
</style>
