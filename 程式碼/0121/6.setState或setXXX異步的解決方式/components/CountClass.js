import React, { Component } from 'react'

class CountClass extends Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
  }

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button
          onClick={() => {
            // 先計算最後的更新值，建立一個新的值的變數(or常數)
            const newTotal = this.state.total + 1
            // **會後執行(非同步)** 給react設定狀態用(呈現畫面用)
            this.setState({ total: newTotal })
            // **會先執行** 作其它事用
            console.log(newTotal)
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({ total: this.state.total - 1 })
          }}
        >
          -1
        </button>
      </>
    )
  }
}

export default CountClass
