import React, { Component } from 'react'
import Last from '../components/main/Last'
import Container from '../components/FindPw/container'
import styled from 'styled-components'
import back from '../assets/imgs/arrow_back.svg'
import api from '../apis/BaseUrl'
import {checkPasswordPattern,samePw} from '../apis/CheckForm'

import Set from '../components/FindPw/set'

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
@font-face { font-family: 'NIXGONM-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONM-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
`
export default class FindPwPage extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        kind:false,
        look:false,
        pw:'',
        repw:''
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

                window.localStorage.setItem('token',res.data.access_token)
                this.setState({look:true})
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

                window.localStorage.setItem('token',res.data.access_token)
                this.setState({look:true})

            })
            .catch(err=>{
                console.dir(err.response.status)
                if(err.response.status==409){
                    alert('정보가 존재하지 않습니다')
                }
            })
        }
    }
    Done=()=>{
        const same=samePw(this.state.pw,this.state.repw)
        const check=checkPasswordPattern(this.state.pw)
        if(check==''){
            if(same==''){
                if(this.state.kind){
                    api.put('/partner/account',{password:this.state.pw}).then(res=>{
                        console.log(res)
                        alert('성공!')
                        window.location.href='/login'
                    })
                    .catch(err=>{
                        console.dir(err)
                        alert('에상치못한 오류')
                    })
                }
                else{
                    api.put('/client/account',{password:this.state.pw}).then(res=>{
                        console.log(res)
                        window.location.href='/login'

                    })
                    .catch(err=>{
                        console.dir(err)
                        alert('에상치못한 오류')

                    })
                }

                
            }
            else{
                alert(same)
            }
        }
        else{
            
            alert(check)
        }
    }
    render() {
        return (
            <Wrapper>
                
                <Banner/>
                <Img src={back} onClick={() => { window.location.href = '/' }}></Img>
{!this.state.look?<Container Submit={this.Submit}setKind={this.setKind} setValue={this.setValue}/>
:
<Set Submit={this.Done} setValue={this.setValue}></Set>
}
                
                <Last/>
            </Wrapper>
        )
    }
}
