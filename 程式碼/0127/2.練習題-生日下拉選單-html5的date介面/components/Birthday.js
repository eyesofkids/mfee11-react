import { useEffect, useState } from 'react'

function Birthday() {
  const [birth, setBirth] = useState('2021-01-27')

  return (
    <>
      <label for="birth">出生年月日:</label>
      <input
        type="date"
        id="birth"
        name="birth"
        value={birth}
        onChange={(e) => {
          setBirth(e.target.value)
        }}
        min="1920-01-01"
        max="2021-01-01"
      />
      <button onClick={() => {}}>送出</button>
    </>
  )
}

export default Birthday
