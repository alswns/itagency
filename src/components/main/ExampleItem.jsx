import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
display:flex;
flex-direction:column;
width:25%;
align-items:center;
padding:0px;
`
const Img=styled.img`
width:290px;
height:198px;
margin-bottom:20px;
`

const Title=styled.span`
margin: 0 auto;
  white-space:pre;
  font-family:'Noto Sans KR';
  font-size: 23px;
  font-weight: 600  ;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ef4f80;
  margin-bottom:30px;
`
const Text=styled.span`
  white-space:pre;
  margin: 0 auto;
 font-family: 'Noto Sans KR',sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
  white-space:pre-line;
`
export default function ExampleItem(props) {
    return (
        
        <Wrapper>
            <Img src={props.img}></Img>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </Wrapper>
    )
}
