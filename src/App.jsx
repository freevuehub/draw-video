import React, { useState, useEffect } from 'react'
import { AppStyled, Wrapper } from './styled'
import { Video, Draw } from './components'

const App = () => {
  const [video, setVideo] = useState({})
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
        <div style={{ padding: '10px', margin: '0 30px' }}>
          <h1>+</h1>
        </div>
        <Draw canvasRate={canvasRate} />
        <div style={{ padding: '10px', margin: '0 30px' }}>
          <h1>=</h1>
        </div>
      </Wrapper>
    </AppStyled>
  )
}

export default App
