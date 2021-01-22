// 透過props傳入參數得到父母元件傳來的屬性值
function HelloWorld(props) {
  // 解構賦值
  const { name, text } = props

  return (
    <h1>
      {name}, {text}
    </h1>
  )
}

export default HelloWorld
