import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/Home.vue';
import MenuPage from '@/pages/Menu.vue';
import DeliveryPage from '@/pages/Delivery.vue';
import ProductPage from '@/pages/Product.vue';
import NotFound from '@/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/menu',
      name: 'Menu',
      component: MenuPage,
    },
    {
      path: '/menu/:id',
      name: 'Product',
      props: true,
      component: ProductPage
    },
    {
      path: '/delivery',
      name: 'Delivery',
      component: DeliveryPage
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});

export default router;