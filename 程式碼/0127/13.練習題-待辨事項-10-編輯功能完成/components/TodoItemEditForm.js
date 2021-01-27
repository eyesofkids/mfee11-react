import { useState } from 'react'

function TodoItemEditForm(props) {
  // 解構
  const { item, handleEditedSave } = props

  // 用傳入的props值中的item.text當初始值，要小心只有初始化時能用
  // 因儲存後編輯元件會消失在網頁上，所以可以這樣使用沒問題
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
        <button
          onClick={() => {
            handleEditedSave(item.id, editText)
          }}
        >
          儲存
        </button>
      </li>
    </>
  )
}

export default TodoItemEditForm
