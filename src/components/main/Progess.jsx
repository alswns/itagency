import React from 'react'
import styled from 'styled-components'
import bar from '../../assets/imgs/bar.png'
import CircleIcon from './CircleIcon'
import mesage from '../../assets/imgs/mesage.png'
import note from '../../assets/imgs/note.png'
import group from '../../assets/imgs/group.svg'
import devel from '../../assets/imgs/devel.svg'
import notebook from '../../assets/imgs/notebook.svg'



const Title=styled.div`

 margin-top:239px;
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
  font-size: 17px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.06;
  letter-spacing: 0.34px;
  text-align: center;
  color: #6f6f6f;
  margin-bottom:163.6px;
`
const Pink =styled.hr`
color:#ef4f80;
background:#ef4f80;
margin-bottom:15px;
height:2px;
border:0;
position:absolute;
top:53.6px;
width:100%;
z-index:-100;
`
const Wrap=styled.div`
margin-bottom:100px;
position:relative;
height:104px;
`
const Wra=styled.div`
width:80%;
display:flex;
margin:0 auto;
justify-content:space-around;
`
export default function Progess() {
    return (
        <>
        <Title>진행 프로세스</Title>
        <Img src={bar}></Img>
        <Sub>IT Agency에서 프로젝트를 수행하는 과정입니다.</Sub>
        <Wrap>
          <Wra>
        <CircleIcon img={mesage} text='1'main="프로젝트 상담"  />
        <CircleIcon img={note} text='2' main="프로젝트 구체화"/>
        <CircleIcon img={group} text='3'main="파트너 모집"/>
        <CircleIcon img={devel} text='4' main="개발 진행"/>
        <CircleIcon img={notebook} text='5'main="프로젝트 완료"/>
        </Wra>
        <Pink/>
        </Wrap>
        </>
    )
}
