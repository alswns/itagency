import React from 'react'
import back from '../../assets/imgs/arrow_back.svg'
import styled from  'styled-components'
import Goal from './Goal'
import rocket from '../../assets/imgs/rocket.svg'
import CircleIcon from './CircleIcon'
import Selection from './Selection'
import {checkPasswordPattern,samePw, checkPw, testCheck} from '../../apis/CheckForm'
import { Facebook } from '../../apis/Oauth'
const Title = styled.div`
width:100%;
  font-family: 'Noto Sans KR',sans-serif;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.04;
  letter-spacing: -0.5px;
  text-align: center;
  color: #212121;
`
const Text = styled.div`
margin-top:10px;
font-family: 'Noto Sans KR',sans-serif;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: -0.4px;
  text-align: center;
  color: #212121;
`
const Wrapper = styled.div`
margin : 0 auto;
margin-bottom:76px;
`
const It = styled.div`
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
margin-top:15px;
 font-family: 'Noto Sans KR',sans-serif;
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: -0.8px;
  text-align: center;
  color: #212121;
`
const Pink=styled.span`
color:#ef4f80;
`
const Img=styled.img`
width:25px;
height:25px;
margin-left:60px;
margin-top:80px;
margin-bottom:60px;
cursor: pointer;
`
const Container=styled.div`
display:flex;
margin-top:15px;
`
const Sub=styled.span`
 width: 68px;
 margin-right:5.2%;
font-family: 'Noto Sans KR',sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
  text-align:center;
  align-items:center;
  justify-content:center;
  display:flex;
`
const Input = styled.input`
 width: 409px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  box-sizing:border-box;
  padding-left:14px;
  
`
const Small=styled.input`
width: 310px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  box-sizing:border-box;
  padding-left:14px;
`
const Submit=styled.div`
cursor:pointer;
 width: 89px;
  height: 40px;
  background-color:${props=>props.back};
  text-align:center;
  border: solid 1px #212121;
  border-radius: 5px;
  margin-left:10px;
`
const SubmintSpan=styled.div`
height:100%;
display:flex;
flex-direction:column;
font-family: 'Noto Sans KR',sans-serif;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: center;
  color: ${props=>props.color};
  justify-content:center;
`
const Line =styled.div`

  width:410px;
  border: solid 1px #6f6f6f;
    opacity:0.5;
`
const Remember = styled.label`
 font-family: 'Noto Sans KR',sans-serif;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: center;
  color: #6f6f6f;
`
const Button = styled.div`
cursor: pointer;
margin-top:15px;
 width: 409px;
  height: 45px;
  border-radius: 5px;
  background-color: ${props => props.color};
  border: solid 1px #212121;
  text-align:center;
`
const Buttons=styled.div`
margin-right:5%;
margin-left:-2%;
justify-content:space-between;
align-items:center;
text-align:center;
display:flex;
flex-direction:column;
`
const ButtonText = styled.div`
font-family: NIXGONB-Vb,sans-serif;
height:100%;
justify-content:center;
display:flex;
flex-direction:column;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: center;
  color: ${props => props.color};
`
const Group=styled.div`
margin:0 auto;
margin-top:65px;
display:flex;
position:relative;
justify-content:center;
width:100%;

`
const LongLine=styled.div`
    height:550px;
  border: solid 1px #6f6f6f;
    opacity:0.5;
    margin: 0 5%;
`
const Ment=styled.div`
cursor:pointer;
font-family: 'Noto Sans KR',sans-serif;
  font-size: 17px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
`
const LoginButton=styled.div`
cursor:pointer;
  width: 273px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #ef4f80;
  background-color: #ffffff;
`
const OauthContainer=styled.div`
display:flex;
flex-direction:column;
`
const Oauth=styled.div`
cursor: pointer;
margin-top:15px;
width: 273px;
  height: 40px;
  border-radius: 5px;
  background-color: ${props=>props.back};
`
const OauthText=styled.div`
justify-content:center;
display:flex;
height:100%;
flex-direction:column;
font-family: 'Noto Sans KR',sans-serif;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`
const Form=styled.div`
`
const Explane=styled.div`
white-space:pre;
width: 386px;
  height: 66px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: -0.3px;
  text-align: center;
  color: #212121;
`



export default function Regist(props) {
    const [check,changeCheck]=React.useState(false)
    return (
        <Wrapper>
            
          <Img src={back} onClick={()=>{ window.location.href='/'}}></Img>
            <Title><Pink>저렴</Pink>하게, <Pink>확실</Pink>하게, <Pink>안전</Pink>하게</Title>
            <Text>당신만의 아이디어를 <Pink>아이티에이전시</Pink>와 실현해보세요!</Text>
            <It>ITAGENCY 로그인</It>
            <Group>
                <Form>
            <Container >
                <Sub>이용목적</Sub>
            <Goal a={true} title='클라이언트' text={`프로젝트를 의뢰할${'\n'}개인 또는 기업`}  className='goal' onClick={()=>{changeCheck(false);props.Change(0)}}></Goal>
            <Goal mar='0.5%' title='파트너'text={`프로젝트를 진행하는${`\n`}개인 또는 기업`} className='goal' onClick={()=>{changeCheck(true);props.Change(1)}}></Goal>
            </Container>
            <Container>
                <Sub >이름</Sub>
                <Input value={props.name} onChange={props.change} name='name'></Input>
            </Container>
            {check&&<>
            <Container>
                <Sub>연락처</Sub>
                <Small value={props.phone} name='phone' onChange={props.change} placeholder='연락처주소입력( - 없이 입력)'></Small>
                <Submit back='white'>
                <SubmintSpan color='#212121'>인증번호 요청</SubmintSpan>
            </Submit>
            </Container>
            <Container>
                <Sub></Sub>
                <Small></Small>
                <Submit back='#212121'>
                <SubmintSpan color='white'>확인</SubmintSpan>
            </Submit>
            </Container>
            </>}
            {!check&&<>
                <Container>
                <Sub>연락처</Sub>
                <Input value={props.phone} name='phone' onChange={props.change} placeholder='연락처주소입력( - 없이 입력)'></Input>

            </Container>
            </>}
           
            <Container>
                <Sub>비밀번호</Sub>
                <Input type='password' onBlur={()=>checkPw(props.pw,props.checkpw,props.checkChange)} value={props.pw} onChange={props.change} name='password' placeholder='영문 숫자 조합, 8자 이상 20자 이하 입력'></Input>
            </Container>
            <Container>
                <Sub/>
                {checkPasswordPattern(props.pw)}
            </Container>
            <Container>
                <Sub></Sub>
                <Input type='password' onBlur={()=>checkPw(props.pw,props.checkpw,props.checkChange)} value={props.checkpw} onChange={props.change} name='checkpw' placeholder='비밀번호 재입력'></Input>
            </Container>
            <Container>
                <Sub/>
                {samePw(props.pw,props.checkpw)}
            </Container>
            <Container>
                <Sub>이메일</Sub>
                <Small value={props.email} name='email' onChange={props.change} placeholder='이메일 입력'></Small>
                <Submit  back='#212121'>
                <SubmintSpan color='white' onClick={()=>props.sameEmail(check)}>중복체크</SubmintSpan>
            </Submit>
            </Container>
            <Container>
                <Sub>지역</Sub>
                <div style={{width:'400px',display:'flex',justifyContent:'space-between'}}>
                <Selection/>
                </div>
            </Container>
            <Container>
                <Sub></Sub>
            <Line/>
            </Container>
            <Container style={{justifyContent:'center'}}>
            <input type='checkbox' id='check' className='red' onClick={(e)=>testCheck(e,props.checkChange)}></input>
                    <Remember for='check'><Pink onClick={()=>window.location.href='/coffin'}>이용약관</Pink> 및 <Pink onClick={()=>window.location.href='/info'}>개인정보취급방침</Pink>에 동의 합니다.</Remember>
                    </Container>
                    <Container>
                    <Sub></Sub>
                    <Button color='#212121' onClick={()=>props.regi(check)}><ButtonText color='#ffffff'>회원가입</ButtonText></Button>
                    </Container>
                    </Form>
                    <LongLine/>


                    <Buttons>
                        <Ment>이미 계정이 있으신가요?</Ment>
                        <LoginButton onClick={()=>window.location.href='/login'}><ButtonText color='#ef4f80'>로그인</ButtonText></LoginButton>
                        <div>
                        <Ment>간편가입</Ment>
                        <OauthContainer>
            <Oauth back='#3b5998' onClick={Facebook}><OauthText>Facebook으로 로그인</OauthText></Oauth>
            <Oauth back='#f44336'><OauthText>Google으로 로그인</OauthText></Oauth>
            <Oauth back='#2db400'><OauthText>NAVER으로 로그인</OauthText></Oauth>
            </OauthContainer>
            </div>
            <CircleIcon img={rocket} text='WELCOME'></CircleIcon>
                    <Explane>ITAgency는 <b>실물보장 프로젝트</b>만 취급합니다.<br/>
<b>아이티 에이전시</b>는 파트너 및 소비자들의 입장 모두를 생각합니다<br/>
<b><Pink>아이티 에이전시</Pink>에 오신걸 환영합니다.</b></Explane>
                    </Buttons>
                    </Group>
            </Wrapper>
    )
}
