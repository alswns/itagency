import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
  width: 540px;
    margin-top:186px;
    margin-bottom:214px;
`
const Top=styled.div`
width:100%;
  height: 86px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
`
const Ment=styled.div`
  font-family: 'Noto Sans KR',sans-serif;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: -0.34px;
  text-align: left;
  color: #6f6f6f;
  white-space:pre;
  box-sizing:border-box;
  padding-top:21px;
  padding-left:50px;
`
const Bold=styled.span`
font-size: 20px;
color: #212121;
font-family: NIXGONB-Vb;
`

const Main=styled.div`
 height: 500px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  margin-top:15px;
`
const Title=styled.div`
display:flex;
align-items:center;
padding-left:5.6%;
width:100%;
height:60px;
font-family: NIXGONB-Vb;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
  border-bottom:solid 1px #e0e0e0;
`
const Infor=styled.span`
width: 62px;
  height: 17px;

 font-family: NIXGONB-Vb;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: normal;
  text-align: right;
  color: #6f6f6f;
  margin:0 5.6%;

`
const InforContainer=styled.div`
display:flex;
margin-bottom:20px;
`
const Input=styled.input`
  width: 350px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  font-family: 'Noto Sans KR',sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
`
const Kind=styled.select`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  font-family: 'Noto Sans KR',sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
`
const Label=styled.label`
 font-family: 'Noto Sans KR',sans-serif;
  font-size: 13px;
  margin-top:3px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
`
const InputDiv=styled.div`
display:flex;
flex-direction:column;
`
const Button=styled.div`
cursor:pointer;
margin:0 auto;
display:flex;
justify-content:center;
align-items:center;
width: 400px;
  height: 45px;
  border-radius: 5px;
  background-color: #ef4f80;
  font-family: NIXGONB-Vb;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`
export default function container(props) {
    return (
        <Wrapper>
            <Top>
            <Ment>
                <Bold>비밀번호 찾기</Bold><br/>
                비밀번호를 잊으셨다면, 비밀번호 찾기를 이용하세요.
            </Ment>
            </Top>
            <Main>
                <Title>비밀번호 찾기</Title>
                <div style={{height:'60px'}}></div>
                
                


                <InforContainer><Infor>비밀번호</Infor> 
                <InputDiv>
                <Input onChange={(event)=>props.setValue('pw',event)}></Input>
                <Label>새로 사용할 비밀번호를 입력해 주십시오.</Label>
                </InputDiv>
                </InforContainer>

                <InforContainer><Infor>확인</Infor> 
                <InputDiv>
                <Input onChange={(event)=>props.setValue('repw',event)}></Input>
                <Label>비밀번호를 다시 입력해주십시오.</Label>
                </InputDiv>
                </InforContainer>

                <Button onClick={props.Submit}>수정완료</Button>
            </Main>
        </Wrapper>
    )
}
