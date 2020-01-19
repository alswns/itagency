import React from 'react'
import styled from 'styled-components'
import tree from '../../assets/imgs/월계수.svg'

const Wrapper=styled.div`
box-sizing:border-box;
height:28px;
width:90px;
display:flex;
flex-direction:column;
height:100%;
align-items: center;
@font-face { font-family: 'NIXGONM-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONM-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }

`
const Img=styled.img`
margin-top:22px;
height:28px;
`
const Main=styled.span`
margin-top:10.3px;
font-family: NIXGONM-Vb;
  font-size: 17px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.94;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;

`
const Sub=styled.span`
margin-top:10px;
font-family: NIXGONM-Vb;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  opacity:0.8;
`
const Line=styled.hr`
margin-top:8px;
color:white;
width:10px;
height:3px;
background:white;
display:flex;
border:0;
z-index:999;
`
export default function Icons(props) {
    return (
        <Wrapper>
            <Img src={props.img||tree}></Img>
            <Main>{props.title}</Main>
            <Line/>
            <Sub>{props.text}</Sub>
        </Wrapper>
    )
}
