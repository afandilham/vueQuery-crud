import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router';

import BioLists from '../components/BioLists.vue';
import BioUpdate from '../components/BioUpdate.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: { name: 'bio' } },
  {
    path: '/bio',
    name: 'bio',
    component: BioLists
  },
  {
    path: '/bio/:id',
    name: 'update',
    component: BioUpdate
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;