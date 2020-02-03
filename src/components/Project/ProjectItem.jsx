import React from 'react'
import styled from 'styled-components'
import progress0 from '../../assets/imgs/progress0.svg'
import progress1 from '../../assets/imgs/progress1.svg'
import progress2 from '../../assets/imgs/progress2.svg'
const Wrapper=styled.div`
  width: 1076px;
  height: 220px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  border: solid 1.5px white;
    position:relative;
    margin-top:10px;
    &:hover{
  border: solid 1.5px #ef4f80;
}
`
const Kind=styled.span`
position:absolute;
top:15px;
left:20px;
font-family:  'Noto Sans KR',sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #6f6f6f;
`
const Title=styled.span`
position:absolute;
top: 39px;
left:20px;
font-family: 'Noto Sans KR',sans-serif;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.4px;
  text-align: left;
  color: #ef4f80;
`
const Status=styled.span`
  font-family:  'Noto Sans KR',sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #ef4f80;
  top:15px;
  left:655px;
  position:absolute;
`
const Line=styled.div`
height:0px;
border: 1px solid  #f3f3f3;
position:absolute;
top:70px;
left:20px;
width:830px;
`
const Text=styled.span`
position:absolute;
top:80px;
left:20px;
height: 61px;
display:flex;
width: 831px;
word-break:break-all;
overflow:hidden;
  font-family:  'Noto Sans KR',sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height:2;
  letter-spacing: -0.3px;
  text-align: left;
  color: #6f6f6f;
`
const Dday=styled.span`
top:15px;
left:814px;
position:absolute;
font-family: NIXGONB-Vb,sans-serif;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.3px;
  text-align: left;
  color: #212121;
`
const Container=styled.span`
overflow:hidden;
padding:15px 20px;
 border: solid 1px #e0e0e0;
  background-color: #ffffff;
  font-family:  'Noto Sans KR',sans-serif;
  font-size: 15px;
  font-weight:600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;  
  color:rgba(15,15,15,0.9);
  position:absolute;
  top:160px;
  left:${props=>props.left};
`
const Name=styled.span`
  font-family:  'Noto Sans KR',sans-serif;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: -0.26px;
  text-align: left;
  color: #212121;
  position:absolute;
  top:31px;
  left:893px;
`
const Up=styled.span`
color:#ef4f80;
font-size:23px;
font-weight:600;

`
const Lines=styled.div`
width:150px;
height:0;
border:1px solid #f3f3f3;
position:absolute;
top:70px;
left:893px;
`
const SeContainer=styled.span`
padding:5px 10px;
font-family:  'Noto Sans KR',sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #212121;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
position:absolute;
left:893px;
top:${props=>props.top};
`
const Img=styled.img`
top:35px;
left: 681px;
position: absolute;
width:180px;
`
const New=styled.div`
width: 54px;
  height: 17px;
  background-color: #ef4f80;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: -0.24px;
  text-align: left;
  color: #ffffff;
  font-family:'Noto Sans KR',sans-serif;
  display:flex;
  justify-content:center;
  align-items:center;
`
const 모집=styled.div`
width: 54px;
  height: 17px;
  background-color: #8f4fef;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: -0.24px;
  text-align: left;
  color: #ffffff;
  font-family:'Noto Sans KR',sans-serif;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Div=styled.div`
position:absolute;
bottom:0px;
display:flex;
`
const thounsond=(int)=>{
  if(int>=1000000)
  return parseInt(int/10000)+'만'
  return int

}

export default function ProjectItem(props) {
    return (

        <Wrapper onClick={props.onClick}>
          
          {console.log()}
            <Kind>{props.res.field}</Kind>
            {props.res.progress==0?<Img src={progress0}></Img>:''}
            {props.res.progress==1?<Img src={progress1}></Img>:''}
            {props.res.progress==2?<Img src={progress2}></Img>:''}
            
            <Title>{props.res.project_name}</Title>
            <Status>
            {props.res.progress==0?'신청진행중':''}
            {props.res.progress==1?'신청마감':''}


            </Status>
            <Dday>D-{parseInt( (props.res.register_deadline*1000-new Date())/86400553)}</Dday>
            <Text>{props.res.description}</Text>
            <Line></Line>
            <Container style={{width:'133px'}} left='20px'>희망금액 {thounsond(props.res.cost)}원</Container>
            <Container left='206px'>진행기간 {props.res.days}일</Container>
            <Container left='343px'>등록일  {new Date((props.res.register_time)*1000).toLocaleDateString()}</Container>
            <Container left='517px'>모집 마감일 {new Date((props.res.register_deadline)*1000).toLocaleDateString()}</Container>
            <Container left='721px'>지원수 {props.res.num_of_applicants}명</Container>
            <Name><Up>{props.res.client_name}</Up> 님</Name>
            <Lines></Lines>
            <SeContainer top='75px'>지역 {props.res.location} </SeContainer>
            <SeContainer top='120px'>사전미팅 
            {props.res.meeting==0?' 카톡 및 전화':''}
            {props.res.meeting==1?' 오프라인':''}
            {props.res.meeting==2?' 미팅':''}
            
            </SeContainer>
            <SeContainer top='165px'>희망파트너 
            {props.res.hope_partner==0?'    상관없음':''}
            {props.res.hope_partner==1?'    개인':''}
            {props.res.hope_partner==2?'    팀':''}
            {props.res.hope_partner==3?'    법인 사업자':''}
            {props.res.hope_partner==4?'    개인 사업자':''}
            </SeContainer>
          <Div>
            {new Date().toLocaleDateString()==new Date((props.res.register_time)*1000).toLocaleDateString()?<New>new</New>:''}
            {props.res.progress==0?<모집>모집중</모집>:''}
            </Div>
        </Wrapper>
    )
}
