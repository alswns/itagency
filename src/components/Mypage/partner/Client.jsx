import React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/imgs/logo.png'
const Wrapper = styled.div`
width: 300px;
margin-left:15px;
overflow:hidden;
margin-top:30px;
`

const Top = styled.div`
width:100%;
height: 53px;
border: solid 1px #e0e0e0;
background-color: #212121;
font-family: NIXGONB-Vb;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.4px;
  text-align: left;
  color: #ffffff;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0px 25px;
  border-top-left-radius:15px;
  border-top-right-radius:15px;
`
const HowUse = styled.span`
@font-face { font-family: 'NIXGONM-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONM-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
font-family:  NIXGONM-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: center;
  color: #ffffff;
`
const Information = styled.div`
height: 130px;
  border: solid 1px #e0e0e0;
  background-color: #f3f3f3;
  display:flex;
  align-items:center;
  justify-content:space-around;
`
const Profile = styled.img`
width: 100px;
  height: 100px;
  border: solid 2.5px #e0e0e0;
  border-radius:100%;
  
`
const Name = styled.span`
 font-family: NIXGONB-Vb;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.4px;
  text-align: left;
  color: #212121;
`



const Kind = styled.span`
width:170px;
 height:20px;
 overflow:hidden;

font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.4px;
  color: #ef4f80;
`
const Wrap = styled.div`
display:flex;
flex-direction:column;
`
const IndividualInformation = styled.div`
  width: 50%;
  height: 75px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  position:relative;
`
const Big = styled.span`
position:absolute;
top:31%;
 width: 26px;
  height: 19px;
  font-family: NIXGONB-Vb;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: normal;
  text-align: center;
  color: #ef4f80;
  width:100%;
`
const Small = styled.span`
position:absolute;
top:64%;
 width: 28px;
  height: 17px;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: normal;
  text-align: center;
  color: #6f6f6f;
  width:100%;

`
const FlexDiv = styled.div`
display:flex;
`
const Myproject=styled.div`
margin-top:10px;
box-sizing:border-box;
padding-left:20px;
width:100%;
height: 50px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  font-family: NIXGONB-Vb;
  font-size: 15px;
  font-weight: 600;
  display:flex;
  align-items:center;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
`
const MyprojectInfo=styled.div`
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
display:flex;
flex-direction:column;
padding-bottom:25px;
`
const Kinds=styled.span`

font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  color: #212121;
  margin-left:20px;
`
const Gun=styled.span`
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: right;
  color: #212121;
margin-right:20px;
`
const Pink=styled.span`
color: #ef4f80;
font-family: NIXGONB-Vb;
`
const Container=styled.div`
margin-top:10px;
 width: 100%;
  border-radius: 10px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
`
const Items=styled.div`
 width: 290px;
  height: 40px;
  border-radius: 5px;
  background-color: #ffffff;
  font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
display:flex;
align-items:center;
padding-left:20px;
box-sizing:border-box;
margin:0 auto;
margin-top:5px;
cursor:pointer;
&:hover{
  background-color: #f3f3f3;
}
`

export default function Client(props) {
  return (
    <Wrapper>
      {console.log(props.src)}
      <Top> <span>{window.localStorage.getItem('what')=='client'?'클라이언트':'파트너'}</span> <HowUse>{window.localStorage.getItem('what')=='client'?'클라이언트':'파트너'} 이용방법 > </HowUse>  </Top>
      <Information>
        <Profile src={props.src||logo}></Profile>
        <Wrap>
          <Name>{props.name}</Name>
          <Kind>{props.auth}</Kind>
        </Wrap>
      </Information>
      <FlexDiv>

        <IndividualInformation>
          <Big>{props.data.contract||0}건</Big>
          <Small>계약</Small>
        </IndividualInformation>

        <IndividualInformation>
          <Big>{props.data.portfolio||0}개</Big>
          <Small>포트폴리오</Small>
        </IndividualInformation>
      </FlexDiv>

      <FlexDiv>

        <IndividualInformation style={{borderBottomLeftRadius:'15px'}}>
          <Big>{props.data.field==0?'개인프리랜서':''}
          {props.data.field==1?'팀프리랜서':''}
          {props.data.field==2?'개인사업자':''}
          {props.data.field==3?'법인사업자':''}
          
          </Big>
          <Small>분류</Small>
        </IndividualInformation>

        <IndividualInformation style={{borderBottomRightRadius:'15px'}}>
          <Big>{props.location}</Big>
          <Small>지역</Small>
        </IndividualInformation>
      </FlexDiv>
     
      <Myproject>
        내 프로젝트 현황
      </Myproject>
      <MyprojectInfo>
      <FlexDiv style={{marginTop:'14px',justifyContent:'space-between'}}>
        <Kinds>지원</Kinds> <Gun><Pink>{props.apply}</Pink>건</Gun>
      </FlexDiv>
      <FlexDiv style={{marginTop:'14px',justifyContent:'space-between'}}>
        <Kinds>계약</Kinds> <Gun><Pink>{props.contract}</Pink>건</Gun>
      </FlexDiv>
      <FlexDiv style={{marginTop:'14px',justifyContent:'space-between'}}>
        <Kinds>진행중</Kinds> <Gun><Pink>{props.num_of_progress}</Pink>건</Gun>
      </FlexDiv>
      <FlexDiv style={{marginTop:'14px',justifyContent:'space-between'}}>
        <Kinds>완료</Kinds> <Gun><Pink>{props.num_of_success}</Pink>건</Gun>
      </FlexDiv>
      <FlexDiv style={{marginTop:'14px',justifyContent:'space-between'}}>
        <Kinds>누적완료금액</Kinds> <Gun><Pink>{props.all_cost}</Pink>건</Gun>
      </FlexDiv>
      </MyprojectInfo>

      <Container>
        <Items className='going' onClick={()=>props.setTurn(0)}>내 프로젝트</Items>
        <Items className='going' onClick={()=>props.setTurn(1)}>포트폴리오</Items>
        <Items className='going' onClick={()=>props.setTurn(2)}>프로필 수정</Items>
        <Items className='going' onClick={()=>props.setTurn(3)}>내 프로필 미리보기</Items>
        {props.state==201&&<Items className='going' onClick={()=>props.setTurn(4)}>비밀번호 수정</Items>}
        
      </Container>


    </Wrapper>
  )
}
