import React from 'react'
import { data } from '../data/data'
import { Link } from 'react-router-dom'

const StudentList = () => (
  <>
    <h1>學生列表頁面</h1>
    <div className="list-group">
      {data.map(item => (
        <Link
          key={item.id}
          className="list-group-item list-group-item-action"
          to={'/student/' + item.id}
        >
          {item.name}
        </Link>
      ))}
    </div>
  </>
)

export default StudentList
