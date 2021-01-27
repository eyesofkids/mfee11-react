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
      {/* React可控表單元件：值對應到狀態，onChange對應到設定狀態 */}
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}
      />
      <ul>
        {/* 從陣列值中map出來，記得加上key值 */}
        {todos.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
