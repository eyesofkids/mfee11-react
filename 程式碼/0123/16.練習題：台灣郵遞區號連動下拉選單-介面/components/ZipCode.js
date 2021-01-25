import { useState } from 'react'
import { countries, townships, postcodes } from '../data/townships'

function ZipCode() {
  console.log(countries, townships, postcodes)
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)

  return (
    <>
      <select>
        <option>選擇縣市</option>
      </select>
      <select>
        <option>選擇區域</option>
      </select>
      <h3>郵遞區號</h3>
    </>
  )
}

export default ZipCode
