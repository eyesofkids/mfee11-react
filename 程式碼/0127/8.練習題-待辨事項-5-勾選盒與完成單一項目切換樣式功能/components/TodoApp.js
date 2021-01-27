import { useState } from 'react'

function TodoApp() {
  const [todo, setTodo] = useState('')

  // 將每個事項改為物件值，物件定義如下
  // {id:number, text:string, completed:bool}
  const [todos, setTodos] = useState([
    { id: 1, text: '逛唐吉軻德買東西', completed: true },
    { id: 2, text: '買iPhone 12 Pro Max', completed: true },
    { id: 3, text: '在家檢疫14天', completed: false },
  ])

  // 利用id值找到對應的todo項目的索引值，然後改變其completed值
  const handleCompleted = (id) => {
    // 先拷貝一個新的陣列
    const newTodos = [...todos]

    // 利用id值找對應的todo項目的索引值
    const index = newTodos.findIndex((item) => item.id === id)

    // 如果有找到則不是-1
    if (index !== -1) {
      // 切換布林值：true變false，false變true
      newTodos[index].completed = !newTodos[index].completed

      // 設定回原本的todos
      setTodos(newTodos)
    }
  }

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
            // 建立新的todo項目物件值，用時間物件轉微秒整數當id值
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
        {/* 判斷依照不同的completed值作不同的呈現樣子 */}
        {todos.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => {
                  handleCompleted(item.id)
                }}
              />
              {/* 用三元表達式改寫 */}
              {item.completed ? <del>{item.text}</del> : item.text}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
