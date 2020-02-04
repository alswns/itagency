import React from 'react'
import styled from 'styled-components'
import PortfolioItem from '../components/Portfolio/PortfolioItem'
import play_arrow from'../assets/imgs/play_arrow.svg'
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
  const Img=styled.img`
  
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
const Flex_div=styled.div`
display:flex;
justify-content:center;
`
export default function PortfolioContainer(props) {
    const [page,setPage]=React.useState(0)
    const [su,setSu]=React.useState(1)
    return (<>
        <Wrapper>
            {(props.portfolio || []).slice((su-1)*3,( su-1)*3+3).map(re => {
                return <FlexDIv>
                    {re.map(res => {
                        {console.log(res)}
                        return <div> <PortfolioItem reload={props.reload} portfolio_id={res.portfolio_id} description={res.description} email={res.email} img={res.img[0]} field={res.field} title={res.title} /></div>
                    })
                    }
                </FlexDIv>
            })}
        </Wrapper>
        <Flex_div>
            {page>0&&
        <Img src={play_arrow} onClick={()=>setPage(page-1)} style={{transform:'rotate(180deg)'}}></Img>}
        {setInt(page*10+1,setSu,props.max,su)}
        {props.max/10-1>page&&
        <Img src={play_arrow} onClick={()=>setPage(page+1)}></Img>
        }
        </Flex_div>
        </>
    )
}
