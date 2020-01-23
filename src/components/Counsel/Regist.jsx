import React from 'react'
import styled from 'styled-components'
const Wrapper=styled.div`
width:1076px;
height:86px;
border: solid 1px #e0e0e0;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top:30px;
  margin-bottom:10px;
`
const Title=styled.div`
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
margin-left:4.6%;
margin-top:22px;
font-family: NIXGONB-Vb;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
`
const Text=styled.div`
 font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: -0.3px;
  text-align: left;
  color: #6f6f6f;
  margin-left:4.6%;
  margin-top:5px;
`

export default function Regist() {
    return (
        <Wrapper>
            <Title>프로젝트 정보 등록</Title>
            <Text>작성하신 내용을 검토 후 프로젝트에 올립니다.</Text>
        </Wrapper>
    )
}
