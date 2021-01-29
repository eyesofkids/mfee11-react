import React from 'react'
import Banner from '../components/Banner'
import { withRouter } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

function About(props) {
  console.log(props)

  return (
    <>
      <Banner pagename="關於我們" />
      <Breadcrumb />
    </>
  )
}

export default withRouter(About)
