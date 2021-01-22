import React from 'react'

class HelloWorldClass extends React.Component {
  // 建構式要得到props要寫成這樣
  constructor(props) {
    super(props)
    this.state = {}
    console.log(props)
  }

  render() {
    // 解構賦值，props可以直接得到
    const { name, text } = this.props

    return (
      <h1>
        {name}, {text}
      </h1>
    )
  }
}

export default HelloWorldClass
