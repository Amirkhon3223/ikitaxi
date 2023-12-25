import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import QueryForm from "@/components/driverForm/QueryForm.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/driver',
    name: 'driver',
    component: QueryForm
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutPage
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
