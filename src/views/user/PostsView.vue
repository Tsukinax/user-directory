<script setup lang="ts">
import { ref, onMounted, toRefs } from 'vue'
import type { User, Post } from '@/types'
import UserService from '@/services/UserService'

const props = defineProps<{
  user: User
}>()
const { user } = toRefs(props)
const posts = ref<Post[] | null>(null)

onMounted(() => {
  UserService.getPostsByUser(user.value.id)
    .then((response) => {
      posts.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <ul class="posts">
    <li v-for="post in posts" :key="post.id">
      <strong>{{ post.title }}</strong>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>

<style scoped>
.posts {
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}
.posts li {
  margin-bottom: 16px;
}
</style>
