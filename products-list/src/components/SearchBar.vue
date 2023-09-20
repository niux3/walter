<script setup>
    let props = defineProps({
        onFiltered: Function,
    })   
</script>
<template>
    <form>
        <div>
            <label>
                <span hidden>chercher</span>
                <input @input="onFiltered" type="text" placeholder="chercher">
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" @change="onFiltered">
                <strong>seulement les produits en stock</strong>
            </label>
        </div>
    </form>
</template>

