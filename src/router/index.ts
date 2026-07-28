import { createRouter, createWebHistory } from 'vue-router'
import UserListView from '@/views/UserListView.vue'
import UserDetailView from '@/views/UserDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user-list-view',
      component: UserListView,
    },
    {
      path: '/users/:id',
      name: 'user-detail-view',
      component: UserDetailView,
      props: true,
    },
  ],
})

export default router
