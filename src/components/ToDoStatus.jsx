import './style/todoStatus.css'

export default function ToDoStatus({ toDos }) {
  const toDoCheckedAmount = toDos.reduce((acc, { isCheck }) => isCheck ? acc + 1 : acc, 0)
  const toDoAmount = toDos.reduce(acc => acc + 1, 0)

  return (
    <p className="todo-status-container">
      <span className="todo-status-created">{`Trabalhos Criados: ${toDoAmount}`}</span>
      <span className="todo-status-completed">{`Trabalhos Concluidos: ${toDoAmount} de ${toDoCheckedAmount}`}</span>
    </p>
  )
}