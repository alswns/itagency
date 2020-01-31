import React from 'react'
import CareerItem from './CareerItem'
import styled from 'styled-components'

const Wrapper=styled.div`
width:100%;
`
const MyProject = styled.div`
 width: 95px;
  height: 21px;
  font-family: NIXGONB-Vb;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
  width: 100%;
  height: 50px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  box-sizing:border-box;
  padding-top:10px;
  padding-left:50px;
display:flex;
padding-bottom:50px;
`
export default function IntroCareer() {
    return (
        <Wrapper>
             <MyProject >
                        근무경력
            </MyProject>
                    <MyProject style={{ height: 'auto', flexDirection: 'column' }}>
                        <CareerItem></CareerItem>
                        <CareerItem></CareerItem>
                        <CareerItem></CareerItem>
                    </MyProject>
        </Wrapper>
    )
}
