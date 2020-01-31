import React from 'react'
import styled from 'styled-components'
import Selection from '../Register/Selection'
const Wrapper=styled.div`
margin-top:10px;
  width: 760px;
  height: 310px;
  border-radius: 10px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
`
const Name=styled.span`
  font-family: NIXGONB-Vb;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
`
const Inputs=styled.input`
 width: 410px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
`
const FlexDiv=styled.div`
display:flex;
justify-content:space-between;
padding:0px 50px;
width:100%;
box-sizing:border-box;
margin-top:15px;
`
const Not=styled.div`
width: 151px;
  height: 30px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  font-family: NIXGONB-Vb;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Add=styled.div`
width: 151px;
  height: 30px;
  border-radius: 5px;
  background-color: #ef4f80;
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
  justify-content:center;
  align-items:center;
`
export default function Input(props) {
    return (
        <Wrapper>
            <FlexDiv style={{marginTop:'25px'}}>
                <Name id='name'>회사이름</Name>
                <Inputs></Inputs>
            </FlexDiv>
            <FlexDiv>
                <Name id='location'>지역</Name>
                <div style={{width:'410px',display:'flex',justifyContent:'space-between'}}>
                <Selection/>
                </div>
            </FlexDiv>
            <FlexDiv>
                <Name id='rank'>직책</Name>
                <Inputs></Inputs>
            </FlexDiv>
            <FlexDiv>
                <Name id='description'>업무</Name>
                <Inputs></Inputs>
            </FlexDiv>
            <FlexDiv style={{padding:'0px 211px'}}>
            <Not>취소</Not>
            <Add onClick={props.plusCareer}>근무 경력 추가</Add>
            </FlexDiv>
        </Wrapper>
    )
}
