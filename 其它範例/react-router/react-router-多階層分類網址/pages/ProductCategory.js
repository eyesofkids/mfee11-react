import React from 'react'
import Banner from '../components/Banner'
import Breadcrumb from '../components/Breadcrumb'
import { Route, withRouter, NavLink, Switch, matchPath } from 'react-router-dom'
import Product from './Product'

function ProductCategory(props) {
  // 利用match來取得url與path (記得App元件中的Route要先定義)
  console.log(props.match.pathname)

  const url = props.match.url
  const path = props.match.path
  
  // 有自己的選單與路由表
  return (
    <>
      <Banner pagename="產品分類" />
      <Breadcrumb />
	  
      <nav class="nav nav-pills">
        <NavLink activeClassName="active" className="nav-link" to={`${url}/pc`}>
          PC
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link"
          to={`${url}/mobile`}
        >
          手機
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link"
          to={`${url}/notebook`}
        >
          筆電
        </NavLink>
      </nav>

      <Switch>
        <Route exact path={path}>
          <h3>請選擇子分類</h3>
        </Route>
        <Route path={`${path}/:type?/:id?`}>
          <Product />
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(ProductCategory)
