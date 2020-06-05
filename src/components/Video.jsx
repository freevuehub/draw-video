import React, { useEffect, useRef } from 'react'
import { ItemStyled, VideoItem } from '../styled'

const Video = (props) => {
  const refVideo = useRef(null)

  useEffect(() => {
    getMidia()
  })

  const getMidia = async () => {
    try {
      const { current } = refVideo
      const res = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: 320,
          height: 812,
        },
      })

      console.log('res', res)

      if ('srcObject' in current) {
        current.srcObject = res
      } else {
        current.src = window.URL.createObjectURL(res)
      }

      current.onloadedmetadata = () => {
        current.play()
        props.play(current)
      }
    } catch {
      console.error('연결이 끊어졌습니다.')
    }
  }

  return (
    <ItemStyled color="red">
      <h1>기본 비디오</h1>
      <VideoItem ref={refVideo} src="#" />
    </ItemStyled>
  )
}

export default Video
