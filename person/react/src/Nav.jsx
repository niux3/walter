let Nav = ({data, onClick})=>{
    return (
        <div className="expanded button-group">
            {
                data.map(row =>(
                    <button key={row.id} onClick={onClick} className="button" data-id={row.id}>{row.firstname}</button>
                ))
            }
        </div>
    )
}

export default Nav