import React from 'react'
import styled from 'styled-components'

const Wrapper= styled.div`
width:250px;
background-color:skyblue;
height:400px;
border-radius:10px;
position: relative;
margin-right:28px;
`
const Kind=styled.span`
position:absolute;
left:20px;
top:25px;
border:1px solid #ef4f80;
border-radius:18px;
padding:0px 15px;
z-index:999;
background:none;
font-family: NIXGONM-Vb;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.69;
  letter-spacing: -0.26px;
  text-align: left;
  color: #f3f3f3;
`
const Bold =styled.span`
position: absolute;
width:210px;
height:61px;
left:20px;
top:75px;
font-family: NIXGONM-Vb;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -0.4px;
  text-align: left;
  color: #f3f3f3;
`
const Nickname=styled.span`
position: absolute;
left:20px;
top:140px;
 width: 110px;
  height: 14px;
  font-family: NIXGONM-Vb;
  font-size: 13px;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.69;
  letter-spacing: -0.26px;
  text-align: left;
  color: #f3f3f3;
`
const Line=styled.hr`
width: 210px;
position: absolute;
left:20px;
right:20px;
flex:1;
top:165.7px;
background-color:white;
color:white;
`

const Text=styled.span`
position:absolute;
font-family: NIXGONM-Vb;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.69;
  letter-spacing: -0.26px;
  text-align: left;
  color: #f3f3f3;
    left:20px;
    top:${props=>props.top};
`

const Content=styled.span`
position: absolute;
    left:81.3px;
    top:${props=>props.top};
 font-family: NIXGONM-Vb;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.69;
  letter-spacing: -0.26px;
  text-align: left;
  color: #f3f3f3;

`
const Button = styled.a`
display: block;

background-color:${props => props.back};
width:92px;
height:36px;
border-radius:7px;
font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 36px;
  letter-spacing: -0.3px;
  text-align: center;
  color: ${props=>props.color};
  position: absolute;
  left:${props=>props.left};
  top:291px;
`

export default function ProjectItem() {
    return (
        <Wrapper>
            <Kind>디자인 > 앱</Kind>
            <Bold>앱디자인+퍼블리싱 </Bold>
            <Nickname>blackb 클라이언트님</Nickname>
            <Line/>
            <Text top='185.8px'>예상비용</Text>
            <Text top='212.4px'>작업기간</Text>
            <Text top='238.9px'>지원자수</Text>
            <Content top='185.8px'>100만원~800만원</Content>
            <Content top='212.4px'>31일</Content>
            <Content top='238.9px'>07명</Content>
            <Button back='yellow' left='31px' color='#212121'>작업신청</Button>
            <Button back='black' left='128px' color='white'>내용보기</Button>
        </Wrapper>
    )
}
