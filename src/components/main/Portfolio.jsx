import React from 'react'
import styled from 'styled-components'
import bar from '../../assets/imgs/bar.png'
import arrow from '../../assets/imgs/arrow.png'

import one from '../../assets/imgs/portfolio/1.png'
import two from '../../assets/imgs/portfolio/2.png'
import three from '../../assets/imgs/portfolio/3.png'
import four from '../../assets/imgs/portfolio/4.png'
import five from '../../assets/imgs/portfolio/5.png'
import six from '../../assets/imgs/portfolio/6.png'
const Title = styled.div`

 margin-top:250px;
  font-family: NIXGONB-Vb;
  font-size: 35px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
  margin-bottom:15px;

`
const Img = styled.img`
margin: 0 auto;
display:flex;
width:30px;
height:5px;
margin-bottom:15px;
`
const Sub = styled.div`
 font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.33;
  letter-spacing: 0.3px;
  text-align: center;
  color: #6f6f6f;
  margin-bottom:29px;
`

const Wrapper = styled.div`
margin-bottom: 161px;
`
const Regi = styled.span`
font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: -0.3px;
  text-align: left;
  color: #f3f3f3;
  background-color:#9f4fef;
  padding:14px 19px;
  border-radius:18px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    margin-left:75.3%;
    
`
const ImgContainers = styled.div`
margin-top:35px;
`
const ImgContainer = styled.div`
margin:0 auto;
`
const Portfolio = styled.img`
 width: 433px;
  height: 240px;
  border-radius: 10px;

`

const Imgs=styled.img`
margin-left:71.3px;
transform:rotate(0deg);
-moz-transform: scaleX(-1); 
  -o-transform: scaleX(-1); 
-webkit-transform: scaleX(-1); 
     transform: scaleX(-1);   
`
const Container =styled.div`
display:flex;
justify-content:center;
`
const Div=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`
const Circle=styled.div`
width:237px;
height:237px;
border-radius:100%;
background:#f3f3f3;
position:relative;
`
const CircleIcone=styled.img`
position:absolute;
top:77px;
`
const CircleText=styled.span`
position:absolute;
top:120px;

`

const CircleSub=styled.span`
position:absolute;
top:120px;
`


export default function Portfolios() {
    return (
            <Wrapper>
                <Title>포트폴리오</Title>
                <Img src={bar}></Img>
                <Sub>아이티에이전시에서 완성한 프로젝트입니다.</Sub>
                <Regi>포트폴리오 보러가기</Regi>
                <Container>
                    <Div>
                <img src={arrow} alt="" style={{marginRight:'71.6px'}} />
                </Div>

                <ImgContainers>

                    <ImgContainer>
                        <Portfolio src={one}></Portfolio>
                        <Portfolio src={two}></Portfolio>
                        <Portfolio src={three}></Portfolio>
                    </ImgContainer>

                    <ImgContainer>
                        <Portfolio src={four}></Portfolio>
                        <Portfolio src={five}></Portfolio>
                        <Portfolio src={six}></Portfolio>
                    </ImgContainer>

                </ImgContainers>
                <Div>
                    <Imgs src={arrow} alt="" />
                    </Div>
                    </Container>
                    
            </Wrapper>
    )
}
