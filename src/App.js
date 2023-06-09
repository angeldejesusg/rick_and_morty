import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Card from './components/card/Card'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav.jsx'

function App () {

  const[characters, setCharacters] = useState([])

  function searchHandler(id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        const data = response.data;
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud:', error);
      });
  }


 const onClose = (id) =>{
    const filtered = characters.filter((char)=>char.id !== Number(id))

    setCharacters(filtered)
  }

return (
  
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Card
          
        />
      </div>
      <hr />
      <div>
        <Cards
          characters ={characters} onclose={onClose}
        />
      </div>
      <hr />
      <div>
        <Nav onSearch={searchHandler}/>
      </div>
    </div>
  )
  


}

export default App
