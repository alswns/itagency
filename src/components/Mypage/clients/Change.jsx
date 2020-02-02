import React from 'react'
import styled from 'styled-components'
import InitInfor from './InitInfor'
const Wrapper = styled.div`
width:765px;
`

const IngList = styled.div`
display:flex;
width: 100%;
  height: 85px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  margin-bottom:15px;
  margin-top:30px;
`
const Title = styled.span`
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
 font-family: NIXGONB-Vb;
  font-size: 25px;
  font-weight:600;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
  margin-bottom:5px;
`
const Sub = styled.span`

 font-family: 'Noto Sans KR';
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: -0.34px;
  text-align: left;
  color: #6f6f6f;
`
const MyProject = styled.div`
 width: 95px;
  height: 21px;
  font-family: NIXGONB-Vb;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
  width: 100%;
  height: 50px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  box-sizing:border-box;
  padding:0 50px;
  padding-top:10px;
display:flex;
`
const Ment = styled.div`
display:flex;
flex-direction:column;
margin-top:22px;
margin-left:50px;
`

export default function Change(props) {
    return (
        <Wrapper>
            <IngList>
                <Ment>
                    <Title>마이페이지</Title>
                    <Sub>{props.name}님 안녕하세요
                    </Sub>
                </Ment>
            </IngList>
            <MyProject style={{marginBottom:'30px'}}>
            기본정보
            </MyProject>
            
            
            
             <InitInfor location={props.location} introduce={props.introduce} field={props.field} setPhone={props.setPhone} src={props.src} getImgData={props.getImgData} getData={props.getData} phone={props.phone} data={props.data}/>
           
        </Wrapper>
    )
}
