import React from 'react'
import styled from 'styled-components'
import logo from '../assets/imgs/Logo_white.png'
const Wrapper = styled.div`
position:fixed;
display:flex;
background:rgba(0,0,0,0);
top:20px;
right:0px;
left:0px;
`
const Logo = styled.img`
width:136px;
height:40.1px;
margin-left:3.8%;
`
const Link_ul = styled.ul`
@font-face { font-family: 'NIXGONM-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONM-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
display:flex;
margin:20px auto;
width:50%;
justify-content: space-between;
& a{

  font-family: 'NIXGONM-Vb';
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
}
`
const Link_li = styled.li`
list-style:none;

`

const Auth=styled.a`

color:${props=>props.backgroundcolor};
background-color:${props=>props.color};
width:85px;
border-radius:7px;
text-align:center;
line-height:85px;
font-family: 'Noto Sans KR';
font-weight:bold;
font-size:15px;
`

function Banner() {
    return (
        <Wrapper>
            <Logo src={logo} alt="logo_img" />

            <Link_ul>
                <Link_li><a >상담하기</a></Link_li>
                <Link_li><a>프로젝트</a></Link_li>
                <Link_li><a>이용후기</a></Link_li>
                <Link_li><a>포트폴리오</a></Link_li>
                <Link_li><a>서비스 전체보기</a></Link_li>
            </Link_ul>


            <Auth color='#212121' backgroundcolor='#ffffff'>로그인</Auth>
            <Auth color='#ef4f80' backgroundcolor='#212121' style={{marginRight:'3.6%'}}>회원가입 </Auth>


        </Wrapper>
    )
}

export default Banner
