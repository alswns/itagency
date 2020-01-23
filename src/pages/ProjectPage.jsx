import React, { Component } from 'react'
import { setBanner } from '../apis/Style'
import Last from '../components/main/Last'
import styled from 'styled-components'
import Top from '../components/Project/Top'
import Filter from '../components/Project/Filter'
const Wrapper=styled.div`
width:100%;
background:#f3f3f3;
`

export default class ProjectPage extends Component {
    componentDidMount(){
        setBanner('프로젝트')
    }
    render() {
        return (
            <Wrapper>
                <Top/>
                <Filter/>
            <Last/>
            </Wrapper>
        )
    }
}
