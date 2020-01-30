import React from 'react'
import styled from 'styled-components'
import no_star from '../../assets/imgs/star/star_empty.svg'
import half_star from '../../assets/imgs/star/star_half.svg'
import full_star from '../../assets/imgs/star/star_full.svg'
const Wrapper= styled.div`
margin:0;
width: 530px;
  height: 160px;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  position:relative;
  
`
const Title=styled.div`
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
font-family: NIXGONB-Vb;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
`
const Kind=styled.div`
font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: right;
  color: #4f4f4f;
`
const Text=styled.div`
position:absolute;
left:20px;
right:20px;
top:72px;
font-family: 'Noto Sans KR';
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: -0.3px;
  text-align: left;
  color: #4f4f4f;
`
const Cost=styled.div`


font-family: NIXGONB-Vb;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.34px;
  text-align: left;
  color: #4f4f4f;
`
const Name=styled.div`
 font-family: 'Noto Sans KR';
 font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #4f4f4f;
`
const Pink=styled.span`
color:#ef4f80;
`
const Wrap=styled.div`
position:absolute;
top:46px;
left:20px;
display:flex;
`
const Star =styled.img`

  
`
const Stars=styled.div`
display:flex;
`
function numberWithCommas(x) {
    if(x===undefined)
        return 0
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function star(x){
      let i =0;
      let back=[]
    if(x%2===0){
    
        
        for(i=0;i<x/2;i++){
            back.push(<Star src={full_star}></Star>)
        }
        for(i=x/2;i<5;i++){
            back.push(<Star src={no_star}></Star>)
        }
        
        
    }else{
        x=x-1
        for(i=0;i<x/2;i++){
            back.push(<Star src={full_star}></Star>)
        }
        back.push(<Star src={half_star}></Star>)
        for(i=x/2;i<4;i++){
            back.push(<Star src={no_star}></Star>)
        }
    }
    return back

  }
const Div=styled.div`
position:absolute;
top:20px;
display:flex;
width:490px;
margin:0px 20px;
`
const Align=styled.div`
display:flex;

`
const Flex=styled.div`
  flex:1;
`
const Line=styled.div`
width:0px;
height:20px;
border:1px solid #e0e0e0;
margin: 0px 6px;
`
export default function ReviewItem(props) {
    return (
        <Wrapper>
          <Div>
          <Align>
              <Title>{props.project_name}</Title>
              <Line/>
            <Stars>
            {
                star(props.starts).map(res=> {return res})
            }
            </Stars>
            </Align>
            <Flex></Flex>
            

            <Cost>\ {numberWithCommas(props.cost)}원</Cost>
            </Div>
            <Wrap>
            <Kind>{props.field} |</Kind>                
            <Name> {'\u00A0'}  <Pink>{props.owner_name}</Pink> 파트너</Name>
            </Wrap>
            <Text>{props.review}</Text>
        </Wrapper>
    )
}
