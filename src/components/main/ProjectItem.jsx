import React from 'react'
import styled from 'styled-components'
import mac from '../../assets/imgs/mac.png'
import progress0 from '../../assets/imgs/progress0.png'
import progress1 from '../../assets/imgs/progress1.png'
import progress2 from '../../assets/imgs/progress2.png'
const Wrapper= styled.div`
width:250px;
height:400px;
border-radius:10px;
position: relative;
margin-right:28px;
background:url(${mac});
`
const Black=styled.div`
position:absolute;
border-radius:10px;
border-bottom-right-radius:23px;
left:9px;
top:7px;
width:241px;
height:400px;
background-color:black;
opacity:0.7;
z-index:0;
`
const Kind=styled.span`
position:absolute;
left:20px;
top:25px;
border:1px solid #ef4f80;
border-radius:18px;
padding:0px 15px;
z-index:999;
background:none;
font-family: NIXGONM-Vb;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.69;
  letter-spacing: -0.26px;
  text-align: left;
  color: #f3f3f3;
`
const Bold =styled.span`
position: absolute;
width:210px;
height:61px;
left:20px;
top:75px;
font-family: NIXGONM-Vb;
  font-size: 20px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -0.4px;
  text-align: left;
  color: #f3f3f3;
`
const Nickname=styled.span`
position: absolute;
left:20px;
top:140px;
 width: 110px;
  height: 14px;
  font-family: NIXGONM-Vb;
  font-size: 13px;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.69;
  letter-spacing: -0.26px;
  text-align: left;
  color: #f3f3f3;
`
const Line=styled.hr`
width: 210px;
position: absolute;
left:20px;
right:20px;
flex:1;
top:165.7px;
background-color:white;
color:white;
`

const Text=styled.span`
position:absolute;
font-family: NIXGONM-Vb;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.69;
  letter-spacing: -0.26px;
  text-align: left;
  color: #f3f3f3;
    left:20px;
    top:${props=>props.top};
`

const Content=styled.span`
position: absolute;
    left:81.3px;
    top:${props=>props.top};
 font-family: NIXGONM-Vb;
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.69;
  letter-spacing:1px;
  text-align: left;
  color: #f3f3f3;

`
const Button = styled.a`
display: block;

background-color:${props => props.back};
width:92px;
height:36px;
border-radius:7px;
font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 36px;
  letter-spacing: -0.3px;
  text-align: center;
  color: ${props=>props.color};
  left:${props=>props.left};
`
const Red=styled.span`
color:#ef4f80;
`
const Buttons=styled.div`

display:flex;
position:absolute;
width:90%;
height:36px;
  top:291px;
  left:15px;
  right:0px;
  justify-content: space-between;
  text-align:center;
  justify-content:center;
`
const Img=styled.img`
position:absolute;
left:51px;
right:47px;
top:371px;
z-index:1;
`
const Texts=styled.span`
position:absolute;
font-family: NIXGONM-Vb;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: -0.26px;
  text-align: left;
  color: #f3f3f3;
  top:352px;
  left:${props=>props.left};
`
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default function ProjectItem(props) {
  let button
  if(props.progress==0){
    button=<> 
    <Texts left='23px'>신청 진행 중</Texts>
    <Img src={progress0} alt=""/></>
  }
  else if(props.progress==1){
    button=<>
    <Texts left='106px'>진행 중</Texts>
     <Img src={progress1} alt=""/></>
  }
  else if(props.progress==2){
    button=<> 
    <Texts left='189px'>완료</Texts>
    <Img src={progress2} alt=""/></>
  }
    return (
        <Wrapper>
          <Black/>
            <Kind>{props.field}</Kind>
            <Bold>{props.project_name}</Bold>
            <Nickname><Red>{props.client_name}</Red> 클라이언트님</Nickname>
            <Line/>
            <Text top='185.8px'>예상비용</Text>
            <Text top='212.4px'>작업기간</Text>
            <Text top='238.9px'>지원자수</Text>
            <Content top='185.8px'>{numberWithCommas(props.cost)}원</Content>
            <Content top='212.4px'>{props.day}일</Content>
            <Content top='238.9px'>{props.num_of_applicants}명</Content>

          <Buttons>
            {props.progress||<Button back='yellow' left='31px' color='#212121' style={{marginRight:'10px'}}>작업신청</Button>}
            
            <Button back='black' left='128px' color='white'>내용보기</Button>
            </Buttons>
            {button}
        </Wrapper>
    )
}
