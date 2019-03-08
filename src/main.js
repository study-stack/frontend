import Vue from "vue";
import "./plugins";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import i18n from "./i18n";
import axios from "axios";

const token = localStorage.getItem("stack.user-token");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}

Vue.filter("decnum", (number, titles) => {
  let cases = [2, 0, 1, 1, 1, 2];
  return `${number} ${
    titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ]
  }`;
});

Vue.filter("decnumWithout", (number, titles) => {
  let cases = [2, 0, 1, 1, 1, 2];
  return `${
    titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ]
  }`;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
