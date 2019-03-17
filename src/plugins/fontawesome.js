import Vue from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faBook,
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAngleDown,
  faBook,
  faArrowLeft,
  faArrowRight
);

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);
