import { useState } from 'react'

function FormFields() {
  const [textfield, setTextfield] = useState('')
  const [textarea, setTextarea] = useState('')
  const [seletedOption, setSeletedOption] = useState('')
  const [gender, setGender] = useState('')
  const [like, setLike] = useState({ optionA: false, optionB: false })

  return (
    <>
      <h3>文字輸入框</h3>
      <input
        type="text"
        value={textfield}
        onChange={(e) => {
          setTextfield(e.target.value)
        }}
      />
      <hr />
      <h3>文字區域</h3>
      {/* React中的文字區域是單個元素標記的 */}
      <textarea
        value={textarea}
        onChange={(e) => {
          setTextarea(e.target.value)
        }}
      />
      <hr />
      <h3>下拉選單</h3>
      <select
        value={seletedOption}
        onChange={(e) => {
          setSeletedOption(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        <option value="雞腿">雞腿</option>
        <option value="魯肉">魯肉</option>
        <option value="排骨">排骨</option>
        <option value="水果">水果</option>
      </select>
      <hr />
      <h3>單選盒</h3>
      <label>男</label>
      <input
        type="radio"
        value="男"
        checked={gender === '男'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <label>女</label>
      <input
        type="radio"
        value="女"
        checked={gender === '女'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <label>未定</label>
      <input
        type="radio"
        value="未定"
        checked={gender === '未定'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <hr />
      <h3>勾選盒</h3>
      <label>雞腿</label>
      <input
        type="checkbox"
        value="optionA"
        onChange={(e) => {
          const key = e.target.value
          setLike({
            ...like,
            [key]: !like[key],
          })
        }}
        checked={like.optionA}
      />
      <label>排骨</label>
      <input
        type="checkbox"
        value="optionB"
        onChange={(e) => {
          const key = e.target.value
          setLike({
            ...like,
            [key]: !like[key],
          })
        }}
        checked={like.optionB}
      />
    </>
  )
}

export default FormFields
