<template>
  <article :class="{
    'rate-card': true,
    'active': item.active
  }">
    <div class="rate-card__top">
      <h4 class="rate-card__title">{{item.title}}</h4>
      <div class="rate-card__price">
        <div class="price">
          <span class="item price-currency">{{item.currency}}</span>
          <span class="item price-value">{{item.price}}</span>
          <span class="item price-period">/{{item.period}}</span>
        </div>
      </div>
    </div>
    <div class="rate-card__body">
      <p class="rate-card__p" v-for="(p, index) in item.differences" :key="index">
        {{p}}
      </p>
    </div>
    <div class="rate-card__controll">
      <form-button class="rate-card__button" title="Купить" />
    </div>
  </article>
</template>
<script>
import FormButton from "@/components/shared/buttons/FormButton";
export default {
  props: {
    item: Object
  },
  components: {
    FormButton
  }
};
</script>
<style lang="scss" scoped>
.rate-card {
  width: 33%;
  padding: 65px 76px;
  margin: 61px 0;
  background-color: transparent;
  transition: all .15s ease-in-out;
  position: relative;
  z-index: 1;

  &.active {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -20px;
      right: -20px;
      bottom: 0;
      z-index: -1;
      background-color: var(--second-color);
    }

    .rate-card__controll {
      opacity: 1;
    }

    .rate-card__p {
      color: #191520;
      border-bottom-color: rgba(31, 30, 33, 0.1);
    }
  }

  &:hover {
    .rate-card__controll {
      opacity: 1;
    }
  }

  &__title {
    font-size: 28px;
    line-height: 41px;
    /* identical to box height */
    letter-spacing: 0.05em;
    color: #F2F2F2;
    margin: 0 0 10px;
  }

  &__p {
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */
    color: #F2F2F2;
    padding: 11px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:last-child {
      border-bottom: none;
    }
  }

  &__body {
    margin: 20px 0 0;
  }
  
  &__controll {
    margin: 63px 0 0;
    transition: opacity .15s ease;
    opacity: 0;
  }

  &__button {
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    text-transform: none;
  }

  &__price {
    color: var(--third-color);

    .price {
      display: flex;
      align-items: flex-end;
      
      &-value {
        font-weight: bold;
        font-size: 52px;
        line-height: 0.7;
      }

      &-currency, &-period {
        font-size: 18px;
        line-height: 23px;
      }

      &-currency {
        align-self: flex-start;
        line-height: 0.6;
      }
    }
  }

  &.active {
    .rate-card__title {
      color: #000;
    }
  }

  .price {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
