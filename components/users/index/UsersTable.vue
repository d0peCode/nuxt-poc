<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                  <th scope="col">name</th>
                  <th scope="col">favoriteColor</th>
                  <th scope="col">timestamp</th>
                </tr>
            </thead>
            <tbody>
                <tr class="data" v-for="user in users" :key="user.id">
                  <td>{{ user.name }}</td>
                  <td>{{ user.favoriteColor }}</td>
                  <td>{{ user.timestamp }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts" setup>
defineProps({ users: Object })
</script>
<style lang="scss">
.table {
    width: 300px;
    background-color: #ffffff;
    border-collapse: collapse;
    border-width: 2px;
    border-color: #ffcc00;
    border-style: solid;
    color: #000000;

    .data {
        border-width: 2px;
        border-color: #ffcc00;
        border-style: solid;
        padding: 3px;
    }

    .head {
        background-color: #ffcc00;
    }
}
</style>
