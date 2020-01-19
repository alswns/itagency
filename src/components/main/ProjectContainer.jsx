import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import styled from 'styled-components'


const Wrapper= styled.div`
    display: flex;
    overflow: auto;
    width:73%;
    margin: 0 auto;
    -ms-overflow-style: none; 
  &::-webkit-scrollbar { 
    display: none !important; 
  }
margin-top:36px;
`


export default class ProjectContainer extends Component {

    state={
        lists:[[],[],[],[],[],[]    ]
    }


    render() {
        return (
            <>
            <Wrapper>
            {(this.state.lists||[]).map(res =>{
            return <div><ProjectItem /></div>
            })}
            </Wrapper>
            </>
        )
    }
}
