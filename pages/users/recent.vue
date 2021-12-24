<template>
  <div>
    <h1>most recent user:</h1>
    <pre v-if="state.user.data">{{ state.user.data }}</pre>
  </div>
</template>
<script lang="ts" setup>
const state = reactive({
  user: await useAsyncData('recent', () => $fetch('/api/recent'))
})
</script>
