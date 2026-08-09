import { createRouter, createWebHistory } from 'vue-router'
import UserListView from '@/views/UserListView.vue'
import UserLayoutView from '@/views/user/LayoutView.vue'
import UserProfileView from '@/views/user/ProfileView.vue'
import UserPostsView from '@/views/user/PostsView.vue'
import UserEditView from '@/views/user/EditView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

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
      name: 'user-layout-view',
      component: UserLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'user-profile-view',
          component: UserProfileView,
        },
        {
          path: 'posts',
          name: 'user-posts-view',
          component: UserPostsView,
        },
        {
          path: 'edit',
          name: 'user-edit-view',
          component: UserEditView,
        },
      ],
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
