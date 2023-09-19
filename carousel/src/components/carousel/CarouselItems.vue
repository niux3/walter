<template>
    <div class="content">
        <ul :style="{width: `${len * 600}px`, left: `-${index * 600}px`}">
            <li v-for="(img, i) in imgs">
                <img :src="'/' + img + '.jpg'" width="600" height="400" :alt="img" />
            </li>
        </ul>   
    </div>
</template>
<script>
    export default {
        props: {
            imgs: Array,
            index: Number
        },
        computed:{
            len(){
                return this.imgs.length
            }
        }
    }
</script>
<style scoped>
    .content{
        overflow: hidden;
    }
    .content ul{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: nowrap;
        width: calc(4 * 600px);
        position: relative;
        transition: left .4s;
    }
</style>