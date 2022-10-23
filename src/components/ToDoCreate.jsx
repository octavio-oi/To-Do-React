import { useRef } from "react"
import './style/todoCreate.css'

export default function ToDoCreate({ toDos, setToDos }) {
  const inputRef = useRef(null)

  const addToDo = () => {
    const input = inputRef.current

    if (input?.value != "") {
      setToDos([...toDos, {
        id: Math.random().toString(),
        text: input.value,
        isCheck: false
      }])

      input.value = ""
    }
  }

  return (
    <div className="todo-create-container">
      <input className="todo-create-input" type="text" placeholder="Tasks" ref={inputRef}/>
      <input className="todo-create-button" type="button" value="Criar" onClick={addToDo}/>
    </div>
  )
}