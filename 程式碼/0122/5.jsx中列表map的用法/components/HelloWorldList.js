// 透過props傳入參數得到父母元件傳來的屬性值
function HelloWorldList(props) {
  console.log(props)
  // 解構賦值
  // names是陣列值
  const { names } = props

  return (
    <>
      <ul>
        {/* 有用map記得加key值在最接近子元素中 */}
        {names.map((name, index) => {
          return <li key={index}>{name}，你好</li>
        })}
      </ul>
    </>
  )
}

export default HelloWorldList
