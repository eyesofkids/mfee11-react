// 透過props傳入參數得到父母元件傳來的屬性值
function HelloWorld(props) {
  return (
    <h1>
      {props.name}, {props.text}
    </h1>
  )
}

export default HelloWorld
