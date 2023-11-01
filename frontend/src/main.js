import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import moment from "moment";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import "moment/dist/locale/pt-br";

import "./assets/tailwind.css";

const app = createApp(App);

app.use(router);

moment.locale("ptbr");

app.component("VueDatePicker", VueDatePicker);

app.config.globalProperties.$moment = moment;

app.mount("#app");
