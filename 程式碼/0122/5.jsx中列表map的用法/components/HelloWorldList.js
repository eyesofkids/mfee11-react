// 透過props傳入參數得到父母元件傳來的屬性值
function HelloWorldList(props) {
  console.log(props)
  // 解構賦值
  const { names } = props

  return (
    <>
      <ul>
        {names.map((name, index) => {
          return <li key={index}>{name}，你好</li>
        })}
      </ul>
    </>
  )
}

export default HelloWorldList
