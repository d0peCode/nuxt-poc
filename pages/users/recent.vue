<template>
  <div>
    <h1>most recent user:</h1>
    <pre>{{ state.user }}</pre>
  </div>
</template>
<script lang="ts" setup>
const state = reactive({
  user: await useAsyncData('recent', () => $fetch('/api/users/recent'))
})
</script>
