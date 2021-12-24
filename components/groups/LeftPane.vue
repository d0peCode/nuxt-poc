<template>
  <div class="col">
    <h1>left pane</h1>

    <label for="selectedUsers">UnAssignedUsers</label>
    <br />

    <select id="selectedUsers" multiple v-model="state.selectedUsers">
      <option v-for="user in users" :value="user.id">{{ user.name }}</option>
    </select>
    <pre>{{ state.selectedUsers }}</pre>
    <button @click="assignToGroup" :disabled="!state.selectedUsers.length">
      assign to group
    </button>
  </div>
</template>
<script lang="ts" setup>
import { PropType, reactive } from "vue";
import { User } from "@/server/api/users";
import { Group } from "~/server/api/groups";
const emit = defineEmits(['assignToGroup'])

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
  selectedUsers: []
})

const assignToGroup = () => {
  emit('assignToGroup', state.selectedUsers)
  state.selectedUsers = []
}
</script>
<style>
.col {
  width: 48%;
  margin: 0 1%;
  border: 2px solid green;
  border-radius: 10px;
}
</style>
