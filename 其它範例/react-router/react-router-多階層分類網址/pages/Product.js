import React from 'react'
import Banner from '../components/Banner'
import Breadcrumb from '../components/Breadcrumb'
import { withRouter } from 'react-router-dom'

function Product(props) {
  // 利用match.params來取得url params (記得App元件中的Route要先定義)
  console.log('props.match.params', props.match.params)

  return (
    <>
      <Banner pagename={props.match.params.type} />
      <h1>用URL Params</h1>
      <h3>產品類型 = {props.match.params.type}</h3>
      <h3>產品id = {props.match.params.id}</h3>
    </>
  )
}

export default withRouter(Product)
