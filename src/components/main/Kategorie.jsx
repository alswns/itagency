import React from 'react'
import styled from 'styled-components'
import bar from '../../assets/imgs/bar.png'
import KategoriItem from './KategoriItem'
const Title=styled.div`

 margin-top:250px;
  font-family: NIXGONB-Vb;
  font-size: 35px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
  margin-bottom:15px;

`
const Img =styled.img`
margin: 0 auto;
display:flex;
width:30px;
height:5px;
margin-bottom:15px;
`
const Sub=styled.div`
 font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.33;
  letter-spacing: 0.3px;
  text-align: center;
  color: #6f6f6f;
  margin-bottom:163.6px;
`
const Wrap=styled.div`
display:flex;
width:62.4%;
margin:0 auto;
`
const Wrapper=styled.div`
margin-bottom: 161px;
`
export default function Kategorie() {
    return (
        <Wrapper>
            <Title>프로젝트 카테고리</Title>
        <Img src={bar}></Img>
        <Sub>어떤 프로젝트에 관심이 있으신가요?</Sub>
        <Wrap>
            
        <div><KategoriItem></KategoriItem></div>
        <div><KategoriItem></KategoriItem></div>
        <div><KategoriItem></KategoriItem></div>
        <div><KategoriItem></KategoriItem></div>
        <div><KategoriItem></KategoriItem></div>
        </Wrap>
        <Wrap>
        <div><KategoriItem></KategoriItem></div>
        <div><KategoriItem></KategoriItem></div>
        <div><KategoriItem></KategoriItem></div>
        <div><KategoriItem></KategoriItem></div>
       <div> <KategoriItem></KategoriItem></div>
        </Wrap>
        </Wrapper>
    )
}
