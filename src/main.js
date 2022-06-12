import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

import App from "@/App.vue";
import "@/assets/tailwind.css";

library.add(faSearch);
library.add(faUser);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
