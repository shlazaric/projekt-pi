import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FavoritesView from '../views/FavoritesView.vue';
import { auth } from '@/firebase';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login-view',
    name: 'login-view',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import(/* webpackChunkName: "sign-up" */ '../views/SignUp.vue')
  },
  {
    path: '/search-view',
    name: 'search-view',
    component: () => import(/* webpackChunkName: "searchview" */ '../views/SearchView.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView,
    beforeEnter: (to, from, next) => {
      const user = auth.currentUser;
      if (user) {
        next();
      } else {
        next('/login-view');
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
