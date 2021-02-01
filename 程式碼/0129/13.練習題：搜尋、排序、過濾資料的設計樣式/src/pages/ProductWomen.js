import { withRouter } from 'react-router-dom'

function ProductWomen(props) {
  console.log(props)

  return (
    <>
      <h1>ProductWomen</h1>
      {/*  */}
      <h3>history.push </h3>
      <button
        onClick={() => {
          props.history.push('/')
        }}
      >
        到 首頁
      </button>
      <button
        onClick={() => {
          props.history.push('/about')
        }}
      >
        到 關於我們
      </button>
      <h3>history.goBack </h3>
      <button
        onClick={() => {
          props.history.goBack()
        }}
      >
        回上一頁
      </button>
    </>
  )
}

// 高階元件樣式，以此才能得到props中綁字router給的三個屬性值
export default withRouter(ProductWomen)
