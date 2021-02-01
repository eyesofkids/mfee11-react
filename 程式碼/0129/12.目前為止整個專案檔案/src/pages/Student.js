import { data } from '../data/'
import { useState, useEffect } from 'react'

function Student(props) {
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 先開起載入指示器
    setIsLoading(true)

    // 模擬和伺服器要資料
    // 最後設定到狀態中
    setStudents(data)

    // 3秒後關閉指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const spinner = (
    <>
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  )

  const display = (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">座號</th>
            <th scope="col">姓名</th>
            <th scope="col">出生年月日</th>
          </tr>
        </thead>
        <tbody>
          {students.map((v, i) => (
            <tr key={i}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.birth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )

  return (
    <>
      <h1>學生資料</h1>
      {isLoading ? spinner : display}
    </>
  )
}

export default Student
