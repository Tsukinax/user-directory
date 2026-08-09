<script setup lang="ts">
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import type { User } from '@/types'

const props = defineProps<{
  user: User
}>()
const { user } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const update = () => {
  store.updateMessage(`Updating ${props.user.name} — the update is in progress...`)
  setTimeout(() => {
    store.resetMessage()
    router.push({ name: 'user-list-view' })
  }, 5000)
}
</script>

<template>
  <p>Edit the details of {{ user.name }} here</p>
  <button @click="update">Update</button>
</template>
