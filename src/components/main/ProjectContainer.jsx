import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import styled from 'styled-components'
import arrow from '../../assets/imgs/arrow.svg'

const Wrapper= styled.div`
    display: flex;
    
margin: 0 auto;
margin-top:36px;
justify-content:center;
-ms-flex-pack: center;
.container{
    
    position:relative;
}
.slider{
    transform: ${props => `translateX(-${(props.translate)}px)`};
    transition:0.3s;
    display:-webkit-box;
}


`
const ProjectItems=styled.div`
display:flex;
height:420px;
    display: flex;
    overflow: auto;
    overflow-y:hidden;
    width:1450px;
    -ms-overflow-style: none; 
  &::-webkit-scrollbar { 
    display: none !important; 
  };
`
const Img=styled.img`
`
const Imgs=styled.img`
transform:rotate(0deg);
-moz-transform: scaleX(-1); 
  -o-transform: scaleX(-1); 
-webkit-transform: scaleX(-1); 
     transform: scaleX(-1);   
`

export default function ProjectContainer(props) {
  const [page, setPage] = React.useState(1);
  const [sliderWidth, setSliderWidth] = React.useState(0);
  const slider = React.useRef(undefined)

  const onClickLeft = () => {
        if (page != 1) {
            console.log(page)
            setPage(page - 1);
        }
    }
    const onClickRight = () => {
        if (page < props.projects.length-4) {
            setPage(page + 1);
        }
      }

        return (
            
            <Wrapper translate={(page - 1) * (sliderWidth+295)}>
              <Img src={arrow} alt="" onClick={onClickLeft}/>
              <ProjectItems >
                <div style={{margin:'0'}} className='slider'>
            {(props.projects||[]).map(res =>{
            return <ProjectItem project_id={res.project_id} project_name={res.project_name} client_name={res.client_name} cost={res.cost} day={res.days} 
            field={res.field} num_of_applicants={res.num_of_applicants} progress={res.progress}/>
            })}
            </div>
            </ProjectItems>
              <Imgs src={arrow} onClick={onClickRight}  alt=""/>

            </Wrapper>
            
        )
    }



   
