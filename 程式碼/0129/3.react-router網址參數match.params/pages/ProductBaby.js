import { withRouter } from 'react-router-dom'

function ProductBaby(props) {
  console.log(props)
  return (
    <>
      <h1>ProductBaby</h1>
      <h3>{props.match.params.id}</h3>
    </>
  )
}

export default withRouter(ProductBaby)
