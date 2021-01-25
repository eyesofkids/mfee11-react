import { useState } from 'react'
import { countries, townships, postcodes } from '../data/townships'

function ZipCode() {
  console.log(countries, townships, postcodes)
  // 記錄陣列的索引值
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)

  return (
    <>
      <select
        value={country}
        onChange={(e) => {
          setCountry(+e.target.value)
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
      <h3>
        郵遞區號:
        {country > -1 && township > -1 && postcodes[country][township]}
      </h3>
    </>
  )
}

export default ZipCode
