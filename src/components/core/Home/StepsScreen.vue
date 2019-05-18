<template>
  <section class="c-steps">
    <v-container>
      <div class="c-steps__container">
        <h3 class="s-title c-steps__title">Обучение практике на живых проектах</h3>
        <div class="c-steps__list">
          <step v-for="(item, index) in items" :item="item" :key="index" />
        </div>
      </div>
    </v-container>
  </section>
</template>
<script>
import Step from "@/components/core/Home/common/Step";
export default {
  data() {
    return {
      items: [
        {
          title: 'Выбирай проекты и стек технологий',
          description: [
            'Все проекты на платформе имеют реальные прототипы.',
            'Технологии и подходы заложеннные в учебные проекты  используются в Microsoft, Netflix, EPAM, Dropbox',
            'С помощью платформы вы устроитесь на работу или получите повышение.'
          ],
          position: 'left'
        },
        {
          title: 'Выполняй задачи шаг за шагом',
          description: [
            'Обучайтесь на платформе без ожиданий преподавателя.',
            'В учебные проекты заложены популярные ошибки, которые вам предстоит исправить.',
            'Каждая задача позволит понять конкретную проблему, технологию или фреймворк. '
          ],
          position: 'right'
        },
        {
          title: 'Напиши готовое приложение',
          description: [
            'Выполнив все шаги, ты получишь готовый проект, который  попадет в твое портфолио.',
            'Получи представление работы разработчиком в современной компании.',
            {
              color: '#DA1C1C',
              text: 'С помощью платформы вы устроитесь на работу или получите повышение.'
            }
          ],
          position: 'left'
        }
      ],
    }
  },
  components: {
    Step
  }
};
</script>
<style lang="scss" scoped>
.c-steps {
  padding: 120px 0 110px;
}
</style>
