<script setup>
    import {ref, onMounted} from 'vue'
    import SearchBar from './components/SearchBar.vue'
    import ProductTable from './components/ProductTable.vue'

    let products = ref([]),
        data = ref([]),
        onFiltered = ()=>{
            let $searchInput = document.querySelector('form input[type="text"]'),
                $stockInput = document.querySelector('form input[type="checkbox"]')

            if($searchInput.value !== '' && !$stockInput.checked){
                products.value = data.value.filter(r => r.name.toLowerCase().includes($searchInput.value.toLowerCase()))
            }
            
            if($stockInput.checked && $searchInput.value !== ''){
                products.value = data.value.filter(r => r.stocked === $stockInput.checked)
                products.value = products.value.filter(r => r.name.toLowerCase().includes($searchInput.value.toLowerCase()))
            }
            
            if($stockInput.checked && $searchInput.value === ''){
                products.value = data.value.filter(r => r.stocked === $stockInput.checked)
            }
            
            if(!$stockInput.checked && $searchInput.value === ''){
                products.value = data.value
            }
        }

    onMounted(()=>{
        let url = `${window.location.protocol}//${window.location.host}/data.json`
        fetch(url).then(r => {
            if(r.ok){
                return r.json()
            }
        }).then(d =>{
            products.value = d
            data.value = d
        }).catch( err =>{
            console.error('>>', err)
        })
    })

</script>

<template>
  <div>
    <SearchBar :onFiltered="onFiltered" />
    <ProductTable :products="products" />
  </div>
</template>

