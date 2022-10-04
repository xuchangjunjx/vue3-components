import "./styles/main.sass";
// 这里这里
// import catDesign from "@/ui";

// import "../cat-design3/cat-design3.css";
// import catDesign from "../cat-design3/cat-design3.umd.js";

// import "$cat-design3/dist/css/cat-design3.css";
// import catDesign from "$cat-design3/dist/cat-design3.esm";

import "cat-design3/dist/css/cat-design3.css";
import catDesign from "cat-design3";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(catDesign);
app.mount("#app");
