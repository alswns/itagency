import React from 'react'
import styled from 'styled-components'
import bar from '../../assets/imgs/bar.png'
import star from '../../assets/imgs/star.svg'

import hands from '../../assets/imgs/hands.svg'
import Logo_gray from '../../assets/imgs/Logo_gray.png'
import green from '../../assets/imgs/green.svg'
import green1 from '../../assets/imgs/green1.svg'
import ReviewContainer from './ReviewContainer'
const Img = styled.img`
margin: 0 auto;
display:flex;
width:30px;
height:5px;
margin-bottom:15px;
`
const Sub = styled.div`
 font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.33;
  letter-spacing: 0.3px;
  text-align: center;
  color: #6f6f6f;
  margin-bottom:29px;
`
const Title = styled.div`

 margin-top:250px;
  font-family: NIXGONB-Vb;
  font-size: 35px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
  margin-bottom:15px;

`

const Circle=styled.div`
width:237px;
height:237px;
border-radius:100%;
background:#f3f3f3;
position:relative;

`
const CircleIcone=styled.img`

`
const CircleText=styled.span`
font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #6f6f6f;
`

const CircleSub=styled.span`
font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
`
const Mid=styled.div`
width:100%;
margin:0 auto;
position:absolute;
top:${props=>props.top};
text-align:center;
`
const Mids=styled.div`
width:100%;
margin:0 auto;
position:absolute;
top:${props=>props.top};
text-align:center;
height:30px;
`
const Bar=styled.img`
margin: auto;
display:flex;
width:15px;
height:3px;
margin-bottom:15px;
justify-content:center;
flex-direction:column;
`
const CircleContainer=styled.div`

display:flex;
width:508px;
justify-content:space-between;
margin:0 auto;
`
const Leap=styled.img`
justify-content:end;
float:inline-end;
position:absolute;
bottom: 0px;
z-index:30;


`
const Container=styled.div`
width:590px;
position:relative;
height:245px;
margin:0 auto;
margin-bottom:61px;
`
const Logo=styled.img`


`
const MidLogo=styled.div`
position:absolute;
bottom:0px;
width:100%;
text-align:center;
`
export default function Review() {
    return (
        <div>
            <Title>아이티 에이전시 이용후기</Title>
            <Img src={bar}></Img>
                <Sub>클라이언트님들이 직접 작성한 후기를 확인하세요.</Sub>
                <Container>
                    <Leap style={{left:'0px'}} src={green} alt=""/>
                <CircleContainer>
                <Circle>
                        <Mid top='77px'>
                        <CircleIcone src={star}></CircleIcone>
                        </Mid>
                        <Mid top='120px'>
                        <CircleText>아이티 에이전시 평균 만족도</CircleText>
                        </Mid>
                        <Mids top='146px' >
                        <Bar src={bar}></Bar>

                        </Mids>
                        <Mid top='153px'>
                        <CircleSub>4.5점</CircleSub>
                        </Mid>
                    </Circle>

                    <Circle>
                        <Mid top='77px'>
                        <CircleIcone src={hands}></CircleIcone>
                        </Mid>
                        <Mid top='120px'>
                        <CircleText>체결된 계약</CircleText>
                        </Mid>
                        <Mids top='146px' >
                        <Bar src={bar}></Bar>

                        </Mids>
                        <Mid top='153px'>
                        <CircleSub>1,021개</CircleSub>
                        </Mid>
                    </Circle>
                    </CircleContainer>
                    <Leap style={{right:'0px'}} src={green1} alt=""/>
                    <MidLogo>
                    <Logo src={Logo_gray}></Logo>
                    </MidLogo>
                    </Container>
                    
                    <ReviewContainer/>
        </div>
    )
}
