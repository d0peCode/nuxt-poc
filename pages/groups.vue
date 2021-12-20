<template>
    <h1>{{ 'yo yo' }}</h1>
</template>
<script lang="ts" setup>
enum AppThemes {
    Light = '#fbf4f4',
    Mid = '#aba7a7',
    Dark = '#000000'
}

// on server and client
console.log('log from setup, 0 boilerplate style')

// auto import dont need to import useAsyncData..
// on server only
useAsyncData('logExample', () => {
    console.log('log from async data, on server..', AppThemes.Dark)
})

//hooks from vue need imports
import { onMounted } from 'vue'
// client only
onMounted(() => {
    console.log('log on mounted hook')
})
</script>
