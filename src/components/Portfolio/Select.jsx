import React from 'react'
import styled from 'styled-components'

const Wrapper= styled.div`
    width: 1341px;
  height: 48px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  margin: 0 auto;
  display:flex;
`
const CheckBox=styled.input`

`
const Label=styled.label`
 font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: left;
  color: #212121;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Center=styled.span`
width:550px;
display:flex;
justify-content:space-between;
padding-left:26px;
`

export default function Select() {
    return (
        <Wrapper>
          <Center>
           <CheckBox type='CheckBox' id='all' className='check'></CheckBox>
           <Label for='all'>전체</Label>
           <CheckBox type='CheckBox' className='check' id='web'></CheckBox>
           <Label for='web'>웹 프로젝트</Label>
           <CheckBox type='CheckBox' id='app' className='check'></CheckBox>
           <Label for='app'>애플리케이션</Label>
           <CheckBox type='CheckBox' id='common'className='check'></CheckBox>
           <Label for ='common'>일반 소프트웨어</Label>
           </Center>
        </Wrapper>
    )
}
