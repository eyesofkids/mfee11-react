import PropTypes from 'prop-types'

// 透過props傳入參數得到父母元件傳來的屬性值
function HelloWorld(props) {
  console.log(props)
  // 解構賦值
  const { name, text, clickMethod } = props

  return (
    <>
      <h1 onClick={clickMethod}>
        {name}, {text}
      </h1>
      <h2>h2</h2>
      <h3>h3</h3>
    </>
  )
}

// 預設屬性(沒給或給undefined)
HelloWorld.defaultProps = {
  name: 'Bob',
  text: 'Hello',
}

// 檢查props的類型
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickMethod: PropTypes.func,
}

export default HelloWorld
