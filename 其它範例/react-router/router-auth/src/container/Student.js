import React from 'react'
import { data } from '../data/data'

const Student = props => {
  // 注意使用props.match.params.id來抓取參數
  // props.match.params.id的資料類型必定是字串
  // find方法沒找到會回傳undefined
  const studentData = data.find(item => item.id === +props.match.params.id)

  if (!props.isAuth) return <h5>你需要先登入才能看到資料</h5>

  return (
    <>
      <h1>學生資料頁面</h1>
      {studentData.id ? (
        <>
          <h5>
            學號：
            {studentData.id}
          </h5>
          <h5>
            姓名：
            {studentData.name}
          </h5>
          <h5>
            出生年月日：
            {studentData.birth}
          </h5>
        </>
      ) : (
        <>
          <h5>沒找到資料</h5>
        </>
      )}
    </>
  )
}
export default Student
