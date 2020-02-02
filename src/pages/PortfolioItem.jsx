import React from 'react'
import styled from 'styled-components'
import PreviewPortfolio from './PreviewPortfolio'
const Wrapper = styled.div`

width:49.5%;
height:220px;
display:flex;
flex-direction:column;
`
const Img = styled.img`
height:148.8px;
  border: solid 1px #e0e0e0;
`
const Container = styled.div`
display:flex;
box-sizing:border-box;
padding:0px 15px;
align-items:center;
justify-content:space-between;
height:35px;
border: solid 1px #e0e0e0;

`
const Title = styled.span`
 color: #212121;
 font-size: 20px;
 font-family:'noto sans kr';
 font-weight:600;

`
const Kind = styled.span`
font-size: 13px;
  color: #6f6f6f;
font-weight:'noto sans kr';
`
const Text = styled.span`
color: #ef4f80;
font-size: 13px;
font-weight:'noto sans kr';

`
const Del = styled.span`
 color: #ef4f80;
 font-size: 15px;
font-weight:'noto sans kr';
`
const Edit=styled.span`
 color: #212121;
 font-size: 15px;
font-weight:'noto sans kr';
`
const Bar=styled.span`
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: right;
  color: #212121;
  font-family: NIXGONM-Vb;
  margin:0px 10px;
`

export default function PortfolioItem(props) {
    const [on,setOn]=React.useState(false)
    
    return (
      <>
      
      {on?<> <PreviewPortfolio set={()=>{setOn(!on);props.reload()}} id={props.id}>
      {console.log(on)}
      </PreviewPortfolio>
      </>
        :''}

      <Wrapper onClick={()=>setOn(true)}>
        
          <Img src={`https://54.180.122.126:5555/file/portfolio/image/${props.src}`}/>
          <Container>
                <Title>{props.title}</Title>
                <Kind>{props.kind}</Kind>
            </Container>
            <Container>
                <Text>
                  {(props.text||[]).map(res=>{
                    return<>
                    {res==0&&'개발'}
                    {res==1&&',디자인'}
                    {res==2&&',기획'}
                    
                    </>
                  })} 참여
                
                
                </Text>
                <span>
                <Edit>수정</Edit>
                <Bar>|</Bar>
                <Del>삭제</Del>
                </span>
            </Container>
        </Wrapper>
        </>
    )
}
