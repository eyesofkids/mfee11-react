import { useState } from 'react'

import TodoAddForm from './TodoAddForm'
import TodoList from './TodoList'

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

  const handleAddNew = (e) => {
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
  }
  const handleDelete = (id) => {
    // 得到一個新陣列，其中"不包含"要被移除的項目id
    const newTodos = todos.filter((item) => item.id !== id)

    // 用for迴圈的寫法
    // const newTodos = []
    // for (let i = 0; i < todos.length; i++) {
    //   if (todos[i].id === id) continue
    //   newTodos.push(todos[i])
    // }

    // 設定todos(待辨事項清單)
    setTodos(newTodos)
  }

  return (
    <>
      <h1>待辨事項</h1>
      <TodoAddForm todo={todo} setTodo={setTodo} handleAddNew={handleAddNew} />
      <TodoList
        todos={todos}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default TodoApp
