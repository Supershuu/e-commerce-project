import { createRouter, createWebHistory } from 'vue-router'
const Home= ()=>import('../views/home/Home.vue')
const Sort= ()=>import('../views/sort/Sort.vue')
const Profile=()=>import('../views/profile/Profile.vue')
const Cart=()=>import('../views/cart/Cart.vue')
const Details=()=>import('../views/details/Details.vue')

const routerHistory = createWebHistory(process.env.BASE_URL);
const routes=[
  {
    path: '',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home      //这里是component千万不要写为components
  },
  {
    path:'/sort',
    component:Sort
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/details',
    component:Details
  }
];
const router = createRouter({
  history:routerHistory,
  routes
})

export default router
