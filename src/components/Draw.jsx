import React, { useRef, useEffect } from 'react'
import { ItemStyled } from '../styled'

const Draw = (props) => {
  const refCanvas = useRef(null)

  useEffect(() => {
    const { current } = refCanvas

    current.width = props.canvasRate.width
    current.height = props.canvasRate.height

    setCanvas2d(current)
  }, [refCanvas, props.canvasRate])

  const setCanvas2d = (canvas) => {
    const ctx = canvas.getContext('2d')

    ctx.fillRect(100, 100, 50, 50)
  }

  return (
    <ItemStyled color="green">
      <h1>그리기 창</h1>
      <canvas
        ref={refCanvas}
        style={{
          width: props.canvasRate.width,
          height: props.canvasRate.height,
          display: 'block',
          background: '#e2e2e250',
        }}
      >
        지금 이용중이신 브라우저는 지원을 하지 않습니다.
      </canvas>
    </ItemStyled>
  )
}

export default Draw
