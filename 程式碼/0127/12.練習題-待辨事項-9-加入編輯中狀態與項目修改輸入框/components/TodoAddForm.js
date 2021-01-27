import { useState } from 'react'

function TodoAddForm(props) {
  const [todo, setTodo] = useState('')

  // 解構
  const { handleAddNew } = props

  return (
    <>
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
            handleAddNew(todo)
            // 清空輸入文字
            setTodo('')
          }
        }}
      />
      <button
        onClick={() => {
          //判斷是否按下enter鍵，而且不是空白沒寫的情況(用trim去除前後空白)
          if (todo.trim()) {
            handleAddNew(todo)
            // 清空輸入文字
            setTodo('')
          }
        }}
      >
        新增
      </button>
    </>
  )
}

export default TodoAddForm
