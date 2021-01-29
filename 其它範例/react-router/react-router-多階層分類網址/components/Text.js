import React from 'react'
import PropTypes from 'prop-types'

class Text extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <>Hello, {this.props.name}</>
  }
}

Text.defaultProps = {
  name: 'Eddy',
}

Text.propTypes = {
  name: PropTypes.string,
}

export default Text
