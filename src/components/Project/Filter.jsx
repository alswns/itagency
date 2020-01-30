import React from 'react'
import styled from 'styled-components'
import './checkbox.css'
import play_arrow from '../../assets/imgs/play_arrow.svg'
import KategoriItems from './KategoriItems'
import {setShape} from '../../apis/Style'
import Selection from '../Register/Selection'
import Kind from './Kind'
import ProjectItem from './ProjectItem'
const Wrapper = styled.div `
width:250px;
box-sizing:border-box;

`
const Top = styled.div `
padding-top:14px;
padding-left:30px;
width:100%;
height:50px;
box-sizing:border-box;

width:100%;
background-color: #212121;
font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.4px;
  text-align: left;
  color: #ffffff;
`
const Status = styled.div `
height:157px;
border: solid 1px #e0e0e0;
  background-color: #ffffff;
  display:flex;
  flex-direction:column;
`
const Title = styled.div `
font-family: 'Noto Sans KR';
font-size: 17px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.33;
letter-spacing: -0.3px;
  text-align: left;
  color: #212121;
  margin-top:15px;
  margin-bottom:15px;
  margin-left:30px;
`
const Label = styled.label `
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #212121;  
  margin-left:30px;
    margin-top:4px;
`
const Line = styled.div `
width:100%;
height:0px;
border:0.000000000000000025px solid #e0e0e0;
bottom:2000px;
box-sizing:border-box;
`
const Kategorie = styled.div `
width:100%;
background:#ffffff;
border: solid 1px #e0e0e0;
box-sizing:border-box;
display:flex;
flex-direction:column;
`
const Items = styled.div `
display:flex;
align-items:center;
margin-left:22px;
margin-bottom:15px;
`
const Img = styled.img `
width:15px;
`
const Location=styled.div`
box-sizing:border-box;
 border: solid 1px #e0e0e0;
  background-color: #ffffff;
  width:100%;
`
const LocationInput=styled.select`
border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  width: 200px;
  height: 35px;
  font-family: 'Noto Sans KR';
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
  padding-left:15px;
`
const  Mid=styled.div`
box-sizing:border-box;
width:100%;
justify-content:space-between;
align-items:center;
display:flex;
flex-direction:column;
height:90px;
margin-bottom:10px;
`
const AllWrapper=styled.div`
display:flex;
flex-direction:row;
width:1345px;
margin:0 auto;
justify-content:space-between;
`
const Align=styled.div`
display:flex;
flex-direction:column;
`
const SU=styled.div`
width: 40px;
  height: 40px;
  background-color: #ef4f80;
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  font-stretch: condensed;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`
const SuContainer=styled.div`
display:flex;
width:1080px;
justify-content:center;
`
const Noborder=styled.div`
cursor:pointer;
width: 40px;
  height: 40px;
  background-color: #f3f3f3;
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: Roboto;
  font-size: 10px;
  font-weight: bold;
  font-stretch: condensed;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #858585;
`
const setInt=(int,fun,max)=>{
    console.log(max)
    return <SuContainer>
        
    {int===1?'': <Noborder onClick={()=>fun(int-2)}>{int-1}</Noborder>}
        <SU>{int}</SU>
        {max>=int+1?<Noborder onClick={()=>fun(int)}>{int+1}</Noborder>:''}
        {max>=int+2?<Noborder onClick={()=>fun(int)}>{int+2}</Noborder>:''}
        {max>=int+3?<Noborder onClick={()=>fun(int)}>{int+3}</Noborder>:''}
    {int===1 && max>=int+4?<Noborder onClick={()=>fun(int+3)}>{int+4}</Noborder>:'' }
</SuContainer>
    
}

export default function Filter(props) {
    const [developer, setDeveloper] = React.useState(true)
    const [desinger, setdesinger] = React.useState(true)
    const [page,setPage]=React.useState(0)
    return (
        
      <AllWrapper >
        <Wrapper>

            <Top>상세 검색 필터</Top>
            <Status>
                <Title>
                    프로젝트 진행현황
                </Title>
                <div>
                    <input type="checkbox" className='ing' name="ing" id="submit"/>
                    <Label for='submit'>신청진행중</Label>
                </div>
                <div>
                    <input type="checkbox" className='ing' name="ing" id="ing"/>
                    <Label for='ing'>진행중</Label>
                </div>
                <div>
                    <input type="checkbox" className='ing' name="ing" id="done"/>
                    <Label for='done'>완료</Label>
                </div>

            </Status>
            <Line/>
            <Kategorie>
                <Title>
                    프로젝트 카테고리
                </Title>
                <Items>
                    <Img
                        src={play_arrow}
                        onClick={(event) => {
                            setDeveloper(!developer);
                            setShape(developer, event)
                        }}></Img>
                    <input type="checkbox" className='ing' name="" id="develope"/>
                    <Label
                        style={{
                            marginLeft: '8px'
                        }}
                        for='develope'>개발</Label>
                </Items>
                {
                    developer &&<> <div style={{marginTop:'-8px'}}>

                            <KategoriItems id='web' text='웹'/>
                            <KategoriItems id='app' text='애플리케이션'/>
                            <KategoriItems id='word' text='워드프레스'/>
                            <KategoriItems id='publishing' text='퍼블리싱'/>
                            <KategoriItems id='software' text='소프트웨어'/>
                            <KategoriItems id='shop' text='커머스, 쇼핑몰'/>
                            <KategoriItems id='game' text='게임'/>
                            <KategoriItems id='embedded' text='임베디드'/>
                            <KategoriItems id='other' text='기타'/>

                        </div>

                        <Line/>
                    </>
                }

                <Items>

                    <Img
                        src={play_arrow}
                        onClick={(event) => {
                            setdesinger(!desinger);
                            setShape(desinger, event)
                        }}></Img>
                    <input type="checkbox" className='ing' name="" id="design"/>
                    <Label
                        style={{
                            marginLeft: '8px'
                        }}for='design'>디자인</Label>
                </Items>
                {
                    desinger &&<div style={{marginTop:'-8px'}}> <KategoriItems id='web' text='웹'/>
                        <KategoriItems id='app' text='애플리케이션'/>
                        <KategoriItems id='product' text='제품'/>
                        <KategoriItems id='presentation' text='프레젠테이션'/>
                        <KategoriItems id='printed ' text='인쇄물'/>
                        <KategoriItems id='shop' text='커머스, 쇼핑몰'/>
                        <KategoriItems id='logo' text='로고'/>
                        <KategoriItems id='graphic' text='그래픽'/>
                        <KategoriItems id='move' text='영상'/>
                        <KategoriItems id='game' text='게임'/>
                        <KategoriItems id='other' text='기타'/>
                    </div>
                }
            </Kategorie>
            <Location>
            <Title>오프라인 미팅 지도</Title>
            <Mid>
           <Selection/>
           </Mid>
            </Location>
{/*======================================================================================================================================================================================================*/}

        </Wrapper>
                <Align>
            <Kind setArrange={props.setArrange}></Kind>
{(props.project||[]).slice((page)*7,(page+1)*7).map(res=>{
    return  <ProjectItem res={res} onClick={()=>window.location.href=`/detailed?#id=${res.project_id}`}/>
})
}
           
            {setInt(page+1,setPage,props.max)}
            </Align>
        </AllWrapper>
    )
}
