import React from 'react'

// 假文章排版用
import { Skeleton } from 'antd'
// 排版用
import { Jumbotron, Button } from 'react-bootstrap'

// 捲軸動畫展示用
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax'
import SampleImage from '../samples/SampleImage'

function SinglePage(props) {
  return (
    <>
      <Jumbotron>
        <h1>單頁式網頁範例</h1>
        <p>
          This is a simple hero unit, a simple
          jumbotron-style component for calling extra
          attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      {/* 用name對應react-scroll的to */}
      <section id="intro" name="intro">
        <h2>介紹</h2>
        <Skeleton paragraph={{ rows: 20 }} />
      </section>

      <section id="main" name="main">
        <h2>主內容</h2>
        <Skeleton paragraph={{ rows: 30 }} />
      </section>

      <section id="related" name="related">
        <h2>相關文章</h2>

        <ScrollParallax
          animation={{
            x: 0,
            opacity: 1,
            playScale: [0.5, 0.8],
          }}
          style={{
            transform: 'translateX(-100px)',
            opacity: 0,
          }}
        >
          <SampleImage />
        </ScrollParallax>
        <ScrollParallax
          animation={{
            y: 0,
            opacity: 1,
            playScale: [0.5, 0.8],
          }}
          style={{
            transform: 'translateY(-100px)',
            opacity: 0,
          }}
        >
          <SampleImage />
        </ScrollParallax>
        <ScrollParallax
          animation={{
            opacity: 1,
            playScale: [0.5, 0.8],
          }}
          style={{
            opacity: 0,
          }}
        >
          <Skeleton paragraph={{ rows: 10 }} />
        </ScrollParallax>
      </section>

      <section id="demo2" name="demo2">
        <h2>展示2</h2>
        <Skeleton paragraph={{ rows: 20 }} />
      </section>
    </>
  )
}

export default SinglePage
