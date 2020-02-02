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
font-family: 'Noto Sans KR';
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
font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
  margin-right:7px;
`
const Tier=styled.span`
font-family: 'Noto Sans KR';
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
font-family: 'Noto Sans KR';
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
font-family: 'Noto Sans KR';
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
font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: right;
  color: #212121;

`
export default function CareerItem(props) {
    return (
        <Wrapper>
            <Location>{props.location}</Location>
            <Span>
            <Title>{props.name}</Title><Tier>{props.rank}</Tier>
            </Span>
            <Content>{props.description}</Content>
            <Del onClick={()=>props.delCarrer(props.res)}>삭제</Del>
            {console.log()}
        </Wrapper>
    )
}
