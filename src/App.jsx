import React, { useReducer, useRef, useState } from 'react'
import './App.css'

export default function App() {
const [todos,setToDos] = useState([])
const inputRef = useRef()
const handleToDo = () => {
    const text = inputRef.current.value;
    const newItem = {complated: false, text};
    setToDos([...todos, newItem]);
    inputRef.current.value = '';
}

const handleItemDone = (index) => {
    const newToDos = [...todos]
    newToDos[index].complated = !newToDos[index].complated
    setToDos(newToDos)
}

const handleDeleteItem = (index) => {
    const newToDos = [...todos]
    newToDos.splice(index,1)
    setToDos(newToDos)
}
// console.log(todos);
  return (
    <div className='App'>
        <h2>todo-list</h2>
        <div className="todo-container">
        <ul>
            {
                todos.map(({text, complated},index) => {
                    return <div className='item'> 
                    <li className={complated? 'done':''} key={index} onClick={()=> handleItemDone(index)} >{text}</li>
                    <span onClick={()=> handleDeleteItem(index)} className='trash'>❌</span>
                    </div>
                })
            }
        </ul>
        <input ref={inputRef} placeholder='Enter task...' />
        <button onClick={handleToDo} >Add</button>

        </div>
        
    </div>
  )
}
