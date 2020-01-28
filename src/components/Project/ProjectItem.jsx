import React from 'react'
import styled from 'styled-components'
import progress0 from '../../assets/imgs/progress0.png'
const Wrapper=styled.div`
  width: 1076px;
  height: 220px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  border: solid 1.5px white;
    position:relative;
    margin-top:10px;
    &:hover{
  border: solid 1.5px #ef4f80;
}
`
const Kind=styled.span`
position:absolute;
top:15px;
left:20px;
font-family: NIXGONM-Vb;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #6f6f6f;
`
const Title=styled.span`
position:absolute;
top: 39px;
left:20px;
font-family: NIXGONB-Vb;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.4px;
  text-align: left;
  color: #ef4f80;
`
const Status=styled.span`
  font-family: NIXGONM-Vb;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #ef4f80;
  top:15px;
  left:655px;
  position:absolute;
`
const Line=styled.div`
height:0px;
border: 1px solid  #f3f3f3;
position:absolute;
top:70px;
left:20px;
width:830px;
`
const Text=styled.span`
position:absolute;
top:80px;
left:20px;
display:flex;
width: 831px;
  font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.3px;
  text-align: left;
  color: #6f6f6f;
`
const Dday=styled.span`
top:15px;
left:814px;
position:absolute;
font-family: NIXGONB-Vb;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.3px;
  text-align: left;
  color: #212121;
`
const Container=styled.span`
padding:15px 20px;
 border: solid 1px #e0e0e0;
  background-color: #ffffff;
  font-family: NIXGONM-Vb;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
  position:absolute;
  top:160px;
  left:${props=>props.left};
`
const Name=styled.span`
  font-family: NIXGONB-Vb;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: -0.26px;
  text-align: left;
  color: #212121;
  position:absolute;
  top:31px;
  left:893px;
`
const Up=styled.span`
color:#ef4f80;
font-size:20px;
font-family: NIXGONM-Vb;

`
const Lines=styled.div`
width:150px;
height:0;
border:1px solid #f3f3f3;
position:absolute;
top:70px;
left:893px;
`
const SeContainer=styled.span`
padding:5px 10px;
font-family: NIXGONM-Vb;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #212121;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
position:absolute;
left:893px;
top:${props=>props.top};
`
const Img=styled.img`
top:35px;
left: 681px;
position: absolute;
width:180px;
`
export default function ProjectItem() {
    return (

        <Wrapper>

            <Kind> 개발 > 웹</Kind>
            <Img src={progress0}></Img>
            <Title>소싱 의뢰 웹 플랫폼 구축</Title>
            <Status>신청진행중</Status>
            <Dday>D-12</Dday>
            <Text>현존 프리랜서마켓 및 크몽에서 는 매우 비싼 금액을 가지고 앱을 만들어 주는 회사가 많음. 소비자는 원하는 앱과 웹 or 프로그램을 보다 더 저렴한 가격에 만들 수 있다. 개발자는 포트폴리오을 돈을 받고도 쌓을 수 있고 여기 이 칸에는프로젝트에 대한 설명이 들어간다. 2줄에서 끊고 ... </Text>
            <Line></Line>
            <Container left='20px'>희망금액 8,000,000원</Container>
            <Container left='206px'>진행기간 16일</Container>
            <Container left='343px'>등록일 2020.01.21</Container>
            <Container left='517px'>모집 마감일 2020.02.02</Container>
            <Container left='721px'>지원수 4명</Container>
            <Name><Up>dlwlrma</Up> 클라이언트님</Name>
            <Lines></Lines>
            <SeContainer top='75px'>지역 서울 </SeContainer>
            <SeContainer top='120px'>사전미팅 온라인</SeContainer>
            <SeContainer top='165px'>희망파트너 상관없음</SeContainer>
        </Wrapper>
    )
}
