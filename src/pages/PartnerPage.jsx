import React, { Component } from 'react'
import api from '../apis/BaseUrl'
import styled from 'styled-components'
import Client from '../components/Mypage/Client'
import Frame from '../components/Mypage/Frame'
import Preview from '../components/Mypage/Preview'
import Change from '../components/Mypage/Change'
import Last from '../components/main/Last'
import Thec_Stack from '../components/Mypage/Thec_Stack'

const Banner=styled.div`
height:85px;
`
const Wrapper=styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
height:100%;
background-color: #f3f3f3;
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
`

export default class PartnerPage extends Component {
    state={
        name:'',
        auth:'',
        email:'',
        location:'',
        data:'',
        myproject:false,
        Turn:2,
        stack:1
    }
    componentDidMount(){
        api.get('/info/account').then(res => {
            this.props.setUser(res.data.name)
            this.setState({name:res.data.name,auth:res.data.auth},this.getInformation)
            console.log(res)
        })
            .catch(err => {
                console.dir(err)
                this.props.setUser('guest')
            })
    }

    getInformation(){
        api.get(`/info/partner/profile/${this.state.auth}`).then(res=>{
            console.log(res)
            this.setState({data:res.data,email:res.data.email,location:res.data.location})
        })
        .catch(err=>{
            console.dir(err)
        })
    }
    componentDidUpdate(){
        
        const going=document.getElementsByClassName('going')
        for(let i of going){
            i.style.backgroundColor='#ffffff'
        }
        going[this.state.Turn].style.backgroundColor='#ef4f80'
        
        
        if(this.state.Turn==2){
            const stack=document.getElementsByClassName('stack')
        for(let i of stack){
            i.style.color='#212121'
            i.style.fontWeight='500'

        }
        stack[this.state.stack].style.color='#ef4f80'
        stack[this.state.stack].style.fontWeight='600'
        }
        
    }
    setTurn=(int)=>{
        console.log(int)
        this.setState({Turn:int})
    }

    setStack=(int)=>{
        console.log(int)
        this.setState({stack:int})
    }
    render() {
        return (
            <Wrapper>
                <Banner></Banner>



                <div style={{display:'flex'}}>
                {this.state.Turn==0&&<Frame name={this.state.name}/>}
                {this.state.Turn==1&&'2'}
                {this.state.Turn==2&&<Change stack={this.state.stack} setStack={this.setStack} name={this.state.name}></Change>}
                {this.state.Turn==3&&<Preview data={this.state.data} name={this.state.name}></Preview>}
                
                <Client  setTurn={this.setTurn}data={this.state.data} location={this.state.location} auth={this.state.email} name={this.state.name}/>
                </div>
                <Last/>
            </Wrapper>
        )
    }
}
