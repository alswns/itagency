import React from 'react'
import styled from 'styled-components'
const Wrapper=styled.div`
position:fixed;
width: 100%;
  height: 242px;
  background-color: #f3f3f3;
  margin-top:85px;
  z-index:999;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Title=styled.span`
  font-family: 'Noto Sans KR',sans-serif;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
  margin-bottom:20px;

`
const Items=styled.span`
margin-bottom:10px;
font-family: 'Noto Sans KR',sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
`
const Flex=styled.div`
display:flex;
flex-direction:column;
`
const Wrap=styled.div`
width:700px;
display:flex;
justify-content:space-between;
margin-top:40px;
`
export default function Service() {
    return (
        <Wrapper>
            <Wrap>
            <Flex>
                <Title>아이티에이전시</Title>
                <Items>회사 소개</Items>
                <Items>이용약관</Items>
                <Items>개인정보취급방침</Items>
            </Flex>
            <Flex>
                <Title>이용방법</Title>
                <Items>서비스 소개</Items>
                <Items>클라이언트 이용방법</Items>
                <Items>파트너 이용방법</Items>
                <Items>프로젝트 등록하기</Items>
                <Items>이용후기</Items>
            </Flex>
            <Flex>
                <Title>고객센터</Title>
                <Items>0000-0000</Items>
                <Items>(10:00-18:00, 공휴일 제외)</Items>
            </Flex>
            </Wrap>
        </Wrapper>
    )
}
