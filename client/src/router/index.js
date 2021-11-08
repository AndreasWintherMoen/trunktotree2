import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Economic health",
    component: () => import("../components/pages/Dashboard.vue"),
  },
  {
    path: "/insights",
    name: "Ecologic health",
    component: () => import("../components/pages/Insights.vue"),
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
