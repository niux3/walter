import '../scss/index.scss';


class Nav extends HTMLElement{
    static get observedAttributes(){
        return [
            'id'
        ]
    }

    constructor(){
        super()
        this.render()

    }

    render(){
        let output = JSON.parse(sessionStorage.getItem('data')).map(r => `<button class="button" data-id="${r.id}">${r.firstname}</button>`).join('')
        this.innerHTML = `
            <div class="expanded button-group">
                ${output}
            </div>
        `
        this.querySelectorAll('button').forEach(bt => {
            bt.addEventListener('click', e => {
                this.closest('.container').querySelector('custom-card').id = parseInt(e.target.dataset.id, 10)
                this.closest('.container').querySelector('custom-form').id = parseInt(e.target.dataset.id, 10)
            })
        })
    }

    attributeChangedCallback(){
        this.render()
    }
}

class Card extends HTMLElement{
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

class Form extends HTMLElement{
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
        let data = this._data.find(r => r.id === this._id)
        this.innerHTML = `
            <form>
                <input type="hidden" name="id" value="${data.id}" />
                <div className="grid-x grid-padding-x">
                    <div className="medium-6 cell">
                        <label>
                            <input name="firstname" type="text" placeholder="prénom" value="${data.firstname}" />
                        </label>
                    </div>
                    <div className="medium-6 cell">
                        <label>
                            <input name="lastname" type="text" placeholder="nom" value="${data.lastname}" />
                        </label>
                    </div>
                    <div className="medium-12 cell no-padding">
                        <label>
                            <textarea name="bio" placeholder="biographie">${data.bio}</textarea>
                        </label>
                    </div>
                    <div className="medium-12 cell no-padding">
                        <label>
                            <input name="email" type="text" placeholder="email" value="${data.email}" />
                        </label>
                    </div>
                    <div className="medium-12 cell no-padding">
                        <label>
                            <input name="twitter" type="text" placeholder="twitter" value="${data.twitter}" />
                        </label>
                    </div>
                    <div className="medium-12 cell no-padding">
                        <label>
                            <input name="github" type="text" placeholder="github" value="${data.github}" />
                        </label>
                    </div>
                    <div className="medium-12 cell no-padding">
                        <label>
                            <input name="website" type="text" placeholder="site web" value="${data.website}" />
                        </label>
                    </div>
                </div>
            </form>
        `

        document.addEventListener('keyup', e =>{
            if(['input', 'textarea'].some(el => el === e.target.nodeName.toLowerCase())){
                let data = JSON.parse(sessionStorage.getItem('data')),
                    id = parseInt(e.target.closest('form').querySelector('input[name=id').value, 10),
                    output = data.map(row => {
                        if(row.id === id){
                            let newRow = {...row}
                            newRow[e.target.name] = e.target.value
                            return newRow
                        }
                        return row
                    })
                sessionStorage.setItem('data', JSON.stringify(output))
                this.closest('.container').querySelector('custom-nav').id = id
                this.closest('.container').querySelector('custom-card').id = id
            }
        })
    }

    attributeChangedCallback(){
        this.init()
        this.render()
    }
}

class App extends HTMLElement{
    constructor(){
        super()
        this._data = [
            {
                "id": 1,
                "firstname": "Michael",
                "lastname": "Richards",
                "bio": "Ruby/JavaScript developer. Author of Rivets.js.",
                "email": "mike22e@gmail.com",
                "twitter": "https://twitter.com/mikeric",
                "github": "http://github.com/mikeric",
                "avatar": "http://www.gravatar.com/avatar/f63d8d358f4607f9a0db97a5f29531c3",
                "website": ""
            },
            {
                "id": 2,
                "firstname": "Mark",
                "lastname": "Johnson",
                "bio": "Web designer, developer and teacher. Co-founder of Pathwright",
                "email": "wmdmark@gmail.com",
                "twitter": "http://twitter.com/wmdmark",
                "github": "http://github.com/wmdmark",
                "avatar": "http://www.gravatar.com/avatar/27e72a38d4b7d335384a29fb14b5f4a9",
                "website": "http://pathwright.com"
            },
            {
                "id": 3,
                "firstname": "Mason",
                "lastname": "Stewart",
                "bio": "Frontender, JavaScripter, & Lisper",
                "email": "mason@theironyard.com",
                "twitter": "http://twitter.com/masondesu",
                "github": "https://github.com/masondesu",
                "avatar": "http://www.gravatar.com/avatar/fac5a8adc3b80c42932b1aafa3d794b5",
                "website": ""
            }
        ]
        this._index = 1
        sessionStorage.setItem('data', JSON.stringify(this._data))
        this.render()
    }

    render(){
        this.innerHTML = `
            <div class="container">
                <custom-nav id="${this._index}"></custom-nav>
                <custom-card id="${this._index}"></custom-card>
                <custom-form id="${this._index}"></custom-form>
            </div>
        `
    }
}

customElements.define('custom-tab', App)
customElements.define('custom-nav', Nav)
customElements.define('custom-card', Card)
customElements.define('custom-form', Form)
