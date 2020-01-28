import React, { Component } from 'react'
import styled from 'styled-components'
import PortfolioItem from '../components/Portfolio/PortfolioItem'

const Wrapper=styled.div``
export default class PortfolioContainer extends Component {
    render() {
        return (
            <Wrapper>
                <PortfolioItem></PortfolioItem>
                <PortfolioItem></PortfolioItem>
                <PortfolioItem></PortfolioItem>
            </Wrapper>
        )
    }
}
