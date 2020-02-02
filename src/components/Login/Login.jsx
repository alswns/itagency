import React from 'react'
import styled from 'styled-components'
import '../../input.css'
import back from '../../assets/imgs/arrow_back.svg'
import { Facebook, Naver } from '../../apis/Oauth'


const Title = styled.div`
width:100%;
  font-family: 'Noto Sans KR';
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
font-family: 'Noto Sans KR';
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
`
const It = styled.div`
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
margin-top:15px;
 font-family: 'Noto Sans KR';
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: -0.8px;
  text-align: center;
  color: #212121;
`
const Common = styled.div`
 font-family: 'Noto Sans KR';
  font-size: 17px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
`
const Commons = styled.div`
 font-family: 'Noto Sans KR';
  font-size: 17px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: center;
  color: #6f6f6f;
`
function Click(a) {


  let comm = document.getElementById('comm')
  let part = document.getElementById('part')
  if (comm == undefined)
    return
  if (a == 0) {
    part.style.color = '#212121'
    comm.style.color = '#6f6f6f'
    document.getElementById('left').style.opacity = 0;
    document.getElementById('right').style.opacity = 1;
  }
  else {
    comm.style.color = '#212121'
    part.style.color = '#6f6f6f'
    document.getElementById('left').style.opacity = 1;
    document.getElementById('right').style.opacity = 0;
  }
}
const LoginContainer = styled.div`
display:flex;
margin-top:50px;
`

const Line = styled.div`
width:100%;
height:0px;
margin-top:10px;
border: 1.5px solid black;
transition:0.1s;
`


const Lines = styled.div`
width:100%;
height:0px;
margin-top:10px;
opacity:0;
border: 1.5px solid black;
transition:0.2s;
`

const Group = styled.div`
display:flex;
flex-direction:column;

`
const Input = styled.input`
 width: 450px;
  height: 50px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: white;
  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  padding-left:15px;
  box-sizing:border-box;
  &:focus{
    outline:1.5px solid #212121;
    
  }
`
const Inputs = styled.div`
display:flex;
flex-direction:column;
margin-top:30px;
`
const Check = styled.input`
  
`
const Container = styled.div`

`
const Remember = styled.label`
margin-left:10px;
font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
  cursor:pointer;
`
const Button = styled.div`
cursor: pointer;
margin-top:15px;
 width: 450px;
  height: 50px;
  border-radius: 5px;
  background-color: ${props => props.color};
  border: solid 1px #212121;
  text-align:center;
`
const ButtonText = styled.div`
font-family: NIXGONB-Vb;
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
const MidlLine = styled.div`
border : 1px solid #6f6f6f;
margin: 0 60px;
margin-top:5%;

`
const Aswemble = styled.div`
display:flex;
text-align:center;
justify-content:center;
`
const OauthContainer = styled.div`
margin-top:109px;
display:flex;
flex-direction:column;
`
const Oauth = styled.div`
cursor: pointer;
margin-top:15px;
width: 381px;
  height: 50px;
  border-radius: 5px;
  background-color: ${props => props.back};
`
const OauthText = styled.div`
justify-content:center;
display:flex;
height:100%;
flex-direction:column;
font-family: 'Noto Sans KR';
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`
const Copy = styled.div`
margin-bottom:155px;
margin-top:123px;
 font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.24px;
  text-align: center;
  color: #212121;

`
const Pink = styled.span`
color:#ef4f80;
`
const Img = styled.img`
width:25px;
height:25px;
margin-left:60px;
margin-top:80px;
margin-bottom:60px;
cursor: pointer;
`

const Wrap = styled.div`
width: 450px;
  height: 50px;
  position:relative;
`
const Inner = styled.span`
display:flex;
top:18px;
left:15px;
position:absolute;
font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
  transition:0.2s;
`

const onFocus=(int)=>{
  let inner=document.getElementsByClassName('text')
  for(let i in inner){
    if(i==int){
      console.log(i)
      inner[i].style.top='5px';
      inner[i].style.fontSize='10px';
    }
  }
}
const onBlur=(int)=>{
  let inner=document.getElementsByClassName('text')
  for(let i in inner){
    if(i==int){
      console.log(i)
      inner[i].style.top='18px';
      inner[i].style.fontSize='16px';
    }
  }
}

export default function Login(props) {
  const [who,setWho]=React.useState(false)
  return (
    <Wrapper>
      <Img src={back} onClick={() => { window.location.href = '/' }}></Img>
      <Title><Pink>저렴</Pink>하게, <Pink>확실</Pink>하게, <Pink>안전</Pink>하게</Title>
      <Text>당신만의 아이디어를 <Pink>아이티에이전시</Pink>와 실현해보세요!</Text>
      <It>ITAGENCY 로그인</It>
      <Aswemble>
        <Container>
          <LoginContainer>
            <Group >
              <Common id='comm' onClick={() => {Click(1);setWho(false)}}  >일반 회원 로그인</Common>
              <Line id='left' />
            </Group>
            <Group style={{ marginLeft: '3%' }}>

              <Commons id='part' onClick={() => {Click(0);setWho(true)}} >파트너 로그인</Commons>
              <Lines id='right' />
            </Group>

          </LoginContainer>
          <Inputs>
            <Wrap>
              <label>
                <Input onChange={props.changeId} value={props.id} onBlur={()=>onBlur(0)}onFocus={()=>onFocus(0)}></Input>
                {props.id==''?< Inner className='text'>이메일 주소</Inner>: <Inner className='text'></Inner>}
                
                </label>
            </Wrap>

            <Wrap style={{ marginTop: '15px' }}>
              <label>
                
                <Input type='password' onChange={props.changePw} value={props.pw} onBlur={()=>onBlur(1)}onFocus={()=>onFocus(1)} ></Input>
                {props.pw===''?< Inner className='text'>비밀번호</Inner>: <Inner className='text'></Inner>}
              </label>

            </Wrap>
          </Inputs>
          <div style={{ marginTop: '10px' }}>
            <Check onClick={props.setChecked} type='checkbox' className='red' id='check'></Check>
            <Remember for='check'>내정보 기억하기</Remember>

            <Remember style={{ marginLeft: "180px" }}>아이디</Remember>
            <Remember>|</Remember>
            <Remember onClick={()=>window.location.href='/findPW'}>비밀번호 찾기</Remember>
          </div>
          <Button color='#212121'> <ButtonText color='#ffffff' onClick={()=>props.login(who)}>로그인</ButtonText></Button>
          <Button color='#ffffff'><ButtonText color='#212121' onClick={() => { window.location.href = '/register' }}>회원가입</ButtonText> </Button>
        </Container>

        <MidlLine></MidlLine>
        <OauthContainer>
          <Oauth back='#3b5998' onClick={Facebook}><OauthText>Facebook으로 로그인</OauthText></Oauth>
          <Oauth back='#f44336' ><OauthText>Google으로 로그인</OauthText></Oauth>
          <Oauth back='#2db400' onClick={Naver}><OauthText>NAVER으로 로그인</OauthText></Oauth>
        </OauthContainer>

      </Aswemble>
      <Copy>Copyright ⓒ 2019 ITAGENCY Inc. All rights reserved</Copy>
    </Wrapper>
  )
}
