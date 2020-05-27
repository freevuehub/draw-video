import React, { useState, useRef, useEffect } from 'react'
import { DrawCanvasStyled } from '../styled'

const DrawCanvas = (props) => {
  const canvas = useRef(null)
  const [ctx, setCtx] = useState(null)

  const [lineDraw, setLineDraw] = useState(false)
  const [dotDraw, setDotDraw] = useState(false)

  const [mouseValue, setMouseValue] = useState({
    prevX: undefined,
    prevY: undefined,
    currX: undefined,
    currY: undefined,
  })

  useEffect(() => {
    const { current } = canvas

    setCtx(current.getContext('2d'))
  }, [canvas])

  useEffect(() => {
    const { current } = canvas

    current.width = current.offsetWidth
    current.height = current.offsetHeight
  }, [ctx])

  const handleDrawStart = (event) => {
    const { current } = canvas

    setMouseValue({
      prevX: event.clientX - current.offsetLeft,
      prevY: event.clientY - current.offsetTop,
      currX: event.clientX - current.offsetLeft,
      currY: event.clientY - current.offsetTop,
    })
    setLineDraw(true)
  }
  const handleDrawing = (event) => {
    const { current } = canvas

    if (lineDraw) {
      setMouseValue({
        prevX: mouseValue.currX,
        prevY: mouseValue.currY,
        currX: event.clientX - current.offsetLeft,
        currY: event.clientY - current.offsetTop,
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
    const { current } = canvas
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

    const image = new Image()

    image.src = canvas.current.toDataURL()

    props.draw(image)
  }

  return (
    <DrawCanvasStyled
      onMouseDown={handleDrawStart}
      onMouseMove={handleDrawing}
      onMouseUp={handleDrawEnd}
      onMouseOut={handleDrawEnd}
      forwardRef={canvas}
    >
      이 브라우저는 지원하지 않습니다.
    </DrawCanvasStyled>
  )
}

export default DrawCanvas
