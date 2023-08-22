import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import DriverPage from "@/pages/DriverPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/driver',
    name: 'driver',
    component: DriverPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
