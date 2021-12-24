<template>
  <div>
    <ul>
      <li><NuxtLink to="/users">Users</NuxtLink></li>
      <li><NuxtLink to="/groups">Groups</NuxtLink></li>
      <li><NuxtLink to="/users/recent">Recent User</NuxtLink></li>
    </ul>
    <NuxtPage />
  </div>
</template>
<script>
export default {
  middleware: 'defaultIndex'
}
</script>
