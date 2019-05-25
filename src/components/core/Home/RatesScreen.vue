<template>
  <section class="c-rates">
    <v-container>
      <div class="c-rates__container">
        <h3 class="s-title s-title__lg c-rates__title">
          Выбери комфортный для себя тариф
        </h3>
        <p class="c-rates__short">
          В стоимость входят облачные мощности Microsoft Azure, платформа
          разработки Cloud9.
        </p>
        <div class="c-rates__list">
          <rate-card v-for="(item, index) in items" :key="index" :item="item" />
        </div>
      </div>
    </v-container>
  </section>
</template>
<script>
import RateCard from "@/components/core/Home/common/RateCard";
export default {
  data() {
    return {
      items: [
        {
          title: "Bronze",
          price: "50",
          period: "month",
          currency: "$",
          differences: [
            "Онлайн поддержка наставника",
            "Дополнительный плюс",
            "Дополнительный плюс",
            "Еще плюс"
          ]
        },
        {
          title: "Silver",
          price: "90",
          period: "month",
          currency: "$",
          differences: [
            "Онлайн поддержка наставника",
            "Дополнительный плюс",
            "Дополнительный плюс",
            "Еще плюс"
          ],
          active: true
        },
        {
          title: "Gold",
          price: "350",
          period: "month",
          currency: "$",
          differences: [
            "Онлайн поддержка наставника",
            "Дополнительный плюс",
            "Дополнительный плюс",
            "Еще плюс"
          ]
        }
      ]
    };
  },
  components: {
    RateCard
  }
};
</script>
<style lang="scss">
.c-rates {
  padding: 120px 0 60px;

  &__short {
    font-size: 18px;
    text-align: center;
    margin: 20px auto;
    max-width: 523px;
    font-size: 18px;

    line-height: 27px;
    text-align: center;
    color: var(--second-color);
    opacity: 0.8;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
