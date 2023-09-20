<script setup>
    import {ref, onUpdated, onMounted} from 'vue'
    import ProductCategoryRow from './ProductCategoryRow.vue'
    import ProductRow from './ProductRow.vue'

    let props = defineProps({
            products: Object
        }),
        lastCategory = '',
        rows = ref([]),
        categorised = () =>{
            rows.value = []
            for(let row of props.products){
                if(row.category !== lastCategory){
                    lastCategory = row.category
                    rows.value.push({"category": row.category})
                }
                rows.value.push({
                    "name": row.name,
                    "price": row.price
                })
            }
        }
    onUpdated(()=>{
        categorised()
    })
    onMounted(()=>{
        categorised()
    })
</script>
<template>
    <table class="unstriped">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody v-for="row in rows">
            <ProductCategoryRow v-if="Object.keys(row).includes('category')" :category="row.category" />
            <ProductRow :product="row"/>
        </tbody>
    </table>
</template>

