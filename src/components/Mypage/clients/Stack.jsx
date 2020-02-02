import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
width:100%;
margin-top:10px;
margin-bottom:20px;
`
const High=styled.div`
 width: 760px;
  height: 365px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  font-family: 'Noto Sans KR';
  font-size: 23px;
  color: #212121;
  padding:10px 40px;
  box-sizing:border-box;
`
const Container=styled.div`
margin-top:20px;
 width: 660px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  font-family: 'noto sans kr';
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.4px;
  text-align: left;
  color: #212121;
  display:flex;
  align-items: center;
  padding:30px;
  box-sizing:border-box;
`
export default function Stack(props) {
    return (
        <Wrapper>
            {props.data.tech_stack.length==0?<High>사용 하실 수 있는 기술을 입력해 주십시오.</High>:props.data.tech_stack.map(res=>{
                return <Container>{res}</Container>
            })}
        </Wrapper>
    )
}
