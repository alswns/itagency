import React from 'react'
import styled from 'styled-components'

const Wrap=styled.div`
  width: 200px;
  height: 120px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  position:relative;
`
const Title=styled.span`
 font-family: 'Noto Sans KR';
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.04;
  letter-spacing: -0.5px;
  text-align: center;
  color: #212121;

  position:absolute;
  top:38px;
  width:100%;
margin: 0 auto;
`
const Pink=styled.span`
  font-family: NIXGONB-Vb;
  color: #ef4f80;
`
const Sub=styled.span`
position:absolute;
top:88px;
font-family: NIXGONB-Vb;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: normal;
  text-align: center;
  color: #6f6f6f;
  width:100%;
margin: 0 auto;
`


export default function Items(props) {
    return (
        <Wrap>
            <Title>{props.title}</Title>
            <Sub>{props.sub}</Sub>
        </Wrap>
    )
}
