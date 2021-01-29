import React from 'react'

import { pathnameList, pathnameTextList } from '../config'

// 高階元件樣式(HOC)，增強元件用的
import { withRouter, Link } from 'react-router-dom'

function MyBreadCrumb(props) {
  const { location } = props

  // 轉換pathname路徑為文字
  // 回傳陣列(如果有像 `產品/嬰兒`)
  // const convertPathname2Text = (pathname) => {
  //   const index = pathnameList.findIndex(
  //     (v, i) => v === pathname
  //   )

  //   return index > -1
  //     ? pathnameTextList[index].split('/')
  //     : ''
  // }

  // find index
  const findPathnameIndex = (pathname) =>
    pathnameList.findIndex((v, i) => v === pathname)

  // 有一個項目和二個項目的情況
  const formatText = (index) => {
    // '/產品/嬰兒/初生兒' -> ['','產品','嬰兒', '初生兒']
    const textArray = pathnameTextList[index].split('/')

    // '/product/baby/birth' -> ['','product','baby', 'birth']
    const pathArray = pathnameList[index].split('/')

    const listArray = textArray.map((v, i, array) => {
      if (i === 0) return ''

      if (i === array.length - 1) {
        return (
          <li
            className="breadcrumb-item active"
            aria-current="page"
          >
            {v}
          </li>
        )
      }

      return (
        <li className="breadcrumb-item">
          <Link to={pathArray.slice(0, i + 1).join('/')}>
            {v}
          </Link>
        </li>
      )
    })

    return listArray

    // return textArray.length > 1 ? (
    //   <>
    //     <li className="breadcrumb-item">{textArray[0]}</li>
    //     <li
    //       className="breadcrumb-item active"
    //       aria-current="page"
    //     >
    //       {textArray[1]}
    //     </li>
    //   </>
    // ) : (
    //   <>
    //     <li
    //       className="breadcrumb-item active"
    //       aria-current="page"
    //     >
    //       {textArray[0]}
    //     </li>
    //   </>
    //)
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

export default withRouter(MyBreadCrumb)
