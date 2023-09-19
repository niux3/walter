import { useState } from 'react'
import Nav from './Nav.jsx'
import Card from './Card.jsx'
import Form from './Form.jsx'

function App() {
  const [data, setData] = useState([
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
  ])
  let [index, setIndex] = useState(1)

  let onClick = e => setIndex(parseInt(e.target.dataset.id, 10))
  let onChange = e =>{
    setData(
      data.map(row => {
        if(row.id === parseInt(e.target.closest('form').querySelector('input[name=id').value, 10)){
          let newRow = {...row}
          newRow[e.target.name] = e.target.value
          return newRow
        }
        return row
      })
    )
  }

  return (
    <div className="container">
      <Nav data={data} onClick={onClick} />
      <Card data={data.find(r => r.id === index)} />
      <Form data={data.find(r => r.id === index)} onChange={onChange} />
    </div>
  )
}

export default App
