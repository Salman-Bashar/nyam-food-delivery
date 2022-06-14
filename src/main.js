import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faHeart,
  faCirclePlay,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";

import App from "@/App.vue";
import "@/assets/tailwind.css";

library.add(faSearch);
library.add(faHeart);
library.add(faCirclePlay);
library.add(faSquarePhone);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
