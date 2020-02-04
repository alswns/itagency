import React, { Component } from 'react'
import api from '../apis/BaseUrl'
import Requests from '../apis/Request'
import styled from 'styled-components'
import main_imgae from '../assets/imgs/mainImgae.png'
import Login from '../components/Login/Login'
import Last from '../components/main/Last'

const Wrapper=styled.div`
width:100%;
`
const Banner=styled.div`
width:100%;
height:55px;
`

export default class LoginPage extends Component {
    
    
    constructor(props) {
        super(props)
        this.state = {
            id: ''+(window.localStorage.getItem('reid')?window.localStorage.getItem('reid'):''),
            password: '',
            checked:false,
        }
    }
    componentDidMount(){
        window.scrollTo(0,0)
        api.get('/info/account').then(res=>{
            this.props.setUser(res.data.name)
        })
        .catch(err=>{
            console.dir(err)
            this.props.setUser('guest')
        })
        if(this.state.id!=''){
            document.getElementById('check').checked='true'
            this.setChecked()
        }
    }

    changeId = (event) => {
        
        this.setState({
            id: event.target.value
        })
    }
    changePw = (event) => {
        
        this.setState({
            password: event.target.value
        })

    }
    login=(who)=>{
        if (who){
            api.post('/partner/auth',{
                email:this.state.id,
                password:this.state.password
            }).then(res=>{
                alert('로그인 성공')
                window.localStorage.setItem('what','partner')
                window.localStorage.setItem('token',res.data.access_token)
                if(this.state.checked){
                window.localStorage.setItem('reid',this.state.id) 
                }
                window.location='/'
    
            })
            .catch(err=>{
                console.dir(err)
                if(err.response.status===409){
                    alert('로그인 실패\n아이디 또는 비밀번호가 일치하지 않습니다.')
                    this.setState({
                        id:'',
                        password:''
                    })
                }
                else if(err.response.status===412){
                    alert('이계정은 승인되지 않았습니다.\n조금만 기다려 주십시오.')
                    this.setState({
                        id:'',
                        password:''
                    })
                }
            })

        }
        else{

        api.post('/client/auth',{
            email:this.state.id,
            password:this.state.password
        }).then(res=>{
            alert('로그인 성공')
            console.log(res.data.access_token)
            window.localStorage.setItem('what','client')
            window.localStorage.setItem('token',res.data.access_token)
            if(this.state.checked){
                window.localStorage.setItem('reid',this.state.id) 
                }
            window.location='/'

        })
        .catch(err=>{
            console.dir(err)
            if(err.response.status===409){
                alert('로그인 실패\n아이디 또는 비밀번호가 일치하지 않습니다.')
                this.setState({
                    id:'',
                    password:''
                })
            }
        })
    }
    }
    setChecked=()=>{
        this.setState({checked:!this.state.checked})
        
    }
    render() {
        return (
            <Wrapper>
                <Banner/>
              <Login setChecked={this.setChecked}id={this.state.id} pw={this.state.password} changeId={this.changeId} changePw={this.changePw} login={this.login}/>
                <Last/>
            </Wrapper>
        )
    }
}
