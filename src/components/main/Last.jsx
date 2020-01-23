import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/imgs/Logo_white.png'
const Wrapper=styled.div`
width: 100%;
  height: 294px;
  background-color: #212121;
  display:flex;
  flex-direction:column;
  padding-left:11.4%;;
  box-sizing:border-box;
`
const Logo=styled.img`
margin-top:35px;
margin-left:50px;
`
const Text=styled.span`
margin-left:50px;
margin-top:29px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: -0.28px;
  text-align: left;
  color: #e0e0e0;
`

export default function Last() {
    return (
       <Wrapper>
           <div>
           <Logo src={logo}/>
           </div>

           
           <Text>
           IT AGENCY는 통신판매중개자이며 통신판매 당사자가 이닙니다. 서비스 관련 문의는 해당 전문업체에 해주시기 바랍니다.  <br></br>
ITAGENCY의 사전 서면 동의 없이 해당 사이트의 일체의 정보, 콘텐츠 및 UI 등을 상업적 목적으로 전재, 전송 스크래핑 등 무단 사용하실 수 없습니다.<br></br>
<br></br>
(주)ICAGENCY 대표:김연수<br></br>
사업자: 202-32-18830<br></br>
통신판매: 제 2019-용인처인-0567호<br></br>
고객센터: 010-3662-3206 / 070-7893-3155<br></br>
이메일: ejsxpatm123@naver.com<br></br>
주소: 경기도 용인시 처인구 경안천로112<br></br>
           </Text>
       </Wrapper>
    )
}
