import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
width: 300px;
margin-left:15px;
`

const Top=styled.div`
width:100%;
height: 53px;
border: solid 1px #e0e0e0;
background-color: #ffffff;
font-family: NIXGONB-Vb,sans-serif;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.4px;
  text-align: left;
  color: #212121;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  padding-left:7%;
`
const Information=styled.div`
height: 250px;
  border: solid 1px #e0e0e0;
  background-color: #f3f3f3;
  display:flex;
  flex-direction:column;
  align-items:center;
    justify-content:space-around;
`
const Profile=styled.div`
width: 140px;
  height: 140px;
  border: solid 2.5px #e0e0e0;
  border-radius:100%;
  background-color: #ffffff;
  font-family: NIXGONB-Vb,sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #e0e0e0;
  display:flex;
justify-content:center;
align-items:center;
`
const Name=styled.span`
 font-family: NIXGONB-Vb,sans-serif;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.4px;
  text-align: left;
  color: #212121;
`
const Cl=styled.span`
    display:flex;
    height: 14px;
    font-family: NIXGONB-Vb,sans-serif;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: -0.26px;
    text-align: left;
    color: #212121;
  
`
const Pink=styled.span`
 font-family: NIXGONB-Vb,sans-serif;
  color: #ef4f80;
`
const Projects=styled.div`
  height: 150px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;

`
const Pro=styled.span`
  font-family: 'Noto Sans KR',sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: left;
  color: #212121;

`
const Gun=styled.span`
  font-family: NIXGONB-Vb,sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: right;
  color: #212121;
`
const Submit=styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height: 50px;
  background-color: ${props=>props.backgroundColor};
  font-family: NIXGONB-Vb,sans-serif;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: normal;
  text-align: center;
  color: ${props=>props.color};
  margin-top:10px;
  cursor:pointer;
`
export default function Client(props) {
    return (
        <Wrapper>
            <Top>클라이언트</Top>
            <Information>
            <Profile>Profile image</Profile>
            <Name>{props.client_name}</Name>
            </Information>
            <Projects>
                
            <div style={{display:'flex',justifyContent:'space-between',width:'80%',margin:'0 auto',marginTop:'15px'}}><Pro>프로젝트 등록</Pro><Gun><Pink>{props.client_num_of_projects}</Pink>건</Gun></div>
            <div style={{display:'flex',justifyContent:'space-between',width:'80%',margin:'0 auto',marginTop:'15px'}}><Pro>프로젝트 계약</Pro><Gun><Pink>{props.client_num_of_contract}</Pink>건</Gun></div>
            <div style={{display:'flex',justifyContent:'space-between',width:'80%',margin:'0 auto',marginTop:'15px'}}><Pro>진행중인프로젝트</Pro><Gun><Pink>{props.client_num_of_progress}</Pink>건</Gun></div>
            <div style={{display:'flex',justifyContent:'space-between',width:'80%',margin:'0 auto',marginTop:'15px'}}><Pro>완료한 프로젝트</Pro><Gun><Pink>{props.client_num_of_success}</Pink>건</Gun></div>
            </Projects>
            {/* /client/mypage/project/taking */}
            {console.log(props.progress)}
            {(props.progress==0&&props.approve==0)&&<Submit color='#6f6f6f' backgroundColor='#e0e0e0' >검토중</Submit>}
            {(props.progress==0&&props.approve==1)&&<Submit color='white' backgroundColor='#ef4f80' onClick={props.sign}>프로젝트 지원하기</Submit>}

            {props.progress==1&&<Submit color='#6f6f6f' backgroundColor='#e0e0e0' >모집완료</Submit>}

            {(props.progress==2&&props.progress_percent!=100)&&<Submit color='white' backgroundColor='#ef4f80' >진행중</Submit>}
            {(props.progress==2&&props.progress_percent==100)&&<Submit color='white' backgroundColor='#ef4f80' onClick={props.Done}>완료하기</Submit>}
            
            {props.progress==3&&<Submit color='white' backgroundColor='#ef4f80' >작업종료</Submit>}
            <Submit color='#3c1e20' backgroundColor='#fce000'>담당자 카카오톡</Submit>
            <Submit color='white' backgroundColor='#212121' onClick={"tel:010-1231-1231"}>담당자 연락처</Submit>
        </Wrapper>
    )
}
