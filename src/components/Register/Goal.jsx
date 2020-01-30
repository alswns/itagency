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
  display:flex;
  justify-content:center;
cursor:pointer;
  
`
const Title=styled.span`
position:absolute;
top:16px;

 font-family: 'Noto Sans KR';
  font-size: 17px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: center;
  color: #212121;`

const Text=styled.span`
position:absolute;
top:45px;
width: 130px;
  height: 26px;
 font-family: 'Noto Sans KR';
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.22px;
  text-align: center;
  color: rgba(0,0,0,0.9);
  white-space:pre;
  `
  
  
export default function Goal(props) {
    
    return (
        <Wrapper a={props.a} mar={props.mar} clicked={props.click} onClick={props.onClick} className={props.className}>
            <Title>{props.title}</Title>
            <Text>{props.text} </Text>
        </Wrapper>
    )
}
