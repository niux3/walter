<script setup>
    const props = defineProps({
        data: Object,
        onClick: Function
    })
</script>
<template>
    <div class="expanded button-group">
        <button v-for="row in data" @click="onClick" class="button" :data-id="row.id">{{ row.firstname}}</button>
    </div>
</template>
