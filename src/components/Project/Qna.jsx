import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 860px;
  height: 100px;
  border: solid 1px ${props => props.color};
  background-color: #ffffff;
  margin-bottom:10px;
`
const Title = styled.div`
padding:5px;
padding-left:10px;
 font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #212121;
  border-bottom: solid 1px #e0e0e0;

`
const Sub = styled.div`
padding:5px;
padding-left:10px;
  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: left;
  color: #212121;
`
const Second = styled.div`
  margin-bottom:10px;
 width: 860px;
  height: 50px;
  background-color: #6f6f6f;
  font-family: NIXGONB-Vb;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 4;
  letter-spacing: -0.28px;
  padding-left:20px;
  box-sizing:border-box;
  text-align: left;
  color: #ffffff;
`
let data
export default function Qna(props) {
  return (
    <>
      {props.res.description == 'SECRET' ?
        <Second>비밀글입니다.</Second>
        :
        props.res.auth == 1 ? 
        <Wrapper color='#ef4f80'>
          <Title>{props.res.partner_name}</Title>
          <Sub>{props.res.description}</Sub>
        </Wrapper>
          : 
        <Wrapper color='#6f6f6f'>
            
            <Title>{props.res.partner_name}</Title>
            <Sub>{props.res.description}</Sub>

          </Wrapper>


      }
    </>
  )
}
