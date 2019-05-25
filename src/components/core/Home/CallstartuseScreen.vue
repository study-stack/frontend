<template>
  <section class="call-start">
    <v-container>
      <h3 class="call-start__title s-title">Проверьте свои навыки. Выучите новое. Повторите.</h3>
      <p class="call-start__short">Начни прямо сейчас постигать профессию своей мечты</p>
      <div class="call-start__controlls">
        <div class="controlls">
          <custom-button
            :link="``"
            title="Начать"
          />
        </div>
      </div>
    </v-container>
  </section>
</template>
<script>
import CustomButton from "@/components/shared/ui/CustomButton";
export default {
  components: {
    CustomButton,
  }
}
</script>
<style lang="scss" scoped>
.call-start {
  margin: 100px 0;
  display: block;
  
  &__short {
    font-size: 16px;
    line-height: 24px;
    /* or 150% */
    text-align: center;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  &__controlls {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0 0;

    .controlls {
      width: auto;
    }
  }
}
</style>
