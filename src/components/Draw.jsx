import React, { useState, useRef, useEffect } from 'react'
import { ItemStyled } from '../styled'

const Draw = (props) => {
  const refCanvas = useRef(null)

  const [lineDraw, setLineDraw] = useState(false)
  const [dotDraw, setDotDraw] = useState(false)

  const [mouseValue, setMouseValue] = useState({
    prevX: undefined,
    prevY: undefined,
    currX: undefined,
    currY: undefined,
  })

  useEffect(() => {
    const { current } = refCanvas

    current.width = props.canvasRate.width
    current.height = props.canvasRate.height
  }, [refCanvas, props.canvasRate])

  useEffect(() => {
    const { current } = refCanvas

    props.draw(current)
  })

  const handleDrawStart = (event) => {
    const { current } = refCanvas

    setMouseValue({
      prevX: event.touches
        ? event.touches[0].clientX
        : event.clientX - current.offsetLeft,
      prevY: event.touches
        ? event.touches[0].clientY
        : event.clientY - current.offsetTop,
      currX: event.touches
        ? event.touches[0].clientX
        : event.clientX - current.offsetLeft,
      currY: event.touches
        ? event.touches[0].clientY
        : event.clientY - current.offsetTop,
    })
    setLineDraw(true)
  }
  const handleDrawing = (event) => {
    const { current } = refCanvas

    if (lineDraw) {
      setMouseValue({
        prevX: mouseValue.currX,
        prevY: mouseValue.currY,
        currX: event.touches
          ? event.touches[0].clientX
          : event.clientX - current.offsetLeft,
        currY: event.touches
          ? event.touches[0].clientY
          : event.clientY - current.offsetTop,
      })

      onDraw()
    }
  }
  const handleDrawEnd = () => {
    if (lineDraw) {
      setLineDraw(false)
    }
  }
  const onDraw = () => {
    const { current } = refCanvas
    const ctx = current.getContext('2d')

    if (dotDraw) {
      ctx.beginPath()
      ctx.fillStyle = 'black'
      ctx.fillRect(mouseValue.currX, mouseValue.currY, 2, 2)
      ctx.closePath()

      setDotDraw(false)
    }

    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2

    ctx.beginPath()

    ctx.moveTo(mouseValue.prevX, mouseValue.prevY)
    ctx.lineTo(mouseValue.currX, mouseValue.currY)

    ctx.stroke()
    ctx.closePath()

    props.draw(current)
  }

  return (
    <ItemStyled color="green">
      <h1>그리기 창</h1>
      <canvas
        ref={refCanvas}
        onMouseDown={handleDrawStart}
        onMouseMove={handleDrawing}
        onMouseUp={handleDrawEnd}
        onMouseOut={handleDrawEnd}
        onTouchStart={handleDrawStart}
        onTouchMove={handleDrawing}
        onTouchEnd={handleDrawEnd}
        onTouchCancel={handleDrawEnd}
      >
        지금 이용중이신 브라우저는 지원을 하지 않습니다.
      </canvas>
    </ItemStyled>
  )
}

export default Draw
