import React from 'react'
import styled from 'styled-components'
const Wrapper=styled.div`

width: 238px;
  height: 238px;
  
  border-radius: 10px;
  background:url(${props=>props.background});
  position:relative;
`
const Img=styled.div`
position:absolute;
opacity: 0.75;
background-color: #000000;
width: 220px;
  height: 220px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  left:9px;
  top:5px;
`
const Logo=styled.img`

`
const Kind=styled.div`
position:absolute;
width:100%;
text-align:center;
top:157px;
font-family: 'Noto Sans KR',sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.31;
  letter-spacing: normal;
  text-align: center;
  color: #f3f3f3;
`
const Wrap=styled.div`

position:absolute;
top:53px;
text-align:center;
width:100%;
`
export default function KategoriItem(props) {
    return (
        <Wrapper background={props.background}>
            <Img></Img>
            <Wrap>
            <Logo src={props.img}></Logo>
            </Wrap>
            <Kind>{props.text}</Kind>
            </Wrapper>
    )
}
