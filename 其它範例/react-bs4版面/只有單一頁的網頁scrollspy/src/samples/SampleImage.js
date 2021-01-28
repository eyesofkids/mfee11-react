import React from 'react'

function SampleImage(props) {
  return (
    <>
      {/* 範例圖片，在public中，最好用絕對路徑*/}
      <img
        src="http://localhost:3000/logo192.png"
        alt="logo"
      />
    </>
  )
}

export default SampleImage
