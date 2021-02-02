import React, { useContext } from 'react'

import { ThemeContext } from '../App'

function MyButton() {
  const theme = useContext(ThemeContext)
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Test123
    </button>
  )
}

export default MyButton
