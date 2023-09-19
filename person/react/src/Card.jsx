import './assets/card.scss'


let Card = ({data})=>{
    let social_networks = {
        "twitter" : "social-twitter",
        "github": "social-github",
        "website": "web"
    }
    let output_sn = ''
    for(let k in data){
        if(Object.keys(social_networks).some(sn => k === sn) && data[k] !== ''){
            output_sn += `<li><a href="${data[k]}"><i class="fi-${social_networks[k]}"></i></a></li>`
        }
    }
    return (
        <div className="card">
            <img src={data.avatar} alt="" />
            <div className="card-divider">
                <h1>{data.firstname} {data.lastname}</h1>
                <p>{data.bio}</p>
            </div>
            <div className="card-section">
                <ul dangerouslySetInnerHTML={{ __html: output_sn }}></ul>
            </div>
        </div>
    )
}

export default Card