<script setup lang="ts">
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
import type { User } from '@/types'

const props = defineProps<{
  user: User
}>()
const { user } = toRefs(props)
const router = useRouter()
const update = () => {
  router.push({ name: 'user-list-view' })
}
</script>

<template>
  <p>Edit the details of {{ user.name }} here</p>
  <button @click="update">Update</button>
</template>
