import React from 'react'
import PortfolioItem from '../../../pages/PortfolioItem'
import styled from 'styled-components'
import play_arrow from'../../../assets/imgs/play_arrow.svg'

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

const Set=(su)=>{
  console.log(document.getElementsByClassName('bottom_su'))  
  var a=document.getElementsByClassName('bottom_su')
  for(let i of a){
      if(i.id==su){
          i.style.border='1px solid gray'
    }
    else{
        i.style.border=''
    }
  }
}

const setInt=(int,fun,max)=>{
  return <SuContainer>
      
      <Noborder id={int} style={{border:'1px solid gray'}}  className='bottom_su' onClick={()=>{Set(int);fun(int)}}>{int}</Noborder>
      {max>=int+1?<Noborder id={int+1} className='bottom_su' onClick={()=>{Set(int+1);fun(int+1)}}>{int+1}</Noborder>:''}
      {max>=int+2?<Noborder id={int+2} className='bottom_su' onClick={()=>{Set(int+2);fun(int+2)}}>{int+2}</Noborder>:''}
      {max>=int+3?<Noborder id={int+3} className='bottom_su' onClick={()=>{Set(int+3);fun(int+3)}}>{int+3}</Noborder>:''}
      {max>=int+4?<Noborder id={int+4} className='bottom_su' onClick={()=>{Set(int+4);fun(int+4)}}>{int+4}</Noborder>:''}
      {max>=int+5?<Noborder id={int+5} className='bottom_su' onClick={()=>{Set(int+5);fun(int+5)}}>{int+5}</Noborder>:''}
      {max>=int+6?<Noborder id={int+6} className='bottom_su' onClick={()=>{Set(int+6);fun(int+6)}}>{int+6}</Noborder>:''}
      {max>=int+7?<Noborder id={int+7} className='bottom_su' onClick={()=>{Set(int+7);fun(int+7)}}>{int+7}</Noborder>:''}
      {max>=int+8?<Noborder id={int+8} className='bottom_su' onClick={()=>{Set(int+8);fun(int+8)}}>{int+8}</Noborder>:''}
      {max>=int+9?<Noborder id={int+9} className='bottom_su' onClick={()=>{Set(int+9);fun(int+9)}}>{int+9}</Noborder>:''}
      
      
  
</SuContainer>
}
export default function PortFolioContainer(props) {
  const [page,setPage]=React.useState(0)
    const [su,setSu]=React.useState(1)


    return (
        <>
        <ItemContainer>
        {(props.portfolioArray||[]).slice((su-1)*3,(su-1)*3+3).map(re=>{
          return<Flex_div>  {re.map(res=>{
          return <PortfolioItem reload={props.reload} id={res.portfolio_id}src={res.img[0]} title={res.title} kind={res.field} text={res.in_field} />
        })}
        </Flex_div>
        })}
      </ItemContainer>
      <Flex_div>
            {page>0&&
        <img src={play_arrow} onClick={()=>setPage(page-1)} style={{transform:'rotate(180deg)'}}></img>}
        {setInt(page*10+1,setSu,props.max,su)}
        {props.max/10-1>page&&
        <img src={play_arrow} onClick={()=>setPage(page+1)}></img>
        }
        </Flex_div>
          </>
    )
}
