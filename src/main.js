import "./styles/main.sass";
// 这里这里
import catDesign from "@/ui";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(catDesign);
app.mount("#app");
