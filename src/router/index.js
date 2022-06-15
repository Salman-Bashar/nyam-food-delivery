import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const RestaurantsView = () =>
  import(/* webpackChunkName: "restaurants" */ "@/views/RestaurantsView.vue");
const RestaurantView = () =>
  import(/* webpackChunkName: "restaurants" */ "@/views/RestaurantView.vue");
const ServicesView = () =>
  import(/* webpackChunkName: "services" */ "@/views/ServicesView.vue");

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
  {
    path: "/services",
    name: "Services",
    component: ServicesView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
