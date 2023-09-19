<script setup>
    import "../assets/form.scss"

    const props = defineProps({
        data: Object,
        onChange: Function
    })
</script>

<template>
    <form>
        <input type="hidden" name="id" :value="data.id" />
        <div class="grid-x grid-padding-x">
            <div class="medium-6 cell">
                <label>
                    <input @input="onChange" name="firstname" type="text" placeholder="prénom" :value="data.firstname">
                </label>
            </div>
            <div class="medium-6 cell">
                <label>
                    <input @input="onChange" name="lastname" type="text" placeholder="nom" :value="data.lastname">
                </label>
            </div>
            <div class="medium-12 cell no-padding">
                <label>
                    <textarea @input="onChange" name="bio" placeholder="biographie" :value="data.bio"></textarea>
                </label>
            </div>
            <div class="medium-12 cell no-padding">
                <label>
                    <input @input="onChange" name="email" type="text" placeholder="email" :value="data.email">
                </label>
            </div>
            <div class="medium-12 cell no-padding">
                <label>
                    <input @input="onChange" name="twitter" type="text" placeholder="twitter" :value="data.twitter">
                </label>
            </div>
            <div class="medium-12 cell no-padding">
                <label>
                    <input @input="onChange" name="github" type="text" placeholder="github" :value="data.github">
                </label>
            </div>
            <div class="medium-12 cell no-padding">
                <label>
                    <input @input="onChange" name="website" type="text" placeholder="site web" :value="data.website">
                </label>
            </div>
        </div>
    </form>
</template>
