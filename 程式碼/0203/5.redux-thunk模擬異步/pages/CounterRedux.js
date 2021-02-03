// import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// 改用動作建立器導入作部份綁定
import { addValue, subValue, addValueAsync } from '../actions/'

function CounterRedux(props) {
  //const [total, setTotal] = useState(0)

  //觀察props裡的得到的store對應和方法
  console.log(props)

  return (
    <>
      <h1>{props.total}</h1>
      <button
        onClick={() => {
          //props.dispatch({ type: ADD_VALUE, value: 1 })
          //改用動作建立器直接給值，綁定器會協助送出動作物件
          props.addValue(1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          //props.dispatch({ type: ADD_VALUE, value: 1 })
          //改用動作建立器直接給值，綁定器會協助送出動作物件
          props.addValueAsync(1)
        }}
      >
        +1(3秒後-模擬異步)
      </button>
      <button
        onClick={() => {
          // props.dispatch({ type: SUB_VALUE, value: 1 })
          // //改用動作建立器直接給值，綁定器會協助送出動作物件
          props.subValue(1)
        }}
      >
        -1
      </button>

      <button
        onClick={() => {
          //改用動作建立器直接給值，綁定器會協助送出動作物件
          props.addValue(5)
        }}
      >
        +5
      </button>
      <button
        onClick={() => {
          //改用動作建立器直接給值，綁定器會協助送出動作物件
          props.subValue(30)
        }}
      >
        -30
      </button>
    </>
  )
}

// 將redux中的store的state(狀態)
// 對應到這個元件中的props中，名稱為total
const mapStateToProps = (store) => {
  return { total: store.counter.count }
}

// 直接寫或先產生物件值，使用動作建立器接到這個元件的props
// const mapDispatchToProps = { addValue, subValue, addValueAsync }

// 高階元件的樣式，必要的
export default connect(mapStateToProps, { addValue, subValue, addValueAsync })(
  CounterRedux
)
