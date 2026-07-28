import { createRouter, createWebHistory } from 'vue-router'
import UserListView from '@/views/UserListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user-list-view',
      component: UserListView,
    },
  ],
})

export default router
