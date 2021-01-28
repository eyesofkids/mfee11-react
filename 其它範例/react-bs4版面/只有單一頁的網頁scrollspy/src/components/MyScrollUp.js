import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { FaArrowAltCircleUp } from 'react-icons/fa'

function MyScrollUp(props) {
  return (
    <>
      <ScrollToTop showUnder={200}>
        <span>
          <FaArrowAltCircleUp size={30} color={'#dca020'} />{' '}
          返回
        </span>
      </ScrollToTop>
    </>
  )
}

export default MyScrollUp
