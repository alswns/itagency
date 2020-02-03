import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
 width: 169px;
  height: 169px;
  
  background-color: rgba(239,79,128,0.25)  ;

    border-radius:100%;
    position:relative;
  
`

const Img=styled.img`
position:absolute;


top:33.1px;
left:46.9px;


`
const Text=styled.div`
position:absolute;
width:100%;

top:117px;
font-family: NIXGONB-Vb,sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.78;
  letter-spacing: -0.54px;
  text-align: center;
  color: #212121;
`
export default function CircleIcon(props) {
    return (
        <Wrapper >
            
            <Img src={props.img} ></Img>
            <Text>{props.text}</Text>
        </Wrapper>
    )
}
