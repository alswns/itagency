import React from 'react'
import styled from 'styled-components'
import bar from '../../assets/imgs/bar.png'
import bar1 from '../../assets/imgs/bar1.svg'


const Wrapper=styled.div`
margin-top:31px;

`
const Text=styled.div`
margin-bottom:15px;
font-family: 'Noto Sans KR';
font-weight:bold;
font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.8;
  letter-spacing: -0.5px;
  text-align: center;
  color: #212121;
`

const Information=styled.div`
margin-right:10px;
margin-left:10px;
display:flex;
width:250px;
height:100px;
border-radius: 10px;
  border: solid 1px #6f6f6f;
  flex-direction:column;
`
const InformationContainer=styled.div`
margin:0 auto;
display:flex;
width:100%;
justify-content:center;
`
const Su=styled.span`
margin-top:23px;
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
 font-family: NIXGONB-Vb;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
`
const Img=styled.img`
width:16px;
margin:0px auto;
margin-top:8px;
margin-bottom:5px;
`
const Sub=styled.div`
  font-family: NIXGONM-Vb;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.08;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
    opacity:0.8;
`
export default function Today() {
    return (
        <Wrapper>
        <Text>TODAY</Text>
        <InformationContainer>
        <Information>
            <Su>
            12개
            </Su>
            <Img src={bar} alt=""/>
            <Sub>등록된 프로젝트 수</Sub>
        </Information>
        <Information>
            <Su>
                5개
            </Su>
            <Img src={bar} alt=""/>
            <Sub>진행중</Sub>

        </Information>
        <Information>
        <Su>
                2개
            </Su>
            <Img src={bar} alt=""/>
            <Sub>완료된 프로젝트 수</Sub>


        </Information>
        </InformationContainer>
        </Wrapper>
    )
}
