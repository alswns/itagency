import React, { Component } from 'react'
import Last from '../components/main/Last'
import Container from '../components/FindPw/set'
import styled from 'styled-components'
import back from '../assets/imgs/arrow_back.svg'
import api from '../apis/BaseUrl'

const Banner=styled.div`
height:85px;
`
const Img = styled.img`
width:25px;
height:25px;
position:absolute;
left:3.6%;
top:160px;
cursor: pointer;
`
const Wrapper = styled.div`
position:relative;

display:flex;
flex-direction:column;
align-items:center;
@font-face { font-family: 'NIXGONL-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONL-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
`
export default class SetPwPage extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        kind:false
    }
    setValue=(name,event)=>{
        let data={}
        data[name]=event.target.value
        this.setState(data)
        console.log(this.state)
    }
    setKind=(event)=>{
        
        
        this.setState({kind:(event.target.value==='true')})
        console.log(this.state)
    }
    Submit=()=>{
        if(this.state.kind){
            api.post('/partner/account/find',{name:this.state.name,email:this.state.email,phone:this.state.phone}).then(res=>{
                console.log(res.data.access_token)

                window.localStorage.setItem('reid',res.data.access_token)
            })
            .catch(err=>{
                if(err.response.status==409){
                    alert('정보가 존재하지 않습니다')
                }
            })
        }
        else{
            api.post('/client/account/find',{name:this.state.name,email:this.state.email,phone:this.state.phone}).then(res=>{
                console.log(res.data.access_token)

                window.localStorage.setItem('reid',res.data.access_token)
            })
            .catch(err=>{
                console.dir(err.response.status)
                if(err.response.status==409){
                    alert('정보가 존재하지 않습니다')
                }
            })
        }
    }
    render() {
        return (
            <Wrapper>
                
                <Banner/>
                <Img src={back} onClick={() => { window.location.href = '/' }}></Img>

                <Container Submit={this.Submit}setKind={this.setKind} setValue={this.setValue}/>
                <Last/>
            </Wrapper>
        )
    }
}
