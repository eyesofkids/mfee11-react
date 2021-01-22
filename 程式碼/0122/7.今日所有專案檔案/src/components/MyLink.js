// 透過props傳入參數得到父母元件傳來的屬性值
function MyLink(props) {
  console.log(props)
  return (
    <a href={props.href} target="_blank" style={{ color: 'red' }}>
      {props.children}
    </a>
  )
}

export default MyLink
