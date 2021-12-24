<template>
  <div class="col">
    <h1>right pane</h1>
    <label for="selectedGroup">Select group</label>
    <br />

    <select id="selectedGroup" v-model="state.selectedGroup" @change="selectedGroupChanged">
      <option v-for="group in groups" :value="group.id">{{ group.name }}</option>
    </select>

    <br /><br />
    <div v-if="state.selectedGroup?.length">
      <label for="currentGroupUsers">currentGroupUsers</label><br />
      <select multiple id="currentGroupUsers" v-model="state.currentUsers">
        <option v-for="user in state.currentGroupUsers" :value="user.id">
          {{ user.name }}
        </option>
      </select><br />
      <button :disabled="!state.currentUsers.length" @click="removeFromGroup">Delete from group</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {PropType, reactive, watch} from "vue";
import {User} from "@/server/api/users";
import {Group} from "@/server/api/groups";

const emit = defineEmits(['selectedGroupChanged', 'removeFromGroup'])
const props = defineProps({
  users: {
    required: true,
    type: Array as PropType<User[]>
  },
  groups: {
    required: true,
    type: Array as PropType<Group[]>
  }
})

const state = reactive({
  selectedGroup: '',
  currentGroupUsers: [],
  currentUsers: []
})

const getUsersOfSelectedGroup = () => {
  const currentGroupUserIds = props.groups.filter(group => group.id === state.selectedGroup)[0]?.usersIds
  state.currentGroupUsers = props.users.filter(user => (currentGroupUserIds.includes(user.id)))
}

const selectedGroupChanged = () => {
  emit('selectedGroupChanged', state.selectedGroup)
  getUsersOfSelectedGroup()
}

const removeFromGroup = () => {
  emit('removeFromGroup', state.currentUsers)
  state.currentUsers = state.currentUsers.filter(userId => ( !state.currentUsers.includes(userId) ))
  getUsersOfSelectedGroup()
}

watch(() => props.groups, () => {
  if (state.selectedGroup) getUsersOfSelectedGroup();
}, { deep: true })
</script>
<style scoped>
.col {
  width: 48%;
  margin: 0 1%;
  border: 2px solid green;
  border-radius: 10px;
}
</style>

