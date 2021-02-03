import { ADD_VALUE, SUB_VALUE } from '../actions/actionTypes'

//action = {type :'increment'}
export default function counter(state = { count: 999 }, action) {
  switch (action.type) {
    case ADD_VALUE:
      return { count: state.count + 1 }
    case SUB_VALUE:
      return { count: state.count - 1 }
    default:
      return state
  }
}
