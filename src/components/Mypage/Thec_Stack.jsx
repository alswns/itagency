import React from 'react'
import styled from 'styled-components'
import StackItem from './StackItem'
const Wrapper=styled.div`
width:100%;
margin-top:10px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  padding:20px 50px;
  box-sizing:border-box;
`
const Title=styled.span`
margin-right:85px;
 font-family: NIXGONB-Vb;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;`

  const Select=styled.select`
   width: 400px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  margin-right:10px;
  `
  const Flex_div=styled.div`
  display:flex;

  `
  const Add=styled.div`
   width: 86px;
  height: 40px;
  border-radius: 5px;
  background-color: #212121;
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: NIXGONB-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  `
  const Line=styled.div`
    width:100%;
    height:0px;
    border: 1px solid #e0e0e0;
    margin:20px 0px;
  `
  const BigLine=styled.div`
  width:100%;
    height:0px;
    border: 1px solid #6f6f6f;
    margin:20px 0px;
  `
  const Button=styled.div`
    width: 151px;
  height: 30px;
  border-radius: 5px;
  background-color: #212121;
  font-family: NIXGONB-Vb;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  display:flex;
  align-items:center;
  justify-content:center;
  `
export default function Thec_Stack() {
    return (
        <Wrapper>
            <Flex_div>
            <Title>기술정보 추가</Title>
            <Select></Select>
            <Add>추가</Add>
            </Flex_div>
            <Line/>
            <StackItem data='C언어'></StackItem>
            <StackItem data='C언어'></StackItem>
            <StackItem data='C언어'></StackItem>
            <StackItem data='C언어'></StackItem>
            <StackItem data='C언어'></StackItem>
            <BigLine/>
            <Button>정보수정</Button>
        </Wrapper>
    )
}
