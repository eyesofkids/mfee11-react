import { withRouter } from 'react-router-dom'

function ProductMen(props) {
  console.log(props)

  // 使用URLSearchParams api來解析查詢字串
  // props.location.search是目前有後面查詢字串的值
  let searchParams = new URLSearchParams(props.location.search)

  return (
    <>
      <h1>ProductMen</h1>
      {/*  */}
      <h3>網址上查詢字串(Query String): </h3>
      <h5>i_code: {searchParams.get('i_code')}</h5>
      <h5>str_category_code: {searchParams.get('str_category_code')}</h5>
    </>
  )
}

// 高階元件樣式，以此才能得到props中綁字router給的三個屬性值
export default withRouter(ProductMen)
