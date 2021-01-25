import { useState } from 'react'
import { countries, townships, postcodes } from '../data/townships'

function ZipCode() {
  console.log(countries, townships, postcodes)
  // 記錄陣列的索引值，預設值是-1，相當於"請選擇xxx"
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)

  return (
    <>
      <select
        value={country}
        onChange={(e) => {
          // 將字串轉成數字
          setCountry(+e.target.value)
          // 重置township的值
          setTownship(-1)
        }}
      >
        <option value="-1">選擇縣市</option>
        {countries.map((value, index) => (
          <option key={index} value={index}>
            {value}
          </option>
        ))}
      </select>
      <select
        value={township}
        onChange={(e) => {
          // 將字串轉成數字
          setTownship(+e.target.value)
        }}
      >
        <option value="-1">選擇區域</option>
        {country > -1 &&
          townships[country].map((value, index) => (
            <option key={index} value={index}>
              {value}
            </option>
          ))}
      </select>
      {/* 如果country與township的索引值均大於-1時(也就是都有選的情況下)，呈現postcode */}
      {/* `條件 && 呈現` 是 `if(條件){呈現}` 的簡寫法，只在React JSX中可以使用 */}
      <h3>
        郵遞區號:
        {country > -1 && township > -1 && postcodes[country][township]}
      </h3>
    </>
  )
}

export default ZipCode
