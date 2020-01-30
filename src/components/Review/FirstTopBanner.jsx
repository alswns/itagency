import React from 'react'
import styled from 'styled-components'
import Icon from '../main/Icon'
import upload from '../../assets/imgs/upload.svg'
import bar from '../../assets/imgs/bar.png'
import whitestar from '../../assets/imgs/whitestar.svg'
import green from '../../assets/imgs/green.svg'
import green1 from '../../assets/imgs/green1.svg'
import teach from '../../assets/imgs/teach.png'

const Wrapper = styled.div`
width:100%;
height:300px;
background-color: #ffc629;
display:flex;
position:relative;
`
const Leap=styled.img`
justify-content:end;
float:inline-end;
position:absolute;
bottom: 10px;
z-index:30;

`

const WrapperItem = styled.div`
    display:flex;  
    justify-content:center;
    padding-top:33px;
    flex:1;
    justify-content:space-between;
`
const Banner = styled.div`
height:85px;
`
const Ment = styled.span`
width:430px;
display:flex;
  font-family: 'Noto Sans KR';
  font-size: 50px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align:${props => props.align};
  color: #ffffff;
    white-space:pre;
    flex-direction:column;
`
const Bold = styled.span`
font-size:69px;
font-family: NIXGONB-Vb;
`
const Small = styled.span`
@font-face { font-family: 'NIXGONL-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONL-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
font-family:NIXGONL-Vb;
`
const Margin=styled.div`
display:flex;
height:300px;
width:200px;
`

const Title = styled.div`

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

const Circle=styled.img`
width:331px;
position:absolute;
top:169px;
left: 50%;
transform: translateX(-50%);
`
const CircleIcone=styled.img`

`
const CircleText=styled.span`
font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #6f6f6f;
`

const CircleSub=styled.span`
font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
`
const Mid=styled.div`
width:100%;
margin:0 auto;
position:absolute;
top:${props=>props.top};
text-align:center;
`
const Mids=styled.div`
width:100%;
margin:0 auto;
position:absolute;
top:${props=>props.top};
text-align:center;
height:30px;
`
const Bar=styled.img`
margin: auto;
display:flex;
width:15px;
height:3px;
margin-bottom:15px;
justify-content:center;
flex-direction:column;
`

export default function FirstTopBanner(props) {
    return (
        <>
            <Banner />
            <Wrapper>
                <Margin/>
                <WrapperItem>
                    <Ment align='left'>
                        <div><Bold>90%</Bold> <Small>이상의</Small> 만족감</div>
                        <div>아이티에이전시</div>
                    </Ment>
                    <span style={{ marginTop:'-10px' }}>
                    
                    <Icon height='52px' color='#212121' title={props.average + '점'} text='아이티 에이전시 평균 만족도' img={whitestar}  />

                    </span>
                    <Ment align='right' style={{marginTop:'30px'}}>
                        <Small>고객님 평균 만족도</Small>
                        <Small><Bold>{props.average}</Bold>/10</Small>
                    </Ment>
                </WrapperItem>
                <Margin/>
                    
                <Circle src={teach} alt=""/>
        
            </Wrapper>
        </>
    )
}
