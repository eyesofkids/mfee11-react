import TodoItem from './TodoItem'

function TodoList(props) {
  // 解構
  const { todos, handleCompleted, handleDelete } = props

  return (
    <>
      <ul>
        {/* 從陣列值中map出來，記得加上key值 */}
        {/* 注意key值要在TodoItem中寫，而非到裡面的li元素中寫才是正確的 */}
        {/* 判斷依照不同的completed值作不同的呈現樣子 */}
        {todos.map((item, index) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
