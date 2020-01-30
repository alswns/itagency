import React from 'react'
import styled from 'styled-components'
const Wrapper=styled.div`
width:100%;
margin-top:10px;
`
const List=styled.div`
    width:100%;
  height: 40px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
    box-sizing:border-box;
    display:flex;
`
const Items=styled.span`
font-size: 16px;
font-family:'Noto Sans KR';
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #5f5f5f;
  display:flex;
  height:100%;
  align-items:center;
  margin-left:50px;
`

export default function Projects() {
    return (
        <Wrapper>
        <List>
            <Items>진행중</Items>
            <Items>완료</Items>
        </List>
        </Wrapper>
    )
}
