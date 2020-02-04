import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/imgs/Logo_white.png'
const Wrapper=styled.div`
width: 100%;
  height: 294px;
  background-color: #212121;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  margin-top:200px;
  padding:50px 13%;
`
const Logo=styled.img`
`
const Text=styled.span`
margin-top:29px;
  font-family: 'noto sans kr';
  font-size: 14px;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: -0.28px;
  text-align: left;
  color: #e0e0e0;
  display:flex;
  justify-content:space-between;
`
const Phone=styled.span`
 font-family: NotoSansCJKkr;
  font-size: 28px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: -0.56px;
  text-align: center;
  color: #ffffff;
`
const Email=styled.span`
 font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.24px;
  text-align: center;
  color: #6f6f6f;
`
const Div=styled.span`
text-align:left;
display:flex;
flex-direction:column;
align-items:flex-end;
`
const Bl=styled.div`
width:1000px;
height:0px;
border: 1px solid black;
`
const Big=styled.span`
font-weight:500;
`
export default function Last() {
    return (
       <Wrapper>
           <div>
           <Logo src={logo}/>
           </div>

           
           <Text>
             <span>
           IT AGENCY는 통신판매중개자이며 통신판매 당사자가 이닙니다. 서비스 관련 문의는 해당 전문업체에 해주시기 바랍니다.  <br></br>
ITAGENCY의 사전 서면 동의 없이 해당 사이트의 일체의 정보, 콘텐츠 및 UI 등을 상업적 목적으로 전재, 전송 스크래핑 등 무단 사용하실 수 없습니다.</span>
<Div>
<Phone>010-3662-3206</Phone>
<Email>ejsxpatm123@naver.com</Email>
</Div>
</Text>
<Text>
  <span>
<Big>대표</Big> 김연수 <Big>사업</Big>자 202-32-18830 <Big>통신</Big>판매 제 2019-용인처인-0567호<br/>
<Big>고객</Big>센터 010-3662-3206 / 070-7893-3155 <Big>이메</Big>일 ejsxpatm123@naver.com <Big>주소</Big> 경기도 용인시 처인구 경안천로112
</span>
<Email>
Copyright ⓒ 2019 ITAGENCY Inc. All rights reserved
</Email>
           </Text>
       </Wrapper>
    )
}
