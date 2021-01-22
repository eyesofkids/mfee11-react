// 透過props傳入參數得到父母元件傳來的屬性值
function HelloWorldList(props) {
  console.log(props)
  // 解構賦值
  // names是陣列值
  const { names } = props

  return (
    <>
      {/* 陣列直接輸出成為array.join('') */}
      {names}
      {/* {[<h2>123</h2>, <button>按我</button>, <a href="123.com">goo</a>]} */}

      <ul>
        {/* 有用map記得加key值在最接近子元素中 */}
        {names.map((name, index) => {
          return (
            <li key={index} style={{ color: '#ff6600', fontSize: 20 }}>
              {name}，你好
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default HelloWorldList
