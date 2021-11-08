import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/pages/Dashboard.vue"),
  },
  {
    path: "/challenges",
    name: "Challenges",
    component: () => import("../components/pages/Challenges.vue"),
  },
  {
    path: "/map",
    name: "Map",
    component: () => import("../components/pages/Map.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
