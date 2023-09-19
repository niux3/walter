<template>
    <div class="navCarousel">
        <button @click.prevent="onClickNav" type="button" class="prev">&lsaquo;</button>
        <button @click.prevent="onClickNav" type="button" class="next">&rsaquo;</button>
    </div>
</template>

<script>
    export default {
        props: {
            onClickNav: Function
        }
    }
</script>
<style scoped>
    .navCarousel button{
        position: absolute;
        top: 50%;
        left: 10px;
        margin-top: -25px;
        width: 50px;
        height: 50px;
        border: none;
        background-color: rgba(0, 0, 0, .6);
        color: white;
        font-size: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        line-height: 50px;
    }
     .navCarousel .next{
        left: auto;
        right: 10px;
     }
</style>