import React, { useState, useRef, useEffect } from 'react'
import { ResultStyled } from '../styled'

const Result = (props) => {
  const canvas = useRef(null)
  const { draw } = props
  // const [text, setText] = useState('Hello World')
  const [bufferCtx, setBufferCtx] = useState({})
  const [viewCtx, setViewCtx] = useState(null)

  useEffect(() => {
    const bufferCanvas = canvas.current
    const viewCanvas = canvas.current

    setViewCtx(viewCanvas.getContext('2d'))
    setBufferCtx(bufferCanvas.getContext('2d'))
  }, [canvas])
  useEffect(() => {
    const { current } = props.video

    if (current) {
      current.oncanplay = setView

      if (viewCtx) {
        if (draw.src) {
          console.log(draw.src)
          bufferCtx.drawImage(draw, 0, 0)
        }
      }
    }
  })

  const setView = () => {
    const viewCanvas = canvas.current
    const bufferCanvas = canvas.current

    viewCanvas.width = 812
    viewCanvas.height = 320

    const fps = () => {
      const image = bufferCtx.getImageData(
        0,
        0,
        viewCanvas.width,
        viewCanvas.height
      )
      bufferCtx.drawImage(props.video.current, 0, 0, 812, 320)
      bufferCtx.globalAlpha = 0.5
      // console.log(draw)
      if (draw.src) {
        bufferCtx.drawImage(draw, 0, 0)
      }

      viewCtx.drawImage(bufferCanvas, 0, 0)

      setTimeout(fps, 1000 / 60)
    }

    fps()
  }

  return (
    <ResultStyled>
      <canvas ref={canvas}>이 브라우저는 지원하지 않습니다.</canvas>
    </ResultStyled>
  )
}

export default Result
