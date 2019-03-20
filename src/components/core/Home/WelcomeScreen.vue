<template>
  <section class="c-welcome">
    <v-container>
      <div class="c-welcome__container">
        <div class="c-welcome__left">
          <h2 class="title c-welcome__title">
            Научись разрабатывать настоящие проекты с современной архитектурой и
            технологическим стеком, способные выдерживать большие нагрузки
          </h2>
          <p class="short c-welcome__text">
            Получи опыт создания проектов у компаний как Netflix, Google,
            Microsoft
          </p>
          <div class="c-welcome__controlls">
            <router-link to="#" class="button button__invers button__icon">
              <span class="text">Начать</span>
              <div class="icon">
                <div class="icon__container">
                  <div class="icon__left"></div>
                  <div class="icon__rigth"></div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="c-welcome__right">
          <img src="../../../assets/img/welcome.png" alt="" />
        </div>
      </div>
    </v-container>
  </section>
</template>
<style lang="scss">
.c-welcome {
  &__title {
    font-size: 24px;
    color: #f8f8f8;
    line-height: 30px;
  }

  &__text {
    font-size: 18px;
    color: #f4f4f4;
    line-height: normal;
    margin: 24px 0;
    max-width: 400px;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__left {
    max-width: 601px;
    width: 100%;
  }

  &__right {
    min-width: 590px;
    width: 100%;

    img {
      width: 100%;
    }
  }

  &__controlls {
    margin: 60px 0;
    display: flex;
    justify-content: flex-start;

    .button {
      margin: 0;
    }
  }

  @media only screen and (min-width: 1904px) {
    &__container {
      align-items: center;
    }
  }
}
</style>
