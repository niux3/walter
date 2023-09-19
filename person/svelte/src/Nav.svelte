<script>
    export let data
</script>

<div class="expanded button-group">
    {#each data as row}
        <button class="button" on:click|preventDefault data-id={row.id}>{row.firstname}</button>
    {/each}
</div>