import React from 'react'
import styled from 'styled-components'
const Wrapper=styled.div`
  width: 125px;
  height: 115px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  position:relative;
  box-sizing:border-box;
  margin-right:18px;
  border:solid 1px #ffffff;
`
const Img=styled.img`


`
const Text=styled.div`
position:absolute;


top:78px;
width:100%;
text-align:center;

  white-space:pre;
  font-family: NIXGONM-Vb;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  color: #101010;
`
const MidDiv=styled.div`
width:100%;
position:absolute;
top:18px;
text-align:center;
justify-content:center;
`
export default function CounselItem(props) {
    return (
        <Wrapper onClick={props.onClick}>
            <MidDiv>
            <Img src={props.img}></Img>
            </MidDiv>
            <Text>{props.text}</Text>
        </Wrapper>
    )
}
