// 全部改用常數宣告的動作類型
import { ADD_VALUE, SUB_VALUE } from './actionTypes'

// 寫出動作建立器(函式)
export const addValue = () => {
  return { type: ADD_VALUE }
}

export const subValue = () => {
  return { type: SUB_VALUE }
}
