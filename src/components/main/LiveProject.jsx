import React from 'react'
import styled from 'styled-components'
import ProjectContainer from './ProjectContainer'
import bar from '../../assets/imgs/bar.png'

const Bold = styled.div`
margin-top:81px;

font-family: 'Noto sans Kr';
  font-size: 35px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
  font-weight:bold;
`
const Sub=styled.div`
margin-top:1.4%;
font-family: 'Noto Sans KR';
  font-size: 19px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.06;
  letter-spacing: 0.34px;
  text-align: center;
  color: #6f6f6f;

  margin-bottom:1%;
  
`
const Regi = styled.span`
font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: -0.3px;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align: left;
  color: #f3f3f3;
  background-color:#9f4fef;
  width: 155px;
  height: 35px;
  border-radius:18px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    margin-left:75.3%;
    cursor:pointer;
`
const Wrapper = styled.div`
width: 100%;
margin-bottom:300px;
`
const Img =styled.img`
margin: 10px auto;
margin-top:30px;
display:flex;
width:30px;
height:5px;
margin-bottom:15px;
`
export default function LiveProject(props) {
    return (
        <Wrapper>
            <Bold>실시간 프로젝트</Bold>            <Img src={bar}></Img>

            <Sub>가장 최근에 아이티에이전트에 등록된 프로젝트가 올라옵니다.</Sub>
            <Regi onClick={()=>window.location.href='/project'}>프로젝트 보러가기</Regi>
            <ProjectContainer projects={props.projects}/>
        </Wrapper>
    )
}
