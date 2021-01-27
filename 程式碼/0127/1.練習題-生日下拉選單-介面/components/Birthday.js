function Birthday() {
  return (
    <>
      <label for="birth">出生年月日:</label>
      <input
        type="date"
        id="birth"
        name="birth"
        value="2018-07-22"
        min="1920-01-01"
        max="2021-01-01"
      />
      <button onClick={() => {}}>送出</button>
    </>
  )
}

export default Birthday
