import { useState } from 'react'

function TodoApp() {
  const [todo, setTodo] = useState('')
  
  const [todos, setTodos] = useState([
    '逛唐吉軻德買東西',
    '買iPhone 12 Pro Max',
    '在家檢疫14天',
  ])

  return (
    <>
      <h1>待辨事項</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}
      />
      <ul>
        {todos.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
