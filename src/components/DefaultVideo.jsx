import React, { useRef, useEffect } from 'react'
import { DefaultVideoStyled } from '../styled'

const DefaultVideo = (props) => {
  const video = useRef(null)
  const getMedia = async () => {
    const { current } = video

    try {
      const res = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: 812,
          height: 320,
        },
      })

      if ('srcObject' in current) {
        current.srcObject = res
      } else {
        current.src = window.URL.createObjectURL(res)
      }

      current.onloadedmetadata = function (e) {
        current.play()
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getMedia()
  }, [video])

  useEffect(() => {
    props.play(video)
  })

  return <DefaultVideoStyled src="#" forwardRef={video} />
}

export default DefaultVideo
