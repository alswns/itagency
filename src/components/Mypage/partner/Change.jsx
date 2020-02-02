import React from 'react'
import styled from 'styled-components'
import CareerItem from './CareerItem'
import Input from './Input'
import Win from './Win'
import NewInput from './NewInput'
import InitInfor from './InitInfor'
import Thec_Stack from './Thec_Stack'
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
const MyProject = styled.div`
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
  padding:0 50px;
  padding-top:10px;
display:flex;
`
const Ment = styled.div`
display:flex;
flex-direction:column;
margin-top:22px;
margin-left:50px;
`
const Subtitle = styled.span`
margin-left:50px;
  font-family: 'Noto sans kr';
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #212121;
`

const Submit = styled.div`
 width: 120px;
  height: 30px;
  border-radius: 5px;
  background-color: #212121;
display:flex;
justify-content:center;
align-items:center;
font-family: 'Noto Sans KR';
  font-size: 14px;
  margin:15px auto;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`


const Space = styled.div`
height:20px;
`
export default function Change(props) {
    return (
        <Wrapper>
            <IngList>
                <Ment>
                    <Title>마이페이지</Title>
                    <Sub>{props.name}님 안녕하세요
                    </Sub>
                </Ment>
            </IngList>
            <MyProject>
            {props.stack == 0 &&'기본정보'}
            {props.stack == 1 &&'기술스택'}
            {props.stack == 2 &&'경력정보'}
            </MyProject>
            {console.log(props)}
            <MyProject style={{ marginBottom: '10px', paddingLeft: '0px', height: '40px' }}>
                <Subtitle onClick={() => props.setStack(0)} className='stack'>기본정보</Subtitle>
                <Subtitle onClick={() => props.setStack(1)} className='stack'>기술스택</Subtitle>
                <Subtitle onClick={() => props.setStack(2)} className='stack'>경력정보</Subtitle>
            </MyProject>
            {console.log(props)}
            {props.stack == 0 && <InitInfor location={props.location} introduce={props.introduce} field={props.field} setPhone={props.setPhone} src={props.src} getImgData={props.getImgData} getData={props.getData} phone={props.phone} data={props.data}/>}
            {props.stack == 1 && <Thec_Stack Infor_Edit={props.Infor_Edit} delTech_stack={props.delTech_stack} addTech_stack={props.addTech_stack} tech_stack={props.tech_stack}/>}
            {props.stack == 2 &&
                <>
                    <MyProject >
                        근무경력
            </MyProject>
                    <MyProject style={{ height: 'auto', flexDirection: 'column' }}>
                      
                       {(props.career||[]).map(res=>{
                         return <CareerItem res={res} delCarrer={props.delCarrer} name={res.name} location={res.location} rank={res.rank} description={res.description}></CareerItem>
                       })}
                        
                        <Submit onClick={props.submitCareer}>저장</Submit>
                    </MyProject>
                    
                    <Space></Space>
                    <Input plusCareer={props.plusCareer}/>
                    <Space></Space>

                    <MyProject >
                        수상경력
                        
            </MyProject>
                    <MyProject style={{ height: 'auto', flexDirection: 'column' }}>
                        {(props.award||[]).map(res=>{
                        return  <Win res={res} delAward={props.delAward} name={res.name} year={res.year} agency={res.agency}></Win>

                        })}
                        
                        <Submit onClick={props.submitAward}>저장</Submit>

                    </MyProject>

                    <NewInput plusAward={props.plusAward}/>
                </>
            }
            <div style={{ height: '100px' }}></div>
        </Wrapper>
    )
}
