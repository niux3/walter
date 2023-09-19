import '../scss/index.scss';
import Nav from './components/Nav.js'
import Card from './components/Card.js'
import Form from './components/Form.js'


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
