import React from 'react'
import styled from 'styled-components'

const Top=styled.div`
width: 1076px;
height: 48px;
border: solid 1px #e0e0e0;
background-color: #ffffff;
`
const Link_ul = styled.ul`
margin-left:60px;
display:flex;
width:40%;
text-align:center;
justify-content: space-between;
height:100%;

`
const Link_li = styled.li`
height:100%;
list-style:none;
text-align:center;
justify-content:center;
align-items:center;
display:flex;
font-family: 'Noto Sans KR',sans-serif;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: center;
  color: #212121;
`


export default function Kind(props) {
    return (
        <Top>
               <Link_ul>
                <Link_li id='0' onClick={props.setArrange}>최신등록순</Link_li>
                <Link_li id='1' onClick={props.setArrange}>마감임박순</Link_li>
                <Link_li id='2' onClick={props.setArrange}>예산규모순</Link_li>
                <Link_li id='3' onClick={props.setArrange}>진행기간순</Link_li>
            </Link_ul>
        </Top>
    )
}
