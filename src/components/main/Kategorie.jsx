import React from 'react'
import styled from 'styled-components'
import bar from '../../assets/imgs/bar.png'
import KategoriItem from './KategoriItem'

import sw개발 from '../../assets/imgs/sw개발.png'
import web개발 from '../../assets/imgs/web개발.png'
import mobile개발 from '../../assets/imgs/mobile개발.png'
import game개발 from '../../assets/imgs/game개발.png'
import ui디자인 from '../../assets/imgs/ui디자인.png'
import 영상제작 from '../../assets/imgs/영상제작.png'
import vr from '../../assets/imgs/vr.png'
import 시스템개발 from '../../assets/imgs/marketing.png'
import 사업 from '../../assets/imgs/사업.png'
import marketing from '../../assets/imgs/마케팅.png'


import document from '../../assets/imgs/icons/document.png'
import joystick from '../../assets/imgs/icons/joystick.png'
import market from '../../assets/imgs/icons/market.png'
import programming from '../../assets/imgs/icons/programming.png'
import sns from '../../assets/imgs/icons/sns.png'
import system from '../../assets/imgs/icons/system.png'
import ui from '../../assets/imgs/icons/ui.png'
import video from '../../assets/imgs/icons/video-camera.png'
import VR from '../../assets/imgs/icons/VR.png'
import web from '../../assets/imgs/icons/web.png'


const Title=styled.div`

 margin-top:250px;
  font-family: 'Noto Sans KR';
  font-size: 35px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
  margin-bottom:15px;

`
const Img =styled.img`
margin: 0 auto;
display:flex;
width:30px;
height:5px;
margin-bottom:15px;
`
const Sub=styled.div`
 font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.33;
  letter-spacing: 0.3px;
  text-align: center;
  color: #6f6f6f;
  margin-bottom:106.6px;
`
const Wrap=styled.div`
display:flex;
margin:0 auto;
`
const Wrapper=styled.div`
margin-bottom: 161px;
`
const Wraps=styled.div`
margin: 0 auto;
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
`
export default function Kategorie() {
    return (
        <Wrapper>
            <Title>프로젝트 카테고리</Title>
        <Img src={bar}></Img>
        <Sub>어떤 프로젝트에 관심이 있으신가요?</Sub>
<Wraps>
        <Wrap>
        
        <div><KategoriItem text='시스템 개발'img={system} background={시스템개발}  ></KategoriItem></div>
        <div><KategoriItem text='SW 개발'img={programming} background={sw개발}></KategoriItem></div>
        <div><KategoriItem text='Web/쇼핑몰 개발'img={web} background={web개발}></KategoriItem></div>
        <div><KategoriItem text='어플리케이션 개발'img={sns} background={mobile개발}></KategoriItem></div>
        <div><KategoriItem text='게임 개발'img={joystick} background={game개발}></KategoriItem></div>
        </Wrap>
        <Wrap>
        <div><KategoriItem text='UI/UX 디자인' img={ui} background={ui디자인}></KategoriItem></div>
        <div><KategoriItem text='영상제작' img={video} background={영상제작}></KategoriItem></div>
        <div><KategoriItem text='VR/AR' img={VR} background={vr}></KategoriItem></div>
        <div><KategoriItem text='마케팅 서비스' img={market} background={marketing}></KategoriItem></div>
       <div> <KategoriItem text='사업 기획 및 제안서' img={document} background={사업}></KategoriItem></div>
        </Wrap>
        </Wraps>
        </Wrapper>
    )
}
