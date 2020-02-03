import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
 width: 104px;
  height: 104px;
  border: solid 1px #ef4f80;
  background-color: #ffffff;
    border-radius:100%;
    position:relative;
`
const Su=styled.div`
width:36px;
height:21px;
position:absolute;
left:34px;
top:87px;
background-color: #ffffff;
font-family: 'Noto Sans KR',sans-serif;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.33;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
`
const Img=styled.img`
position:absolute;


left:0; right:0; margin-left:auto; margin-right:auto;
top: 0; bottom:0; margin-top:auto; margin-bottom:auto;



`
const Text=styled.div`
position:absolute;
top:116px;
font-family: 'Noto Sans KR',sans-serif;
  font-size: 15px;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
  opacity:0.9;
  width:110px;
`
export default function CircleIcon(props) {
    return (
        <Wrapper left={props.left}>
            <Su>{props.text}</Su>
            <Img src={props.img} ></Img>
            <Text>{props.main}</Text>
        </Wrapper>
    )
}
