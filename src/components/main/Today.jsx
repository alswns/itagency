import React from 'react'
import styled from 'styled-components'
import bar from '../../assets/imgs/bar.png'
import bar1 from '../../assets/imgs/bar1.svg'


const Wrapper = styled.div`
margin-top:31px;

`
const Text = styled.div`
margin-bottom:15px;
font-family: 'Noto Sans KR',sans-serif;
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

const Information = styled.div`
margin-right:10px;
margin-left:10px;
display:flex;
width:250px;
height:100px;
border-radius: 10px;
  border: solid 1px #6f6f6f;
  flex-direction:column;
`
const InformationContainer = styled.div`
margin:0 auto;
display:flex;
margin-bottom:100px;
width:100%;
justify-content:center;
`
const Su = styled.span`
margin-top:23px;
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
 font-family: NIXGONB-Vb,sans-serif;
  font-size: 25px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
`
const Img = styled.img`
width:16px;
margin:0px auto;
margin-top:8px;
margin-bottom:5px;
`
const Sub = styled.div`


font-family: 'Noto Sans KR',sans-serif;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
`
export default function Today(props) {
  // today_registered_project={props.today_registered_project}  today_finished_project={props.today_finished_project}
  return (
    <Wrapper>
      <Text>TODAY</Text>
      <InformationContainer>
        <Information>
          <Su>
            {props.today_registered_project}개
            </Su>
          <Img src={bar} alt="" />
          <Sub>등록된 프로젝트 수</Sub>
        </Information>
        <Information>
          <Su>
          {props.ing}개
            </Su>
          <Img src={bar} alt="" />
          <Sub>진행중</Sub>

        </Information>
        <Information>
          <Su>
          {props.today_finished_project}개
            </Su>
          <Img src={bar} alt="" />
          <Sub>완료된 프로젝트 수</Sub>


        </Information>
      </InformationContainer>
    </Wrapper>
  )
}
