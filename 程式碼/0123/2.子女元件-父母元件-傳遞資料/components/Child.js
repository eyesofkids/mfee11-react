function Child(props) {
  const innerData = '子女元件內部資料'

  return (
    <button
      onClick={() => {
        // 利用props得到的設定資料函式來設定資料給父母元件
        props.setData(innerData)
      }}
    >
      送資料給父母元件
    </button>
  )
}

export default Child
