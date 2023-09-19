<template>
    <div class="carousel">
        <CarouselItems :imgs="imgs" :index="index" />
        <CarouselNav :onClickNav="onClickNav" />
        <CarouselPagination :imgs="imgs" :onClickPagination="onClickPagination" :index="index" />
    </div>
</template>
<script>
    import CarouselItems from './CarouselItems.vue';
    import CarouselNav from './CarouselNav.vue';
    import CarouselPagination from './carouselPagination.vue';
    export default {
        components:{
            CarouselItems,
            CarouselNav,
            CarouselPagination,
        },
        props: {
            imgs: Array
        },
        data(){
            return {
                index: 0
            }
        },
        methods:{
            onClickNav(e){
                if(e.target.closest('button').classList.contains('prev')){
                    this.index = this.index < 1 ? this.imgs.length - 1 : this.index - 1
                }else{
                    this.index = this.index >= this.imgs.length - 1 ? 0 : this.index + 1
                }
            },
            onClickPagination(e){
                this.index = parseInt(e.target.dataset.index, 10)
            }
        }
    }
</script>

<style scoped>
    .carousel{
        position: relative;
    }
</style>