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
@font-face { font-family: 'NIXGONM-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONM-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
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
font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: center;
  color: #212121;
`

const Onclick=(event)=>{
    const target=event.target.parentNode.children
    for(let i of target){
        i.style.color='#212121'
        i.style.fontWeight='500'
    }
    event.target.style.color='#ef4f80'
    event.target.style.fontWeight='700'
}

export default function Kind() {
    return (
        <Top>
               <Link_ul>
                <Link_li onClick={Onclick}>최신등록순</Link_li>
                <Link_li onClick={Onclick}>마감임박순</Link_li>
                <Link_li onClick={Onclick}>예산규모순</Link_li>
                <Link_li onClick={Onclick}>지원적은순</Link_li>
            </Link_ul>
        </Top>
    )
}
