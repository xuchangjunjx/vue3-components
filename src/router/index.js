import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ButtonTest from "../views/ButtonTest.vue";
import DropdownTest from "../views/DropdownTest.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/button-test",
    name: "ButtonTest",
    component: ButtonTest,
  },
  {
    path: "/dropdown-test",
    name: "DropdownTest",
    component: DropdownTest,
  },
  {
    path: "/icon-test",
    name: "IconTest",
    component: () => import("@/views/IconTest.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
