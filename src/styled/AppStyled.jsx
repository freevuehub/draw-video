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
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`

export const ItemWrapper = styled.div`
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 3px 5px #00000050;
  padding: 10px;
`

export const Item = styled.div`
  border: ${(props) => props.color} 1px solid;
  border-radius: 5px;
  overflow: hidden;
`

export const VideoItem = styled.video`
  display: block;
  width: 100%;
`

export const ItemStyled = (props) => (
  <ItemWrapper>
    <Item color={props.color}>{props.children}</Item>
  </ItemWrapper>
)

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
