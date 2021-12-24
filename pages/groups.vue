<template>
    <div class="row">
      <LeftPane :users="state.users.data" :groups="state.groups.data" />
      <RightPane />
    </div>
</template>
<script lang="ts" setup>
import LeftPane from '@/components/groups/LeftPane'
import RightPane from '@/components/groups/RightPane'


const getNotAssignedUsers = (users, groups) => {
  return users.filter(user => {
    for (let i = 0, l = groups.length; i < l; i++) {
      if (groups[i].usersIds.includes(user.id)) {
        return false
      }
    }
    return true
  })
}


const state = reactive({
  users: await useAsyncData('users', () => $fetch('/api/users')),
  groups: await useAsyncData('groups', () => $fetch('/api/groups')),
  notAssignedUsers: []
})

state.notAssignedUsers = getNotAssignedUsers(state.users.data, state.groups.data)
</script>
