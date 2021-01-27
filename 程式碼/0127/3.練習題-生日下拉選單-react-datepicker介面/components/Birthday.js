import { useEffect, useState } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// 改為台灣繁體中文的日期樣式
// 參考：https://github.com/Hacker0x01/react-datepicker/#localization
import { registerLocale, setDefaultLocale } from 'react-datepicker'

import { zhTW } from 'date-fns/esm/locale'

registerLocale('zh-TW', zhTW)

function Birthday() {
  //   const [birth, setBirth] = useState('2021-01-27')

  const [birthDate, setBirthDate] = useState(new Date())

  const [age, setAge] = useState(0)

  // ~~為轉為整數值
  const calcAge = (birthday) => ~~((new Date() - birthday) / 31557600000)

  // 選完日期就改變年紀
  // componentDidUpdate
  useEffect(() => {
    setAge(calcAge(birthDate))
  }, [birthDate])

  return (
    <>
      <label for="birth">出生年月日:</label>
      {/* <input
        type="date"
        id="birth"
        name="birth"
        value={birth}
        onChange={(e) => {
          setBirth(e.target.value)
        }}
        min="1920-01-01"
        max="2021-01-01"
      /> */}
      <DatePicker
        selected={birthDate}
        dateFormat="yyyy-MM-dd"
        locale="zh-TW"
        showYearDropdown
        onChange={(date) => setBirthDate(date)}
      />

      <h2>{age > 18 ? '滿18歲' : '未滿18歲'}</h2>
    </>
  )
}

export default Birthday
