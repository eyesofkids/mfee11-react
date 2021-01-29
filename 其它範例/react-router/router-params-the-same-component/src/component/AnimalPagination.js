import React from 'react'
import { Pagination } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const AnimalPagination = props => {
  // 注意props.match.params.page來自網址，是字串資料類型
  const pageNow = +props.match.params.page
  const pagePrev = pageNow - 1 ? pageNow - 1 : 1
  const pageNext = pageNow + 1 < props.pageTotal ? pageNow + 1 : props.pageTotal

  return (
    <Pagination>
      <Pagination.First onClick={() => props.history.push('/page/1')} />
      <Pagination.Prev
        onClick={() => props.history.push('/page/' + pagePrev)}
      />

      <Pagination.Item active>{props.match.params.page}</Pagination.Item>

      <Pagination.Next
        onClick={() => props.history.push('/page/' + pageNext)}
      />
      <Pagination.Last
        onClick={() => props.history.push('/page/' + props.pageTotal)}
      />
    </Pagination>
  )
}

// 函式型元件or內部元件要使用withRouter才有Router給的一些屬性和方法
export default withRouter(AnimalPagination)
