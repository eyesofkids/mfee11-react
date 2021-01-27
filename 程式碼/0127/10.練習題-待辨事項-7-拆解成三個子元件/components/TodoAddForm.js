function TodoAddForm(props) {
  // 解構
  const { todo, setTodo, handleAddNew } = props

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
          handleAddNew(e)
        }}
      />
    </>
  )
}

export default TodoAddForm
