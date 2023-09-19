<script>
    export let row
</script>
<form on:keyup>
    <input type="hidden" name="id" value={row.id} />
    <div class="grid-x grid-padding-x">
        <div class="medium-6 cell">
            <label>
                <input name="firstname" type="text" placeholder="prénom" value={row.firstname}>
            </label>
        </div>
        <div class="medium-6 cell">
            <label>
                <input name="lastname" type="text" placeholder="nom" value={row.lastname}>
            </label>
        </div>
        <div class="medium-12 cell no-padding">
            <label>
                <textarea name="bio" placeholder="biographie" value={row.bio}></textarea>
            </label>
        </div>
        <div class="medium-12 cell no-padding">
            <label>
                <input name="email" type="text" placeholder="email" value={row.email}>
            </label>
        </div>
        <div class="medium-12 cell no-padding">
            <label>
                <input name="twitter" type="text" placeholder="twitter" value={row.twitter}>
            </label>
        </div>
        <div class="medium-12 cell no-padding">
            <label>
                <input name="github" type="text" placeholder="github" value={row.github}>
            </label>
        </div>
        <div class="medium-12 cell no-padding">
            <label>
                <input name="website" type="text" placeholder="site web" value={row.website}>
            </label>
        </div>
    </div>
</form>

<style lang="scss">
    form{
        margin: 50px 0;

        .grid-x{
            .cell{
                &:nth-child(1){
                    padding-left: 0;
                }
                &:nth-child(2){
                    padding-right: 0;
                }
            }

            .no-padding{
                padding: 0;

                textarea{
                    min-height: 100px;
                    resize: vertical;
                }
            }
        }
    }
</style>
