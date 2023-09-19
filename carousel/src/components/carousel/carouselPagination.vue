<template>
    <nav>
        <button type="button" v-for="i in imgs.length" :data-index="i - 1" @click.prevent="onClickPagination" :class="{active: index == i - 1}"></button> 
    </nav>
</template>
<script>
    export default {
        props: {
            imgs: Array,
            onClickPagination: Function,
            index:Number
        }
    }
</script>

<style scoped>
    nav{
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
    }
    nav button{
        border: none;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, .8);
        width: 15px;height: 15px;
        margin: 0 5px;
        cursor: pointer;
    }

    nav button:hover, nav button.active{
        background-color: rgba(255, 255, 255, .8);
    }

    nav button:first-child{
        margin-left: 0;
    }
    nav button:last-child{
        margin-right: 0;
    }
</style>