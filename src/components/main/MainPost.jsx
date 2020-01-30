import React, { Component } from 'react'
import main_imgae from '../../assets/imgs/mainImgae.png'
import styled from 'styled-components'

const Wrapper = styled.div`
width:100%;
height:845px;
background-color: #000000;
background-image:linear-gradient(
            rgba(0, 0, 0, 0.7) ,
            rgba(0, 0, 0, 0.7) 
          ), url(${main_imgae});
background-size:auto ;
background-repeat:no-repeat;
`
const Title = styled.span`
display:inline;

font-family:'Noto Sans KR';
font-size:${props => props.size};
color:${props => props.color};
vertical-align:bottom;
line-height:65px;
`

const Line = styled.div`

vertical-align:bottom;
display:flex;
justify-content:center;
`
const Lines = styled.div`
padding-top:20%;

`
const Sub = styled.div`
@font-face { font-family: 'NIXGONL-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONL-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
font-family: NIXGONL-Vb;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: -0.5px;
  text-align: center;
  color: #e0e0e0;
    margin-top:1%;
    opacity:0.7;
`

const Submit = styled.div`
text-decoration:none;
display:flex;

font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 600;
    border-radius:7px;
    letter-spacing: -0.3px;
    color:${props => props.backgroundcolor};
background-color:${props => props.color};
width: 173px;
  height: 40px;
  text-align:center;
    justify-content:center;
    align-items:center;
    box-sizing:border-box;
`
const Submits = styled.div`
display:flex;
text-align:center;
justify-content:center;
margin-top:2%;
`
export default class MainPost extends Component {
  render() {
    return (
      <Wrapper >
        <Lines>
          <Line>
            <Title size='56px' color='#ffffff' >IT Agency{'\u00A0'}</Title>   <Title size='43px' color='#ffffff'>는 </Title> <Title className='counter' size='60px' color='#ef4f80' >{this.props.user}</Title> <Title size='42px' color='#ffffff'>명의 파트너와 함께 합니다</Title>
          </Line>
          <Line>
            <Title size='49px' color='#ffffff'>당신만의{'\u00A0'}</Title> <Title size='57px' color='#ef4f80'>아이디어</Title> <Title size='49px' color='#ffffff'>를 실현해 보세요</Title>
          </Line>
        </Lines>
        <Sub>웹 개발, 어플리케이션 개발, 웹 디자인, 일반 소프트웨어 개발, 게임, 쇼핑몰·커머스 등</Sub>

        <Submits>
          <Submit href='/counsel' family=' Noto Sans KR' color='#ef4f80'  backgroundcolor='#e0e0e0' style={{ marginRight: "21px" }}>무료 프로젝트 등록</Submit>
          <Submit href='/register' family='NIXGONB-Vb' color='#212121' backgroundcolor='#e0e0e0'>파트너신청</Submit>
        
        </Submits>

            </Wrapper >
        )
  }
}
