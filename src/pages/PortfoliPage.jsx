import React, { Component } from 'react'
import { setBanner } from '../apis/Style'
import Last from '../components/main/Last'
import styled from 'styled-components'
import Top from '../components/Portfolio/Top'
import Select from '../components/Portfolio/Select'
import PortfolioContainer from './PortfolioContainer'
const Wrapper=styled.div`
width:100%;
background:#f3f3f3;
`

export default class PortfoliPage extends Component {
    componentDidMount(){
        setBanner('포트폴리오')
    }
    render() {
        return (
            <Wrapper>
                <Top/>
                <Select/>
                <PortfolioContainer/>
                
            <Last/>
            </Wrapper>
        )
    }
}
