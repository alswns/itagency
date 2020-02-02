import React from 'react'
import styled from 'styled-components'
import SubmitPortfolio from './SubmitPortfolio'
import 돋보기 from '../../../assets/imgs/돋보기.svg'
import PortFolioContainer from './PortFolioContainer'

const MyProject = styled.div`
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
    display:flex;
    align-items:center;
    padding:0px 50px;
    justify-content:space-between;
`
const Wrapper = styled.div`
width:765px;
margin-top:30px;
`
const Button = styled.div`
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
width: 119px;
  height: 30px;
  border-radius: 5px;
  background-color: #212121;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  font-family:'noto sans kr';
`
const Item = styled.span`
margin-right:54px;
font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #212121;
  font-family:'noto sans kr';
`
const Noninput = styled.input`
border:none;
width:200px;
height:30px;
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

  

export default function EditPorfolio(props) {
    const [subMit,SetSubmit]=React.useState(false)
    const [page,setPage]=React.useState(0)
    return (
        <Wrapper>
            <IngList>
                <Ment>
                    <Title>마이페이지</Title>
                    <Sub>{props.name}님 안녕하세요
                    </Sub>
                </Ment>
            </IngList>

            {subMit?
            <SubmitPortfolio SetSubmit={()=>SetSubmit(false)}/>
            :
            <>
            <MyProject >
                <span>내 포트폴리오</span>
                <Button onClick={()=>{SetSubmit(true)}}>포트폴리오 등록</Button>
            </MyProject>

            <MyProject style={{ height: '40px' }}>
                <span>
                    <Item>전체(20)</Item>
                    <Item>공개(10)</Item>
                    <Item>비공개(10)</Item>
                </span>
                <span>
                    <Noninput placeholder='검색어를 입력하십시오'></Noninput>
                    <img src={돋보기} alt="" />
                </span>
            </MyProject>
            <PortFolioContainer reload={props.reload} max={props.max} portfolioArray={props.portfolioArray} page={page} setPage={setPage}></PortFolioContainer>
           
            </>}

        </Wrapper>
    )
}
