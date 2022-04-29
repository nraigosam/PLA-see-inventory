import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const api = 'https://back-pla.herokuapp.com/api/v1/Inventory?page=1&size=10'
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(api)
    const json = await response.json()
    setTodos(json)
  }

  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <div className="App">
      <div className="App-header">
        <h1>Inventario</h1>
      </div>
      <table id="customers">
        <thead>
          <tr className='header'>
            <th>Type</th>
            <th>Amount</th>
            <th>Ware House</th>
          </tr>
        </thead>
        <tbody>
          {!todos ? <tr>
            <td>cargando...</td>
          </tr> :
            todos.map((todo, index) => {
              return (

                <tr key={index}>
                  <td>{todo.type}</td>
                  <td>{todo.amount}</td>
                  <td>{todo.warehouse}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
