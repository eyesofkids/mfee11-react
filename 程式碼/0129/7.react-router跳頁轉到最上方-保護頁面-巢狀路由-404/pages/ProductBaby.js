import { withRouter } from 'react-router-dom'

function ProductBaby(props) {
  console.log(props)
  return (
    <>
      <h1>ProductBaby</h1>
      {/* 可以由match物件中的params得到網址上定義的參數屬性名 */}
      <h3>網址上參數(URL Params): {props.match.params.id}</h3>
    </>
  )
}

// 高階元件樣式，以此才能得到props中綁字router給的三個屬性值
export default withRouter(ProductBaby)
