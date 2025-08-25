import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue';
import Menu from '@/pages/Menu.vue';
import ProductItem from '@/pages/ProductItem.vue';
import NotFound from '@/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home

    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
      children: [
        {
          path: '/:id',
          props: true,
          component: ProductItem
        }
      ]
    },
    // {
    //   path: '/:notFound(.*)',
    //   component: NotFound
    // }
  ]
});

export default router;