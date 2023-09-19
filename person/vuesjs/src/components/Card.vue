<script setup>
    import '../assets/card.scss'

    const props = defineProps({
        data:Object
    })
    let displaySocialNetworks = () =>{
        let social_networks = {
            "twitter" : "social-twitter",
            "github": "social-github",
            "website": "web"
        }
        let output_sn = ''
        for(let k in props.data){
            if(Object.keys(social_networks).some(sn => k === sn) && props.data[k] !== ''){
                output_sn += `<li><a href="${props.data[k]}"><i class="fi-${social_networks[k]}"></i></a></li>`
            }
        }
        return output_sn
    }
</script>

<template>
    <div class="card">
        <img :src="data.avatar" alt="" />
        <div class="card-divider">
            <h1>{{ data.firstname }} {{ data.lastname }}</h1>
            <p>{{ data.bio }}</p>
        </div>
        <div class="card-section">
            <ul v-html="displaySocialNetworks()" />
        </div>
    </div>
</template>
