import React from 'react'
import styled from 'styled-components'
import data from '../../assets/imgs/game개발.png'
const Wrapper=styled.div`
width:400px;
    height:320px;
    position:relative;
    background-color: #ffffff;
    margin:10px 10px;
    border: solid 1px #e0e0e0;
  background-color: #ffffff;
`
const Img=styled.img`
    position:absolute;
    top:0px;
    width: 400px;
    height: 200px;
`
const Kind=styled.span`
position:absolute;
top:210px;
left:20px;
    font-family: 'Noto Sans KR',sans-serif;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #6f6f6f;
`
const Title=styled.span`

font-family: NIXGONB-Vb,sans-serif;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.4px;
  text-align: left;
  color: #212121;
`
const Pink=styled.span`
color:#ef4f80;

`
const Name=styled.span`

  font-family: NIXGONB-Vb,sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: left;
  color: #212121;
`
const Top=styled.div`
position:absolute;
left:20px;
right:20px;
top:229px;
display:flex;
justify-content:space-between;
`
const Line=styled.div`
position:absolute;
top:260px;
height:0px;
border: 1px solid #e0e0e0;
left:20px;
right:20px;
`

const Text=styled.div`
position:absolute;
left:20px;
right:20px;
top:270px;
bottom:10px;
overflow:hidden;
font-family: 'Noto Sans KR',sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #212121;
`
export default function PortfolioItem(props) {
    return (
        <Wrapper>
            <Img src={`http://54.180.122.126:5555/file/portfolio/image/${props.img}`}></Img>
            <Kind>{props.field}</Kind>
            <Top>
            <Title>{props.title}</Title>
            <Name><Pink>{props.email}</Pink>님</Name>
            </Top>
            <Line/>
            <Text>{props.description}</Text>
        </Wrapper>
    )
}
