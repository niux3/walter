export default class Card extends HTMLElement{
    static get observedAttributes(){
        return [
            'id'
        ]
    }

    constructor(){
        super()
        this.init()
        this.render()

    }

    init(){
        this._id = parseInt(this.getAttribute('id'), 10)
        this._data = JSON.parse(sessionStorage.getItem('data'))
    }

    render(){
        let data = this._data.find(r => r.id === this._id),
            output_sn = '',
            social_networks = {
                "twitter" : "social-twitter",
                "github": "social-github",
                "website": "web"
            }

        for(let k in data){
            if(Object.keys(social_networks).some(sn => k === sn) && data[k] !== ''){
                output_sn += `<li><a href="${data[k]}"><i class="fi-${social_networks[k]}"></i></a></li>`
            }
        }
        this.innerHTML = `
            <div class="card">
                <img src=${data.avatar} width="80" height="80" alt="" />
                <div class="card-divider">
                    <h1>${data.firstname} ${data.lastname}</h1>
                    <p>${data.bio}</p>
                </div>
                <div class="card-section">
                    <ul>${output_sn}</ul>
                </div>
            </div>
        `
    }

    attributeChangedCallback(){
        this.init()
        this.render()
    }
}

