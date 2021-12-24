<template>
  <div class="row">
    <LeftPane
        :users="state.notAssignedUsers"
        :groups="state.groups.data"
        @assignToGroup="assignUserToGroup"
    />
    <RightPane
      :users="state.users.data"
      :groups="state.groups.data"
      @selectedGroupChanged="changeSelectedGroup"
      @removeFromGroup="removeFromGroup"
    />
  </div>
</template>
<script lang="ts" setup>
import LeftPane from '@/components/groups/LeftPane'
import RightPane from '@/components/groups/RightPane'
import axios from "axios";

const state = reactive({
  users: await useAsyncData('users', () => $fetch('/api/users')),
  groups: await useAsyncData('groups', () => $fetch('/api/groups')),
  notAssignedUsers: [],
  selectedGroup: ''
})

const getNotAssignedUsers = (users, groups) => {
  console.log('getNotAssignedUsers', users, groups)
  return users.filter(user => {
    for (let i = 0, l = groups.length; i < l; i++) {
      if (groups[i].usersIds.includes(user.id)) {
        return false
      }
    }
    return true
  })
}

const assignUserToGroup = async (usersIds: string[]) => {
  if (!state.selectedGroup || !state.selectedGroup.length) {
    alert('You need to select group from Right Pane')
    return
  }

  for (let i = 0, l = usersIds.length; i < l; i++) {
    await axios.post(
        `http://localhost:3001/groups/${state.selectedGroup}/addUser`,
        { id: usersIds[i] }
    )
  }
  state.groups = await useAsyncData('groups', () => $fetch('/api/groups'))
  state.notAssignedUsers = getNotAssignedUsers(state.users.data, state.groups.data)
}

const removeFromGroup = async (usersIds: string[]) => {
  console.log('usersIds in removeFromGroup', usersIds)
  for (let i = 0, l = usersIds.length; i < l; i++) {
    await axios.delete(
        `http://localhost:3001/groups/${state.selectedGroup}/removeUser`,
        {
          data: { id: usersIds[i] }
        }
    )
  }
  state.groups = await useAsyncData('groups', () => $fetch('/api/groups'))
  state.notAssignedUsers = getNotAssignedUsers(state.users.data, state.groups.data)
}

const changeSelectedGroup = (newSelectedGroup: string) => {
  state.selectedGroup = newSelectedGroup
}

state.notAssignedUsers = getNotAssignedUsers(state.users.data, state.groups.data)
</script>
<style scoped>
.row {
  display: flex;
}
</style>
