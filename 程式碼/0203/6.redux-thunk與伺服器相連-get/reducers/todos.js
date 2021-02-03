//action = {type :'ADD_TODO', text: text}
//ex. state = ['買牛奶', '學Redux']
export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.text, ...state]
    case 'DEL_TODO':
      return state.filter((v) => v !== action.text)
    default:
      return state
  }
}
