import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const RestaurantsView = () =>
  import(/* webpackChunkName: "restaurants" */ "@/views/RestaurantsView.vue");
const RestaurantView = () =>
  import(/* webpackChunkName: "restaurants" */ "@/views/RestaurantView.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/restaurants",
    name: "Restaurants",
    component: RestaurantsView,
  },
  {
    path: "/restaurants/:id",
    name: "RestaurantListing",
    component: RestaurantView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
