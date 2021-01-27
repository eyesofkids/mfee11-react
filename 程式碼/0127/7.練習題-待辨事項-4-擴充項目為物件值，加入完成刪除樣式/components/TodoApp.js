import { useState } from 'react'

function TodoApp() {
  const [todo, setTodo] = useState('')

  // 將每個事項改為物件值
  // {id:number, text:string, completed:bool}
  const [todos, setTodos] = useState([
    { id: 1, text: '逛唐吉軻德買東西', completed: false },
    { id: 1, text: '買iPhone 12 Pro Max', completed: true },
    { id: 1, text: '在家檢疫14天', completed: false },
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
            const newTodoItem = {
              id: +new Date(),
              text: e.target.value,
              completed: false,
            }

            // 先作陣列unshift，向前面加入一個新的成員
            const newTodos = [newTodoItem, ...todos]

            // 設定todos(待辨事項清單)
            setTodos(newTodos)

            // 清空輸入文字
            setTodo('')
          }
        }}
      />
      <ul>
        {/* 從陣列值中map出來，記得加上key值 */}
        {todos.map((item, index) => {
          if (item.completed) {
            return (
              <li key={item.id}>
                <del>{item.text}</del>
              </li>
            )
          }

          return <li key={item.id}>{item.text}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
