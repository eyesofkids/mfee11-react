function ChildOne(props) {
  const innerData = 'ChildOne子女元件內部資料'

  return (
    <button
      onClick={() => {
        props.setData(innerData)
      }}
    >
      送資料給ChildTwo元件
    </button>
  )
}

export default ChildOne
