<script setup>
    defineProps({
        product:Object
    })
</script>

<template>
    <tr>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
    </tr>
</template>

