<template>
  <footer class="footer">
    <v-container>
      <div class="footer__container">
        <div class="footer__top">
          <logo :black="true" />
        </div>
        <div class="footer__middle">
          <div class="footer__list">
            <footer-nav v-for="(item, index) in items" :key="index" :item="item" />
          </div>
          <div class="footer__auth">
            <router-link to="/profile" class="footer__link item" v-if="auth"
              >Кабинет</router-link
            >
            <router-link to="/login" class="footer__link item" v-if="!auth"
              >Войти</router-link
            >
            <router-link
              to="/signup"
              class="footer__link item"
              v-if="!auth"
              >Регистрация</router-link
            >
          </div>
        </div>
        <div class="footer__bottom">
          <div class="footer__socials">

          </div>
          <div class="footer__copyright">
            <div class="left">
              <ul class="copyright-nav">
                <li class="copyright-nav__item" v-for="(item, index) in copyright" :key="index">
                  <router-link :to="item.link" class="copyright-nav__link">{{
                    item.title
                  }}</router-link>
                </li>
              </ul>
            </div>
            <div class="righ">
              <p class="copyright">Copyright © 2004 - 2019 StudyLabel LLC. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </footer>
</template>
<script>
import Logo from "@/components/shared/Logo";
import FooterNav from "@/components/partial/common/FooterNav";
export default {
  data() {
    return {
      items: [
        {
          links: [
            {
              title: 'Главная',
              link: '#',
              isTitle: true,
            },
            {
              title: 'Платформа',
              link: '#',
              isTitle: true,
            },
            {
              title: 'О компании',
              link: '#',
              isTitle: true,
            },
            {
              title: 'Вопросы',
              link: '#',
              isTitle: true,
            },
            {
              title: 'Оплата',
              link: '#',
              isTitle: true,
            }
          ]
        },
        {
          title: 'Решения',
          isTitle: true,
          links: [
            {
              title: 'Бизнес',
              link: '#',
            },
            {
              title: 'Стартапов',
              link: '#',
            },
            {
              title: 'Университет',
              link: '#',
            },
            {
              title: 'Персональные',
              link: '#',
            }
          ]
        },
        {
          title: 'Платформа',
          isTitle: true,
          links: [
            {
              title: 'Направления',
              link: '#',
            },
            {
              title: '',
              hide: true,
              link: '#',
            },
            {
              title: 'Тарифы',
              link: '#',
            },
            {
              title: 'База знаний',
              link: '#',
            },
            {
              title: 'Инструкции',
              link: '#',
            },
            {
              title: 'Лекции',
              link: '#',
            },
            {
              title: 'Помощь',
              link: '#',
            }
          ]
        },
        {
          title: 'О компании',
          isTitle: true,
          links: [
            {
              title: 'Партнеры',
              link: '#',
            },
            {
              title: 'Виза',
              link: '#',
            },
            {
              title: 'Вакансии',
              link: '#',
            },
            {
              title: 'Работа',
              link: '#',
            },
            {
              title: 'Офисы',
              link: '#',
            }
          ]
        },
        {
          title: 'Помощь',
          isTitle: true,
          links: [
            {
              title: 'Онлайн поддержка',
              link: '#',
            },
            {
              title: 'Оставить обращение',
              link: '#',
            }
          ]
        }
      ],
      copyright: [
        {
          link: '#',
          title: 'Site Map'
        },
        {
          link: '#',
          title: 'Terms Of Use'
        },
        {
          link: '#',
          title: 'Privacy Policy'
        }
      ]
    }
  },
  components: {
    Logo,
    FooterNav
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: #E5E5E5;
  padding: 30px 0;

  &__middle, &__list {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__auth {
    min-width: 280px;
    margin: 28px -15px 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }

  &__link {
    display: block;
    margin: 0 15px;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */
    color: #191520;
  }

  &__copyright {
    margin: 35px 0 0;
  }

  .copyright {
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    text-align: right;
    color: #000000;
  }

  .copyright-nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    &__item {
      position: relative;

      &::after {
        content: "|";
        color: #000;
        position: relative;
        top: 2px;
        margin: 0 8px;
        font-weight: 300;
      }

      &:last-child {
        &::after {
          content: none;
        }
      }
    }

    &__link {
      font-size: 12px;
      line-height: 18px;
      /* identical to box height */
      color: #000;
    }
  }
}
</style>
