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
        onKeyPress={(e) => {
          //判斷是否按下enter鍵，而且不是空白沒寫的情況(用trim去除前後空白)
          if (e.key === 'Enter' && e.target.value.trim()) {
            // 先作陣列unshift，向前面加入一個新的成員
            const newTodos = [e.target.value, ...todos]

            // 設定todos(待辨事項清單)
            setTodos(newTodos)

            // 清空輸入文字
            setTodo('')
          }
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
