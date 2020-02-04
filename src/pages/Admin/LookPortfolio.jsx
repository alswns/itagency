import React, { Component } from 'react'
import api from '../../apis/BaseUrl'
import PortfolioItem from '../PortfolioItem'
import styled from 'styled-components'
const Banner=styled.div`
height:100px;
`
const Item=styled.div`
width:800px;
`
const Buttons=styled.div`
width:395px;
height:50px;
color:black;
border:1px solid black;
display:flex;
justify-content:center;
align-items:center;
`
const Button=styled.button`
width:200px;
height:50px;
display:flex;
justify-content:center;
align-items:center;
`
export default class LookPortfolio extends Component {
    state={
        portfolio:[],
        load:false
    }
    componentDidMount(){
        api.get('/admin/portfolio').then(
            res=>{
                console.log(res.data.info)
                this.setState({portfolio:res.data.info})
            }
        )
        .catch(err=>{console.log(err)})

    }

    sign=(id,sign)=>{
        api.post('/admin/portfolio',{portfolio_id:id,action:sign}).then(res=>console.log(res))
        .catch(err=>console.dir(err))
    }

    render() {
        return (
            <div>
                <Banner/>
                
            </div>
        )
    }
}
