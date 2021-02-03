import React, { useRef, useEffect } from 'react'
import '../styles/spinner.scss'

function CoverSpinner(props) {
  const spinnerEl = useRef(null)

  useEffect(() => {
    if (props.show)
      spinnerEl.current.style.display = 'block'
  }, [props.show])

  return <div id="cover-spin" ref={spinnerEl}></div>
}

export default CoverSpinner
