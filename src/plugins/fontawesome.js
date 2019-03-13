import Vue from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faBook } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown, faBook);

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);
