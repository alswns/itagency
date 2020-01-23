import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { BannerDesign } from '../apis/Style'


const Wrapper = styled.div`
position:absolute;
display:flex;
background:rgba(0,0,0,0);
top:0px;
right:0px;
left:0px;
background-color: ${props=>props.back};
`
const Logo = styled.img`
width:136px;
height:40.1px;
margin-left:3.8%;
`
const Link_ul = styled.ul`
@font-face { font-family: 'NIXGONM-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONM-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
display:flex;
margin:0px auto;
width:50%;
height:85px;
justify-content: space-between;
& a{
  font-family: 'NIXGONM-Vb';
  font-size: 18px;
  color: ${props=>props.color};
}
`
const Link_li = styled.li`
list-style:none;
width:163px;
height:100%;
text-align:center;
justify-content:center;
align-items:center;
display:flex;
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
text-decoration:none;

`
const Middle=styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-left:68px;
`
function Banner(props) {
    
    return (
        <Wrapper back={props.back}>
            <Middle>
            <Logo src={props.img} alt="logo_img" onClick={()=>window.location.href='/'} />
            </Middle>
            <Link_ul color={props.color}>
                <Link_li className='banner_li' id='상담하기'  ><Link to='/counsel' style={{ textDecoration: 'none' }} >상담하기</Link></Link_li>
                <Link_li className='banner_li' id='프로젝트' ><Link to='/project' style={{ textDecoration: 'none' }}>프로젝트</Link></Link_li>
                <Link_li className='banner_li' id='이용후기' ><Link style={{ textDecoration: 'none' }}>이용후기</Link></Link_li>
                <Link_li className='banner_li' id='포트폴리오' ><Link style={{ textDecoration: 'none' }}>포트폴리오</Link></Link_li>
                <Link_li className='banner_li' id='서비스' ><Link style={{ textDecoration: 'none' }}>서비스 전체보기</Link></Link_li>
            </Link_ul>


            <Auth color='#212121' backgroundcolor='#ffffff' href='/login'> 로그인</Auth>
            <Auth color='#ef4f80' backgroundcolor='#212121' style={{marginRight:'3.6%'}} href='/register'>회원가입 </Auth>


        </Wrapper>
    )
}

export default Banner
