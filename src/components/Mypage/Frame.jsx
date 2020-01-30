import styled from 'styled-components'
import React from 'react'
import topbar from '../../assets/imgs/광고.png'
import big from '../../assets/imgs/돋보기.svg'
import Item from './Item'


const Wrapper = styled.div`
width:765px;

`
const IngList = styled.div`
display:flex;
width: 100%;
  height: 85px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  margin-bottom:15px;
  margin-top:30px;
`
const Title = styled.span`
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
 font-family: NIXGONB-Vb;
  font-size: 25px;
  font-weight:600;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
  margin-bottom:5px;
`
const Sub = styled.span`

 font-family: 'Noto Sans KR';
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: -0.34px;
  text-align: left;
  color: #6f6f6f;
`

const Ment = styled.div`
display:flex;
flex-direction:column;
margin-top:22px;
margin-left:50px;
`


const Mypeoject = styled.div`
 width: 95px;
  height: 21px;
  font-family: NIXGONB-Vb;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
  width: 100%;
  height: 50px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  box-sizing:border-box;
  padding-top:10px;
  padding-left:15px;

`
const Box = styled.div`

width: 100%;
  height: 250px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  border-radius:15px;
  margin-top:10px;
`
const Subtitle = styled.span`
  font-family: NIXGONB-Vb;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
  padding:17px 0px;
  display:flex;
  margin-left:50px;
`
const Line = styled.div`
width:100%;
height:0px;
border:solid 1px #e0e0e0;
margin: 0 auto;
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
const Text = styled.div`
overflow:hidden;
font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
  padding:15px 0;
`
export default function Frame(props) {
    return (
        <Wrapper>
            <IngList>
                <Ment>
                    <Title>마이페이지</Title>
                    <Sub>{props.name}님 안녕하세요
                    </Sub>
                </Ment>
            </IngList>
            <Mypeoject style={{paddingLeft:'50px'}}>
                내 프로젝트
            </Mypeoject>
            <Box>
                <Subtitle>지원 내역</Subtitle>
                <Line />
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

            <Box>
                <Subtitle>미팅 예정</Subtitle>
                <Line />
                <FlexDIv>
                    <SmallTitle style={{ marginLeft: '50px' }}>프로젝트 제목</SmallTitle>
                    <SmallTitle style={{ marginLeft: '233px' }}>희망금액</SmallTitle>
                    <SmallTitle style={{ marginLeft: '100px' }}>미팅일정</SmallTitle>
                </FlexDIv>
                <Line style={{ width: '88%' }}></Line>
                <>
                    <FlexDIv>
                        <Text style={{ marginLeft: '50px', width: '320px' }}>제목</Text>
                        <Text style={{ width: '157px' }}>희망금액</Text>
                        <Text style={{ width: '100px' }}>미팅일정</Text>
                    </FlexDIv>
                    <Line style={{ width: '88%' }}></Line>
                </>
            </Box>

            <Box>
                <Subtitle>계약 협의중</Subtitle>
                <Line />
                <FlexDIv>
                    <SmallTitle style={{ marginLeft: '50px' }}>프로젝트 제목</SmallTitle>
                    <SmallTitle style={{ marginLeft: '233px' }}>희망금액</SmallTitle>
                    <SmallTitle style={{ marginLeft: '100px' }}>진행기간</SmallTitle>
                    <SmallTitle style={{ marginLeft: '50px' }}>마감일정</SmallTitle>
                </FlexDIv>
                <Line style={{ width: '88%' }}></Line>
                <Item title="제목" hope_money='희망금액' time='시간관련' deadLine='마감일정'/>

            </Box>

            <Box>
                <Subtitle>진행중</Subtitle>
                <Line />
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

            <Box>
            <Subtitle>완료</Subtitle>
            <Line/>
            <FlexDIv>
                <SmallTitle style={{marginLeft:'50px'}}>프로젝트 제목</SmallTitle>
                <SmallTitle style={{marginLeft:'233px'}}>희망금액</SmallTitle>
                <SmallTitle style={{marginLeft:'100px'}}>진행기간</SmallTitle>
                <SmallTitle style={{marginLeft:'50px'}}>마감일정</SmallTitle>
            </FlexDIv>
            <Line style={{width:'88%'}}></Line>
            <>
            <Item title="제목" hope_money='희망금액' time='시간관련' deadLine='마감일정'/>

            </>
            
            </Box>



        </Wrapper>
    )
}
