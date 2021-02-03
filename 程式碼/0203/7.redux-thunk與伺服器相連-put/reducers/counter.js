import { ADD_VALUE, SUB_VALUE, INIT_VALUE } from '../actions/actionTypes'

//action = {type :ADD_VALUE, value:value}
export default function counter(state = { count: 100 }, action) {
  switch (action.type) {
    case ADD_VALUE:
      return { count: state.count + action.value }
    case SUB_VALUE:
      return { count: state.count - action.value }
    case INIT_VALUE:
      return { count: action.value }
    default:
      return state
  }
}
