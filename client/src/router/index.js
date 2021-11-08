import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "My Status",
    component: () => import("../components/pages/Dashboard.vue"),
  },
  {
    path: "/economicalhealth",
    name: "Economical Health",
    component: () => import("../components/pages/EconomicHealth.vue"),
  },
  {
    path: "/ecologicalhealth",
    name: "Ecological Health",
    component: () => import("../components/pages/EcologicHealth.vue"),
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
