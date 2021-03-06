import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BannerDesign } from '../apis/Style'
import Service from './Service'


const Wrapper = styled.div`
position:fixed;
display:flex;
background:rgba(0,0,0,0);
top:0px;
right:0px;
left:0px;
background-color: ${props => props.back};
z-index:9999;

`
const Logo = styled.img`
width:136px;
height:40.1px;
margin-left:3.8%;
`
const Link_ul = styled.ul`

display:flex;
margin:0px auto;
width:50%;
height:85px;
justify-content: space-between;
& a{
  font-family: 'Noto Sans KR',sans-serif;
  font-size: 18px;
  color: ${props => props.color};
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

const Auth = styled.span`
cursor:pointer;
font-family: 'Noto Sans KR',sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: normal;
  text-align: left;

`
const Middle = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-left:68px;
`
const SetMid = styled.div`

  display:flex;
  align-items:center;
  width:180px;
  justify-content:space-between;
  font-family: 'Noto Sans KR',sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  margin-right:3.6%;
  color:${props => props.color};

`
const Pink=styled.span`
color:#ef4f80;
`
function Banner(props) {
    const [service,setService]=React.useState(false)
    return (
        <>
        <Wrapper back={props.back}>
            <Middle>
                <Logo src={props.img} alt="logo_img" onClick={() => window.location.href = '/'} />
            </Middle>
            <Link_ul color={props.color}>
                <Link_li className='banner_li' id='상담하기'  ><Link to='/counsel' style={{ textDecoration: 'none' }} >상담하기</Link></Link_li>
                <Link_li className='banner_li' id='프로젝트' ><Link to='/project' style={{ textDecoration: 'none' }}>프로젝트</Link></Link_li>
                <Link_li className='banner_li' id='이용후기' ><Link to='/review' style={{ textDecoration: 'none' }}>이용후기</Link></Link_li>
                <Link_li className='banner_li' id='포트폴리오' ><Link to='/portfolio' style={{ textDecoration: 'none' }}>포트폴리오</Link></Link_li>
                <Link_li className='banner_li' id='서비스' ><Link style={{ textDecoration: 'none' }} onClick={()=>setService(!service)}>{service||'서비스 전체보기'}{service&&'닫기'}</Link></Link_li>
            </Link_ul>

            <SetMid color={props.color}>

            {props.user==='guest'||props.user===''?
            <>
                <Auth onClick={() => { window.location.href = '/login' }}> 로그인</Auth>
                |
                </>
                :
                <div style={{width:'100px',textAlign:'right'}}>
                <span style={{cursor:'pointer'}}  onClick={()=>{
                    window.location.href=`/${window.localStorage.getItem('what')}`
                }}>마이페이지</span><br/>
                <Pink>{props.user}님</Pink>
                </div>
                }
                 {props.user==='guest'||props.user===''?
            <Auth onClick={() => { window.location.href = '/register' }} >회원가입 </Auth>      
                :
                <Auth onClick={() => { window.location.reload();window.localStorage.removeItem('token')}} >로그아웃 </Auth>

                }

            </SetMid>
        </Wrapper>
        {service&&<Service></Service>}
            </>
    )
}

export default Banner
