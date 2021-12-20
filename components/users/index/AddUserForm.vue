<template>
    <form>
        <label for="name">Name: </label>
        <input type="text" id="name">
        <label for="color">Color: </label>
        <select>
            <option value="blue">blue</option>
        </select>
        {{ colors }}
    </form>
</template>
<script lang="ts" setup>
const colors = ["red", "blue", "green"]
</script>
