function TodoItem(props) {
  const { item, handleCompleted, handleDelete } = props
  return (
    <>
      <li >
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            handleCompleted(item.id)
          }}
        />
        {/* 用三元表達式改寫，簡化語法 */}
        {item.completed ? <del>{item.text}</del> : item.text}
        <button
          onClick={() => {
            handleDelete(item.id)
          }}
        >
          刪除
        </button>
      </li>
    </>
  )
}

export default TodoItem
