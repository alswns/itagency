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

const Title=styled.span`
font-family: 'Noto Sans Kr';;
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
font-family: 'Noto Sans Kr';;
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
top:46px;
position:absolute;
font-family: 'Noto Sans Kr';;
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
top:18px;

`
const Del=styled.span`
position:absolute;
top:33px;
right:50px;
font-family: 'Noto Sans Kr';
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: right;
  color: #ef4f80;`

export default function PreviewWin(props) {
    return (
        <Wrapper>
            <Span>
            <Title>{props.name}</Title><Tier>{props.year}</Tier>
            </Span>
            <Content>{props.agency}</Content>
        </Wrapper>
    )
}
