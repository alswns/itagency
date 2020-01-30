import React from 'react'
import styled from 'styled-components'
import Introduce from './Introduce'
import Stack from './Stack'
import Projects from './Projects'

const Wrapper=styled.div`
width: 760px;

`
const Top=styled.div`
width:100%;
  height: 65px;
  font-family: NIXGONB-Vb;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.04;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  box-sizing:border-box;
  display:flex;
  align-items:center; 
  padding-left:50px;
`
const Line=styled.div`
width:100%;
height:0px;
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

export default function Preview(props) {
    const [data,setData]=React.useState('1')
    return (
        <Wrapper>
            <Top>{props.name}</Top>
            <Line/>
            <List>
            <Items  onClick={()=>setData('0')}>포트폴리오</Items>
            <Items  onClick={()=>setData('1')}>프로젝트</Items>
            <Items  onClick={()=>setData('2')}>기술스택</Items>
            <Items  onClick={()=>setData('3')}>경력정보</Items>
            <Items  onClick={()=>setData('4')}>자기소개</Items>
            </List>
            {data==0&&''}
            {data==1&&<Projects></Projects>}
            {data==2&&<Stack data={props.data}></Stack>}
            {data==3&&''}
            {data==4&&
            <Introduce data={props.data}/>
            }

        </Wrapper>
    )
}
