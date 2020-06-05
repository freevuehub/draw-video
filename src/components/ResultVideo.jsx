import React, { useEffect, useRef } from 'react'
import { ItemStyled } from '../styled'

const ResultVideo = (props) => {
  const refResult = useRef(null)

  useEffect(() => {
    try {
      if (!props.result.captureStream) {
        throw Error()
      }

      const videoStream = props.result.captureStream(30)
      const record = new MediaRecorder(videoStream)
      const chunk = []

      record.ondataavailable = (event) => {
        console.log(event)

        chunk.push(event.data)
      }

      record.onstart = (event) => {
        const blob = new Blob(chunk, { type: 'video/mp4' })
        const videoURL = URL.createObjectURL(blob)

        console.log(videoURL, event)

        refResult.current.srcObject = event.target.stream
        console.dir(refResult.current)

        // video.src = videoURL;
      }

      record.start()
    } catch {}
  }, [props.result])

  return (
    <ItemStyled color="purple">
      <h1>결과 화면 비디오</h1>
      <video src="#" ref={refResult} controls></video>
    </ItemStyled>
  )
}

export default ResultVideo
