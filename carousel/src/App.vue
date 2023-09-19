<template>
  <div id="app">
    <Carousel :imgs="imgs" />
  </div>
</template>

<script>
import Carousel from "./components/carousel/Carousel.vue";
export default {
    components: {
        Carousel,
    },
    data() {
        return {
            imgs: [
                'audi',
                'bentley',
                'ferrari',
                'rollroyce',
            ]
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 60px auto;
  width: 600px;
}
</style>