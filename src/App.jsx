import React, { useState, useEffect } from 'react'
import { AppStyled, Wrapper } from './styled'
import { Video, Draw, Result } from './components'

const App = () => {
  const [video, setVideo] = useState({})
  const [draw, setDraw] = useState({})
  const [canvasRate, setCanvasRate] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    setCanvasRate({
      width: video.videoWidth,
      height: video.videoHeight,
    })
  }, [video])

  return (
    <AppStyled>
      <Wrapper>
        <Video play={(value) => setVideo(value)} />
        <h1>+</h1>
        <Draw draw={(value) => setDraw(value)} canvasRate={canvasRate} />
        <h1>=</h1>
        <Result video={video} draw={draw} canvasRate={canvasRate} />
      </Wrapper>
    </AppStyled>
  )
}

export default App
