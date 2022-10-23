import ToDoCreate from './ToDoCreate.jsx'
import ToDoStatus from './ToDoStatus.jsx'
import ToDoList from './ToDoList.jsx'

import { useState } from 'react'
import './style/todo.css'

export default function ToDo() {
  const [ toDos, setToDos ] = useState([])

  return (
    <>
      <ToDoCreate toDos={toDos} setToDos={setToDos}/>
      <ToDoStatus toDos={toDos}/>
      <ToDoList toDos={toDos} setToDos={setToDos}/>
    </>
  )
}