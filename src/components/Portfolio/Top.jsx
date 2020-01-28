import styled from 'styled-components'
import React from 'react'
import topbar from '../../assets/imgs/광고.png'
import big from '../../assets/imgs/돋보기.svg'

const Banner = styled.div `
height:85px;
`
const Wrapper = styled.div `
width:100%;
`
const Img = styled.img `
width:1341px;
margin: 0 auto;
margin-top:30px;
margin-bottom:25px;
`
const All = styled.div `
width:100%;
align-items:center;
justify-content:center;
display:flex;
`
const IngList = styled.div `
display:flex;
width:1341px;
height: 90px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  margin:0 auto;
  margin-bottom:15px;
`
const Title = styled.span `
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
 font-family: NIXGONB-Vb;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
  margin-bottom:5px;
`
const Sub = styled.span `
@font-face { font-family: 'NIXGONM-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONM-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
 font-family: NIXGONM-Vb;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: -0.34px;
  text-align: left;
  color: #6f6f6f;
`

const Ment = styled.div `
flex:1;
display:flex;
flex-direction:column;
margin-top:22px;
margin-left:50px;
`
const Search = styled.input `
    background-image:url(${big}); 
    background-position:260px 8px;
    background-repeat:no-repeat;
    
    width: 290px;
    height: 35px;
    border-radius: 5px;
    border: solid 1px #6f6f6f;
    background-color: #ffffff;
    font-family: NIXGONM-Vb;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: normal;
    text-align: left;
    color: #6f6f6f;
    padding:15px;
    box-sizing:border-box;
    margin:auto 0px;
    margin-right:55px;
`
export default function Top() {
    return (
        <Wrapper>
            <Banner/>
            <All>
                <Img src={topbar}></Img>
            </All>
            <IngList>
                <Ment>
                    <Title>포트폴리오</Title>
                    <Sub>아이티 에이전시에 클라이언트님이 의뢰하신 프로젝트 리스트입니다.
                    </Sub>
                </Ment>
                <Search placeholder='검색어를 입력하세요'></Search>
            </IngList>
        </Wrapper>
    )
}
