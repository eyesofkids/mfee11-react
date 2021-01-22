import React from 'react'
import PropTypes from 'prop-types'

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

// 預設屬性(沒給或給undefined)
HelloWorldClass.defaultProps = {
  name: 'Bob',
  text: 'Hello',
}

HelloWorldClass.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickMethod: PropTypes.func,
}

export default HelloWorldClass
