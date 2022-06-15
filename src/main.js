import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faHeart,
  faCirclePlay,
  faSquarePhone,
  faBagShopping,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import App from "@/App.vue";
import "@/assets/tailwind.css";
import router from "@/router";

library.add(
  faSearch,
  faHeart,
  faCirclePlay,
  faSquarePhone,
  faBagShopping,
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faAngleUp,
  faAngleDown
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
