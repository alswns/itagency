import React from 'react'
import styled from 'styled-components'
import PortfolioItem from '../components/Portfolio/PortfolioItem'

const Wrapper = styled.div`
width:1343px;
height: 1080px;
 border: solid 1px #e0e0e0;
  background-color: #ffffff;
  margin: 0 auto;
  padding:20px 80px;
  box-sizing:border-box;
`
const FlexDIv = styled.div`
width:1200px;
display:flex;
justify-content:center ;
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
margin:20px auto;
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
    return <SuContainer>
        
    {int===1?'': <Noborder onClick={()=>fun(int-2)}>{int-1}</Noborder>}
        <SU>{int}</SU>
        {max>=int+1?<Noborder onClick={()=>fun(int)}>{int+1}</Noborder>:''}
        {max>=int+2?<Noborder onClick={()=>fun(int)}>{int+2}</Noborder>:''}
        {max>=int+3?<Noborder onClick={()=>fun(int)}>{int+3}</Noborder>:''}
    {int===1 && max>=int+4?<Noborder onClick={()=>fun(int+3)}>{int+4}</Noborder>:'' }
</SuContainer>
}
export default function PortfolioContainer(props) {
    const [page,setPage]=React.useState(0)

    return (<>
        <Wrapper>
            {(props.portfolio || []).slice(page*3,page*3+3).map(re => {
                console.log(re)
                return <FlexDIv>
                    {re.map(res => {
                        return <div> <PortfolioItem description={res.description} email={res.email} img={res.img[0]} field={res.field} title={res.title} /></div>
                    })
                    }
                </FlexDIv>
            })}
        </Wrapper>
        {setInt(page+1,setPage,props.max)}

        </>
    )
}
