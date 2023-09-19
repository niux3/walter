import './assets/form.scss'


let Form = ({data, onChange})=>{
    return (
        <form>
            <input type="hidden" name="id" value={data.id} />
            <div className="grid-x grid-padding-x">
                <div className="medium-6 cell">
                    <label>
                        <input name="firstname" onChange={onChange} type="text" placeholder="prénom" value={data.firstname} />
                    </label>
                </div>
                <div className="medium-6 cell">
                    <label>
                        <input name="lastname" onChange={onChange} type="text" placeholder="nom" value={data.lastname} />
                    </label>
                </div>
                <div className="medium-12 cell no-padding">
                    <label>
                        <textarea name="bio" onChange={onChange} placeholder="biographie" value={data.bio}></textarea>
                    </label>
                </div>
                <div className="medium-12 cell no-padding">
                    <label>
                        <input name="email" onChange={onChange} type="text" placeholder="email" value={data.email} />
                    </label>
                </div>
                <div className="medium-12 cell no-padding">
                    <label>
                        <input name="twitter" onChange={onChange} type="text" placeholder="twitter" value={data.twitter} />
                    </label>
                </div>
                <div className="medium-12 cell no-padding">
                    <label>
                        <input name="github" onChange={onChange} type="text" placeholder="github" value={data.github} />
                    </label>
                </div>
                <div className="medium-12 cell no-padding">
                    <label>
                        <input name="website" onChange={onChange} type="text" placeholder="site web" value={data.website} />
                    </label>
                </div>
            </div>
        </form>
    )
}

export default Form