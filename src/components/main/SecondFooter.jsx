import React from 'react'
import styled from 'styled-components'
import foot from '../../assets/imgs/office.png'

const Wrapper = styled.div`
position:relative;
width:100%;
height:200px;
@font-face { font-family: 'NIXGONM-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONM-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }

object-fit: contain;
background:url(${foot});
`
const Image=styled.div`
position:absolute;
width:100%;
background-image: linear-gradient(135deg, #ffd739 31%, #70ffb7 97%);
opacity: 75%;
height:200px;
`
const Text=styled.div`
text-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  font-family: NIXGONM-Vb;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.5px;
  text-align: center;
  color: #ffffff;
  position:absolute;
width:100%;
top:50px;
`
const Sing=styled.div`
width:250px;
height:45px;
margin: 0 auto;
  border-radius: 23px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`
const Sub =styled.div`
cursor:pointer;

  width: 100%;
  height: 16px;
  font-family: NIXGONB-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 45px;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  justify-content:center;
`
const Wrap=styled.div`
position:absolute;
top:121px;
width:100%;
height:45px;
justify-content:center;
`
export default function SecondFooter() {
    return (
        <Wrapper>
          <Image></Image>
          <Text>전문분야로만 돈을 벌 수 있는 개발자가 되고 싶은가요?</Text>
          <Wrap>
          <Sing>
            <Sub onClick={()=>window.location.href='/register'}>파트너 신청하기</Sub>
          </Sing>
          </Wrap>
        </Wrapper>
    )
}
