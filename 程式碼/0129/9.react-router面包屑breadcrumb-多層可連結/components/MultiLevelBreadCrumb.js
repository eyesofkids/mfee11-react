import React from 'react'

// 高階元件樣式(HOC)，增強元件用的
import { withRouter, Link } from 'react-router-dom'

function MultiLevelBreadCrumb(props) {
  const { location } = props

  const pathnameList = [
    '/about',
    '/login',
    '/product',
    '/product/baby',
    '/product/baby/birth',
    '/product/men',
    '/product/women',
    '/productcategory',
    '/productcategory/pc',
    '/productcategory/mobile',
    '/productcategory/notebook',
  ]

  const pathnameTextList = [
    '/關於我們',
    '/會員登入',
    '/產品',
    '/產品/嬰兒',
    '/產品/嬰兒/初生兒',
    '/產品/男性',
    '/產品/女性',
    '/產品分類',
    '/產品分類/電腦PC',
    '/產品分類/手機',
    '/產品分類/筆記型電腦',
  ]

  // find index
  const findPathnameIndex = (pathname) =>
    pathnameList.findIndex((v, i) => v === pathname)

  // 有一個項目和二個項目的情況
  const formatText = (index) => {
    if (index === -1) return ''

    // '/產品/嬰兒/初生兒' -> ['','產品','嬰兒', '初生兒']
    const textArray = pathnameTextList[index].split('/')

    // '/product/baby/birth' -> ['','product','baby', 'birth']
    const pathArray = pathnameList[index].split('/')

    const listArray = textArray.map((v, i, array) => {
      if (i === 0) return ''

      if (i === array.length - 1) {
        return (
          <li className="breadcrumb-item active" aria-current="page">
            {v}
          </li>
        )
      }

      return (
        <li className="breadcrumb-item">
          <Link to={pathArray.slice(0, i + 1).join('/')}>{v}</Link>
        </li>
      )
    })

    return listArray
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">首頁</Link>
          </li>
          {formatText(findPathnameIndex(location.pathname))}
        </ol>
      </nav>
    </>
  )
}

export default withRouter(MultiLevelBreadCrumb)
