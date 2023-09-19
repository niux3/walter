<script>
    export let data
    let social_networks = {
        "twitter" : "social-twitter",
        "github": "social-github",
        "website": "web"
    }
</script>
<div class="card">
    <img src={data.avatar} alt="" />
    <div class="card-divider">
        <h1>{data.firstname} {data.lastname}</h1>
        <p>{data.bio}</p>
    </div>
    <div class="card-section">
        <ul>
            {#each Object.entries(data) as [k, v], i}
                {#if Object.keys(social_networks).some(sn => k === sn) && v !== ''}
                    <li>
                        <a href={v}>
                            <i class={`fi-${social_networks[k]}`}></i>
                        </a>
                    </li>
                {/if}
            {/each}
        </ul>
    </div>
</div>

<style lang="scss">
    .card{
        padding: 20px 0 0;
        .card-divider{
            background: transparent;
            text-align: center;
            display: block;
            h1{
                font-family: 'Open Sans', sans-serif;
                font-weight: 300;
                font-size: 36px;
            }
            p{
                color: #666;
                font-size: 19px;
                font-weight: 300;
            }
        }
        img{
            width: 80px;
            display: block;
            margin: 0 auto;
            border-radius: 100%;
        }
        .card-section{
            background-color: #f3f3f3;
            text-align: center;

            ul{
                list-style: none;
                display: flex;
                justify-content: center;
                margin: 0;

                li{
                    margin-left: 10px;

                    &:first-child{
                        margin-left: 0;
                    }

                    a{
                        i{
                            font-size: 32px;
                        }
                    }
                }
            }
        }
    }
</style>