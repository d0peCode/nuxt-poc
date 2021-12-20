<template>
    <div>
        <AddUserForm @addUser="addUser($event)" />
        <UsersTable :users="state.users.data" />
    </div>
</template>
<script setup lang="ts">
import AddUserForm from '@/components/users/index/AddUserForm.vue'
import UsersTable from '@/components/users/index/UsersTable.vue'
import axios from "axios";

const state = reactive({
    users: await useAsyncData('users', () => $fetch('/api/users'))
})

const addUser = async (newUserData) => {
    try {
        const { data: response } = await axios.post('http://localhost:3001/users', newUserData, {})
        state.users.data.push(response.user)
    } catch (e) {
        console.log('error adding new user', e)
    }
}
</script>
