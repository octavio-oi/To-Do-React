import './style/todoList.css'

export default function ToDoList({ toDos, setToDos }) {
	const removeToDo = (e) => {
    const targetToDoID = e.target.parentElement.parentElement.dataset.id

    setToDos(toDos.filter(toDo => toDo.id != targetToDoID))
  }

  const checkToDo = (e) => {
    const targetToDoID = e.target.parentElement.parentElement.dataset.id

    setToDos(toDos.map(toDo => ({
      ...toDo,
      isCheck: (toDo.id === targetToDoID) ? !toDo.isCheck : toDo.isCheck
    })).sort((a, b) => a.isCheck - b.isCheck))
  }
	
	if (toDos[0] === undefined) {
		return <p className="todo-list-empty">Sem Tarefas! ✨</p>
	}
	
	return (
		<ul className="todo-list-container">
			{toDos.map(toDo => (
				<li className="todo-list-item" key={toDo.id} data-id={toDo.id}>
					<div className="todo-list-item-container">
						<input className="todo-list-item-checkbox" type="checkbox" defaultChecked={toDo.isCheck} onChange={checkToDo}/>
						<span className="todo-list-item-text">{toDo.text}</span>
						<input className="todo-list-item-button" type="button" value="remove" onClick={removeToDo}/>
					</div>
				</li>
			))}
		</ul>
	)
}