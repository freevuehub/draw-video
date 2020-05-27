import React, { useState } from 'react'
import { DrawCanvas, DefaultVideo, Result } from './components'
import { AppStyled, Wrapper } from './styled'

const App = () => {
  const [video, setVideo] = useState({})
  const [draw, setDraw] = useState({})

  return (
    <AppStyled>
      <Wrapper>
        <DefaultVideo play={(value) => setVideo(value)} />
        <DrawCanvas draw={(value) => setDraw(value)} />
      </Wrapper>
      <Result video={video} draw={draw} />
    </AppStyled>
  )
}

export default App
