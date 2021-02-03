// 全部改用常數宣告的動作類型
import { ADD_VALUE, SUB_VALUE, INIT_VALUE } from './actionTypes'

// 寫出動作建立器(函式)
// 擴充可以依value作增或減

// 初始化動作物件建立器
export const initValue = (value) => {
  return { type: INIT_VALUE, value }
}

// 從伺服器一開始要載入資料用
export const initValueAsync = (value) => {
  return async (dispatch) => {
    const url = 'http://localhost:8888/count/1'

    const response = await fetch(url, { method: 'GET' })
    const data = await response.json()

    console.log(data)

    // 得到資料後發送初始化動作
    dispatch(initValue(data.total))
  }
}

export const addValue = (value) => {
  return { type: ADD_VALUE, value }
}

// 異步-3秒後會加值
export const addValueAsync = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addValue(value))
    }, 3000)
  }
}

export const subValue = (value) => {
  return { type: SUB_VALUE, value }
}
