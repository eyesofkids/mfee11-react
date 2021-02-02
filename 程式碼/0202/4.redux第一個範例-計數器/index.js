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

// 第二之一：合併reducer
const rootReducer = combineReducers({
  counter,
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
