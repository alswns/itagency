import React, { Component } from 'react'
import { setBanner } from '../apis/Style'
import Last from '../components/main/Last'
import styled from 'styled-components'
import Top from '../components/Portfolio/Top'
import Select from '../components/Portfolio/Select'
import PortfolioContainer from './PortfolioContainer'
import api from '../apis/BaseUrl'
const Wrapper=styled.div`
width:100%;
background:#f3f3f3;
`

export default class PortfoliPage extends Component {
    state={
        searchKey:'',
        portfolio:[],
        len:''
    }
    setSearchKey=(e)=>{
        this.setState({searchKey:e.target.value})
        console.log(e)
    }

    componentDidMount(){

        Array.prototype.division = function (n) {
            var arr = this;
            var len = arr.length;
            var cnt = Math.floor(len / n);
            var tmp = [];
    
            for (var i = 0; i <= cnt; i++) {
                tmp.push(arr.splice(0, n));
            }
    
            return tmp;
    }

        setBanner('포트폴리오')
        api.get('/info/account').then(res=>{
            this.props.setUser(res.data.name)
        })
        .catch(err=>{
            console.dir(err)
            this.props.setUser('guest')
        })

        api.get('/info/portfolio/main').then(res=>{
            console.log(res.data.info)
            this.setState({len:Math.ceil(res.data.info.length/9),portfolio:res.data.info.division(3)})
        }).catch(err=>{
            console.dir(err)
        })
    }
    keywordSearch=()=>{
        
        let data=(this.state.project||[]).filter(res=>{
            return res.project_name.match(this.state.searchKey)!=null
        })
        console.log(data)
        return data
    }

    render() {
        return (
            <Wrapper>
                <Top setSearchKey={this.setSearchKey}/>
                <Select/>
                <PortfolioContainer max={this.state.len} portfolio={this.state.portfolio}/>
                
            <Last/>
            </Wrapper>
        )
    }
}
