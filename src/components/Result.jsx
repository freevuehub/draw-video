import React, { useState, useRef, useEffect } from 'react'
import { ItemStyled } from '../styled'

const Result = (props) => {
  const refCanvas = useRef(null)

  useEffect(() => {
    const { current } = refCanvas

    current.width = props.canvasRate.width
    current.height = props.canvasRate.height
  }, [refCanvas, props.canvasRate])

  useEffect(() => {
    props.video.oncanplay = () => {
      frameVideo()
    }
  })

  const frameVideo = () => {
    const { current } = refCanvas
    const ctx = current.getContext('2d')

    ctx.drawImage(props.video, 0, 0, current.width, current.height)
    ctx.drawImage(props.draw, 0, 0, current.width, current.height)

    setTimeout(frameVideo, 1000 / 60)
  }

  return (
    <ItemStyled color="blue">
      <h1>결과</h1>
      <canvas
        ref={refCanvas}
        style={{
          width: props.canvasRate.width,
          height: props.canvasRate.height,
          display: 'block',
        }}
      >
        이 브라우저는 지원하지 않습니다.
      </canvas>
    </ItemStyled>
  )
}

export default Result
