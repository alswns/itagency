import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
display:flex;
flex-direction:column;
width:25%;
justify-content:center;
text-align:center;
`
const Img=styled.img`
width:290px;
height:198px;
margin: 0 auto;
margin-bottom:72px;
`

const Title=styled.span`
margin: 0 auto;
  white-space:pre;
  font-family: NIXGONM-Vb;
  font-size: 23px;
  font-weight: normal  ;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: center;
  color: #ef4f80;
  margin-bottom:30px;
`
const Text=styled.span`
  white-space:pre;
  margin: 0 auto;
 font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.87;
  letter-spacing: normal;
  text-align: center;
  color: #212121;

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
