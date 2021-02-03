import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

// 第一步：匯入createStore, combineReducers
import { createStore, combineReducers } from 'redux'

// 
import { Provider } from 'react-redux'

// 第二步：寫出reducer
// 累加器/歸納器寫法
//action = {type :'increment'}
function counter(state = { count: 999 }, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

//action = {type :'ADD_TODO', text: text}
//ex. state = ['買牛奶', '學Redux']
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.text, ...state]
    case 'DEL_TODO':
      return state.filter((v) => v !== action.text)
    default:
      return state
  }
}

// action types: ADD_ITEM, DEL_ITEM, UPDATE_ITEM, RESET_ITEM
function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [{ id: 1, name: 'iphone 12 pro max', price: 45000, amount: 1 }]
    case 'DEL_ITEM':
      return []
    default:
      return state
  }
}

// 第二之一：合併reducer
const rootReducer = combineReducers({
  counter,
  todos,
  cart,
})

// 第三步：由rootReducer建立store
const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
