import { data } from '../data/'
import { useState, useEffect } from 'react'

function Student(props) {
  // 模擬和伺服器要的資料，目前所有要呈現的
  const [students, setStudents] = useState([])

  // 經過搜尋、排序、過濾後要呈現的資料
  const [studentsDisplay, setStudentsDisplay] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  // 輸入用的文字輸入狀態
  const [searchInput, setSearchInput] = useState('')

  // 模擬componentDidMout
  useEffect(() => {
    // 先開起載入指示器
    setIsLoading(true)

    // 模擬和伺服器要資料

    // 最後設定到狀態中
    setStudents(data)
    setStudentsDisplay(data)

    // 3秒後關閉指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  // 模擬componentDidMout + componentDidUpdate
  useEffect(() => {
    // 有空白時不處理(初次預設值也不處理)
    if (searchInput.trim() === '') return

    // 先開起載入指示器
    setIsLoading(true)
    const newStudents = students.filter((v, i) => {
      return v.name.includes(searchInput)
    })

    setStudentsDisplay(newStudents)

    // 3秒後關閉指示器
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [searchInput])

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
          {studentsDisplay.map((v, i) => (
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
      以姓名搜尋：
      <input
        type="text"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value)
        }}
      />
      <hr />
      {isLoading ? spinner : display}
    </>
  )
}

export default Student
