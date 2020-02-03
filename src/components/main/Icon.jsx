import React from 'react'
import styled from 'styled-components'
import tree from '../../assets/imgs/월계수.svg'

const Wrapper=styled.span`
box-sizing:border-box;
height:28px;
display:flex;
flex-direction:column;
height:100%;
align-items: center;


`
const Img=styled.img`
margin-top:22px;
height:${props=>props.height};
`
const Main=styled.span`


`
const Sub=styled.span`
font-family: 'Noto Sans KR',sans-serif;

  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-top:10px;
`
const Line=styled.hr`
margin-top:8px;
width:10px;
height:3px;
background:white;
display:flex;
border:0;
z-index:999;
margin-bottom:0px;
`
const Span=styled.span`
margin-top:10.3px;
display:flex;
height:20px;
font-family: ''Noto Sans KR'';
  font-size: 17px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.94;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`



export default function Icon(props) {
    return (
        <Wrapper>
            <Img height={props.height} src={props.img||tree}></Img>


            
            {/* <Main className='counter'>{props.title}</Main> */}
            <Sub style={{color:props.color}} >{props.text}</Sub>
            <Line style={{background:props.color,color:props.color}}/>
            <Span>
            <Main style={{color:props.color}} className='counter'>{props.title}</Main>
            {props.plus}
            </Span>
        </Wrapper>
    )
}




