import React from 'react'
import styled from 'styled-components'
import foot from '../../assets/imgs/office.png'

const Wrapper = styled.div `
position:relative;
width:100%;
height:200px;


object-fit: contain;

`
const Image = styled.div `
position:absolute;
width:100%;
background-image: linear-gradient(135deg, rgba(255, 130, 83, 0.7) 31%, rgba(255, 130, 83, 0.7) 97%),url(${foot});

opacity: 75%;
height:200px;
`
const Text = styled.div `
text-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  font-family: 'Noto Sans KR';
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
const Sing = styled.div `
width:250px;
height:45px;
margin: 0 auto;
  border-radius: 23px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  font-family: 'Noto Sans KR';
  font-weight:600;
  font-stretch: normal;
  font-style: normal;
  line-height: 45px;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  justify-content:center;
  cursor:pointer;
`

const Wrap = styled.div `
position:absolute;
top:121px;
width:100%;
height:45px;
justify-content:center;
`
export default function ThirdFooter() {
    return (
        <Wrapper>
            <Image></Image>
            <Text>저렴하고 빠르게 서비스를 만들고 싶으신가요?</Text>
            <Wrap>
                <Sing onClick={() => window.location.href = '/counsel'}>
                    프로젝트 상담하기
                </Sing>
            </Wrap>
        </Wrapper>
    )
}
