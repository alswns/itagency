import React from 'react'
import styled from 'styled-components'
import Icon from '../main/Icon'

import money from '../../assets/imgs/money.svg'
import ing from '../../assets/imgs/ing.svg'
import up from '../../assets/imgs/up.png'
import hand from '../../assets/imgs/hand.svg'

const Wrapper = styled.div`
width:100%;
height:300px;
background-color: rgb(41,148,255);      
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
  font-family: 'Noto Sans KR',sans-serif;
  font-size: 55px;
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
font-size:55px;
font-family: NIXGONB-Vb,sans-serif;
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
`
const Small = styled.span`
@font-face { font-family: 'NIXGONL-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONL-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
font-family:NIXGONL-Vb,sans-serif;
font-size:40px;
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



const Return =styled.span`
  font-family: 'Noto Sans KR';
`

export default function SecondTopBanner(props) {
    return (
        <>
            <Banner />
            <Wrapper>
                <Margin/>
                <WrapperItem>
                    <Ment align='left'>
                        <div><Bold>안전</Bold><Small>하고</Small> <Bold>신속</Bold><Small>한</Small> </div>
                        <div>아이티에이전시</div>
                    </Ment>
                    <Icon title={props.conclusion + '개'} text='체결된 계약' img={hand}  />
                    
                    <Ment align=   'right' style={{marginTop:'30px'}}>
                        <Small> <Return>아이티에이전시</Return> 소속</Small>
                        <Small>파트너수 1,002<Return>명</Return></Small>
                    </Ment>
                </WrapperItem>

                
                <Margin/>
                <Circle src={up}/>
                
                    
            </Wrapper>
        </>
    )
}
