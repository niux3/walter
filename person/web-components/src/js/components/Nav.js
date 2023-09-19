export default class Nav extends HTMLElement{
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

