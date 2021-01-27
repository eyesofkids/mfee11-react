import { useState } from 'react'

function TodoItemEditForm(props) {
  // 解構
  const { item } = props

  const [editText, setEditText] = useState(item.text)

  return (
    <>
      <li>
        <input
          type="text"
          value={editText}
          onChange={(e) => {
            setEditText(e.target.value)
          }}
        />
        <button>儲存</button>
      </li>
    </>
  )
}

export default TodoItemEditForm
