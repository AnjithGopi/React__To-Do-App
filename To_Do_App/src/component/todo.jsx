
import  { useState } from 'react'
import './todo.css'

function Todo() {
  const [input, setInput]= useState('')
  const [items, setItems]= useState([])

  const handleChange= (event) => {
    setInput(event.target.value)
  }

  const storeItems= (event) => {
    event.preventDefault()
    setItems([...items, input])
    setInput('')
  }

  const deleteItem= (index) => {
    const allItems= items.slice() 
    allItems.splice(index, 1)
    setItems(allItems)
  }

  const deleteAll=()=>{

    setItems([])

  }

  return (
    <div className='todo_container'>
      <h1>To do List</h1>

      <form action="submit" onSubmit={storeItems}>
        <div className='inputSection'>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder='Enter items'
          />
        </div>

        
      </form>

      <div>
      <button onClick={deleteAll}>delete</button>
      </div>

      <ul>
        {items.map((data, index) => (
          <li key={index}>
            {data}
            <i className="fas fa-trash" onClick={()=> deleteItem(index)}></i>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo

