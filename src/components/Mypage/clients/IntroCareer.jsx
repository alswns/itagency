import React from 'react'
import styled from 'styled-components'
import PreviewCareerItem from './PreviewCareerItem'
import PreviewWin from './PreviewWin'
const Wrapper=styled.div`
width:100%;
margin-top:30px;
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
  padding-top:10px;
  padding-left:50px;
display:flex;
padding-bottom:50px;
`
const Div=styled.div`
height:20px;
`
export default function IntroCareer(props) {
    return (
        <Wrapper>
             <MyProject >
                        근무경력
            </MyProject>
                    <MyProject style={{ height: 'auto', flexDirection: 'column' }}>
                        {props.career.map(res=>{
                       return <PreviewCareerItem res={res} delCarrer={props.delCarrer} name={res.name} location={res.location} rank={res.rank} description={res.description}></PreviewCareerItem>

                        })}
                       
                    </MyProject>
                    <Div/>
                    <MyProject >
                        대회수상
            </MyProject>
            <MyProject style={{ height: 'auto', flexDirection: 'column' }}>
                    {(props.award||[]).map(res=>{
                        return  <PreviewWin res={res} delAward={props.delAward} name={res.name} year={res.year} agency={res.agency}></PreviewWin>

                        })}
                        </MyProject>
        </Wrapper>
    )
}
