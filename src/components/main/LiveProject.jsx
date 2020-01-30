import React from 'react'
import styled from 'styled-components'
import ProjectContainer from './ProjectContainer'
import Today from './Today'
const Bold = styled.div`
margin-top:81px;
@font-face { font-family: 'NIXGONM-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONM-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
font-family: NIXGONB-Vb;
  font-size: 35px;
  font-weight: normal;
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
font-family: NIXGONM-Vb;
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
font-family: NIXGONM-Vb;
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
    margin-left:80.3%;
    cursor:pointer;
`
const Wrapper = styled.div`
width: 100%;

`
export default function LiveProject(props) {
    return (
        <Wrapper>
          {console.log(props)}
            <Bold>실시간 프로젝트</Bold>
            <Sub>가장 최근에 아이티에이전트에 등록된 프로젝트가 올라옵니다.</Sub>
            <Regi onClick={()=>window.location.href='/project'}>프로젝트 보러가기</Regi>
            <ProjectContainer projects={props.projects}/>
            <Today today_registered_project={props.today_registered_project}  ing={props.ing} today_finished_project={props.today_finished_project}></Today>
        </Wrapper>
    )
}
