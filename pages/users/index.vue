<template>
    <div>
        <AddUserForm />
        <UsersTable />
    </div>
</template>
<script setup lang="ts">
import AddUserForm from '@/components/users/index/AddUserForm.vue'
import UsersTable from '@/components/users/index/UsersTable.vue'
const { data } = await useAsyncData('users', () => $fetch('/api/users'))
</script>
