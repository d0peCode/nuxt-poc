<template>
    <div>
        <table class="table">
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            <tr class="data">
                <td>Alfreds </td>
                <td>Maria </td>
                <td>Germany</td>
            </tr>
            <tr class="data">
                <td>Centro  </td>
                <td>Francisco </td>
                <td>Mexico</td>
            </tr>
        </table>
    </div>

</template>
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
