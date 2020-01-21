import React from 'react'
import styled from 'styled-components'
const Wrapper=styled.div`
 width: 200px;
  height: 91px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  position:relative;
  margin-left:${props=>props.mar};
  box-sizing:border-box;
cursor:pointer;
  
`
const Title=styled.span`
width: 62px;
  height: 15px;
position:absolute;
top:14px;
left:69px;
 font-family: NIXGONM-Vb;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: center;
  color: #212121;`
const Text=styled.span`
position:absolute;
top:49px;
left:58px;
width: 90px;
  height: 26px;
 font-family: NIXGONM-Vb;
  font-size: 11px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: -0.22px;
  text-align: center;
  color: #6f6f6f;`
  
export default function Goal(props) {
    
    return (
        <Wrapper a={props.a} mar={props.mar} clicked={props.click} onClick={props.onClick} className={props.className}>
            <Title>{props.title}</Title>
            <Text>{props.text} </Text>
        </Wrapper>
    )
}
