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
  },/*
  {
    path: "/insights",
    name: "Ecological health",
    component: () => import("../components/pages/Insights.vue"),
  },*/
  {
    path: "/map",
    name: "Spendings map",
    component: () => import("../components/pages/Map.vue"),
    meta: {keepAlive: true}
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
