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
position:absolute;
left:20px;
top:20px;
font-family: NIXGONB-Vb;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.06;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
`
const Kind=styled.div`
font-family: NIXGONM-Vb;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.92;
  letter-spacing: normal;
  text-align: right;
  color: #6f6f6f;
`
const Text=styled.div`
position:absolute;
left:20px;
right:20px;
top:72px;
font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: -0.3px;
  text-align: left;
  color: #6f6f6f;
`
const Cost=styled.div`
position:absolute;
top:20px;
left:396px;
font-family: NIXGONB-Vb;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.06;
  letter-spacing: -0.34px;
  text-align: left;
  color: #212121;
`
const Name=styled.div`
 font-family: NIXGONM-Vb;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.92;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
`
const Wrap=styled.div`
position:absolute;
top:44px;
left:20px;
display:flex;
`
const Star =styled.img`

  
`
const Stars=styled.div`
position:absolute;
display:flex;
left:203px;
top:28px;
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

export default function ReviewItem(props) {
    return (
        <Wrapper>
            <Stars>
            {
                star(props.starts).map(res=> {return res})
            }
            </Stars>
            <Title>{props.project_name}</Title>
            <Cost>\ {numberWithCommas(props.cost)}원</Cost>
            <Wrap>
            <Kind>{props.field} |</Kind>                
            <Name> {'\u00A0'}  {props.owner_name} 파트너</Name>
            </Wrap>
            <Text>{props.review}</Text>
        </Wrapper>
    )
}
