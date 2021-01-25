import React from 'react'

class CountClass extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
      test: false,
    }
    console.log('constructor')
  }

  render() {
    console.log('render')
    return (
      <>
        <h1>{this.state.total}</h1>

        <button
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
            //this.setState({ test: true })

            //this.setState({ total: this.state.total + 1, test: true })
          }}
        >
          +1
        </button>
      </>
    )
  }
}

export default CountClass
