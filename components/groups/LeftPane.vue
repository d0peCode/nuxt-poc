<template>
  <div>
    left pane

    users <pre>{{ users }}</pre>
    groups <pre>{{ groups }}</pre>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps({
  users: {
    required: true,
    type: Array as PropType<any>
  },
  groups: {
    required: true,
    type: Array as PropType<any>
  }
})

const notAssignedUsers = props.users.filter(user => {
  for (let i = 0, l = props.groups.length; i < l; i++) {
    if (props.groups[i].usersIds.includes(user.id)) {
      return false
    }
  }
  return true
})
</script>
