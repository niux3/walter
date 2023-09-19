export default class Form extends HTMLElement{
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

