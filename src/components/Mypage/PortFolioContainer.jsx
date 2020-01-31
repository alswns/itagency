import React from 'react'
import PortfolioItem from '../../pages/PortfolioItem'
import styled from 'styled-components'

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
const ItemContainer = styled.div`
width:100%;
box-sizing:border-box;
padding:25px 50px;
border: solid 1px #e0e0e0;
  background-color: #ffffff;
  margin-top:10px;
  display:flex;
  flex-direction:column;
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

const Flex_div=styled.div`
display:flex;
justify-content:space-between;
margin-bottom:20px;
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
export default function PortFolioContainer(props) {
    return (
        <>
        <ItemContainer>
        {(props.portfolioArray||[]).slice(props.page*3,props.page*3+3).map(re=>{
          return<Flex_div>  {re.map(res=>{
          return <PortfolioItem reload={props.reload} id={res.portfolio_id}src={res.img[0]} title={res.title} kind={res.field} text={res.in_field} />
        })}
        </Flex_div>
        })}
      </ItemContainer>
        <Flex_div>
          {setInt(props.page+1,props.setPage,props.max)}
          </Flex_div>
          </>
    )
}
