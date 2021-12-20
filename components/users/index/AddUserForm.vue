<template>
    <form @submit.prevent="addUser">
        <label>Name: <input type="text" required v-model="newUserForm.name"></label>
        <label>
            Color:
            <select required v-model="newUserForm.favoriteColor">
                <option value="">select color</option>
                <option v-for="(color, index) in colors" :key="index" :value="color">{{ color }}</option>
            </select>
        </label>
        <input type="submit">
    </form>
</template>
<script lang="ts" setup>
const emit = defineEmits(['addUser'])

const addUser = () => {
    emit('addUser', newUserForm)
}

const newUserForm = reactive({
    name: '',
    favoriteColor: ''
})

const colors = reactive(["blue", "yellow", "red"])
</script>
