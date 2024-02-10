import { createRouter, createWebHistory } from 'vue-router';
import ProductCard from '../components/ProductCard.vue';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/ProductCard', component: ProductCard },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;