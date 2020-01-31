import React from 'react'
import styled from 'styled-components'
import Item from './Item'
const Wrapper=styled.div`
width:100%;
margin-top:10px;
`
const List=styled.div`
    width:100%;
  height: 40px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
    box-sizing:border-box;
    display:flex;
`
const Items=styled.span`
font-size: 16px;
font-family:'Noto Sans KR';
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #5f5f5f;
  display:flex;
  height:100%;
  align-items:center;
  margin-left:50px;
`
const setColor=(event)=>{
  const projectsItem=document.getElementsByClassName('projectsItem')
  for(let i of projectsItem){
    i.style.color='#212121'
  }
  event.target.style.color='#ef4f80'
}


const Status=styled.span`
  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
  margin-top:30px;
  margin-left:51px;
  display:flex;
`
const Line = styled.div`
width:100%;
height:0px;
border:solid 1px #e0e0e0;
margin: 0 auto;
`

const Box = styled.div`

width: 100%;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  display:flex;
  flex-direction:column;
  padding-bottom:50px;
`
const SmallTitle = styled.span`
 font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
  display:flex;
  padding:20px 0px;
`
const FlexDIv = styled.div`
display:flex;
`
export default function Projects() {
    const [bannerInt,setBannerInt]=React.useState('0')
    return (
        <Wrapper>
        <List>
            <Items style={{color:'#ef4f80'}} onClick={(event)=>{setColor(event);setBannerInt('0')}} className='projectsItem'>진행중</Items>
            <Items onClick={(event)=>{setColor(event);setBannerInt('1')}} className='projectsItem'>완료</Items>
        </List>
            <Box>
                <Status>{bannerInt==0?'진행중':'완료' }</Status>
                <FlexDIv>
                    <SmallTitle style={{ marginLeft: '50px' }}>프로젝트 제목</SmallTitle>
                    <SmallTitle style={{ marginLeft: '233px' }}>희망금액</SmallTitle>
                    <SmallTitle style={{ marginLeft: '100px' }}>진행기간</SmallTitle>
                    <SmallTitle style={{ marginLeft: '50px' }}>마감일정</SmallTitle>
                </FlexDIv>
                <Line style={{ width: '88%' }}></Line>
                <>

             <Item title="제목" hope_money='희망금액' time='시간관련' deadLine='마감일정'/>
             </>
            </Box>
        </Wrapper>
    )
}
