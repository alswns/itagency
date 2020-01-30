import React from 'react'
import styled from 'styled-components'
const Wrapper=styled.div`
 width: 660px;
  height: 82px;
  border-radius: 5px;
  margin-top:10px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  position:relative;
  box-sizing:border-box;
  padding-left:50px;
`
const Location=styled.span`
position:absolute;
top:11px;
font-family: NIXGONM-Vb;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
`
const Title=styled.span`
font-family: NIXGONB-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
  margin-right:7px;
`
const Tier=styled.span`
font-family: NIXGONM-Vb;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;

`
const Content=styled.span`
top:55px;
position:absolute;
font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #212121;

`
const Span=styled.span`
position:absolute;
top:29px;

`
const Del=styled.span`
position:absolute;
top:33px;
right:50px;
font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: right;
  color: #ef4f80;`
const Insert=styled.span`
position:absolute;
top:33px;
right:86px;
font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: right;
  color: #212121;
`
export default function CareerItem() {
    return (
        <Wrapper>
            <Location>특별자지</Location>
            <Span>
            <Title>제목</Title><Tier>직책</Tier>
            </Span>
            <Content>asdsad</Content>
            <Insert>수정</Insert>
            <Del>삭제</Del>
        </Wrapper>
    )
}
