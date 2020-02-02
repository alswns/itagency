import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
width: 660px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  box-sizing:border-box;
  padding: 0px 30px;

  display:flex;
  align-items:center;
  margin-top:10px;
`
const Title=styled.span`
font-family: 'noto sans kr';
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.4px;
  text-align: left;
  color: #212121;
`
const Del=styled.span`
  font-family: 'noto sans kr';
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: right;
  color: #ef4f80;
`
export default function StackItem(props) {
    return (
        <Wrapper>
            <Title>{props.data}</Title>
            <div style={{flex:'1'}}></div>
            <Del onClick={()=>props.delTech_stack(props.data)}>삭제</Del>
        </Wrapper>
    )
}
