import React from 'react'
import styled from 'styled-components'

export const AppStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
`

export const ContantWrap = styled.div`
  overflow: hidden;
  border: 1px solid red;
  padding: 10px;
`

export const VideoStyled = styled.video`
  display: block;
  width: 812px;
  height: 320px;
  border: 1px solid blue;
`

export const DefaultVideoStyled = (props) => {
  return (
    <ContantWrap>
      <VideoStyled src={props.src} ref={props.forwardRef} />
    </ContantWrap>
  )
}

export const CanvasStyled = styled.canvas`
  display: block;
  border: 1px solid green;
  width: 812px;
  height: 320px;
`

export const DrawCanvasStyled = (props) => {
  return (
    <ContantWrap>
      <CanvasStyled ref={props.forwardRef} {...props}>
        {props.children}
      </CanvasStyled>
    </ContantWrap>
  )
}

export const ResultStyled = styled.div`
  flex: 1;
  padding: 10px;
`
