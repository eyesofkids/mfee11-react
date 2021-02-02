import React, { useContext } from 'react'

// 要從App導入建立的ThemeContext

import { ThemeContext } from '../App'

function MyButton() {
  //得到目前的ThemeContext
  const theme = useContext(ThemeContext)

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Test123
    </button>
  )
}

export default MyButton
