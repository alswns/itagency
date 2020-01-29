import React, { Component } from 'react'
import api from '../apis/BaseUrl'
import styled from 'styled-components'
import main_imgae from '../assets/imgs/mainImgae.png'
import Regist from '../components/Register/Regist'
import Last from '../components/main/Last'
import { checkEmailPattern, returnName } from '../apis/CheckForm'

const Wrapper = styled.div`
width:100%;
`
const Banner = styled.div`
width:100%;
height:95px;
`

export default class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            name: '',
            email: '',
            area: '',
            phone: '',
            checkpw: '',
            phone: '',
            emailCheck: false,
            pwCheck: false,
            admitCheck: false,
        }
    }
    change = (event) => {
        const data = {}
        data[event.target.name] = event.target.value
        this.setState(data)
    }
    checkChange = (name, bool) => {
        console.log(bool)
        let data = {}
        data[name] = bool
        this.setState(data)
        console.log(this.state)
    }

    regi = (check) => {

        const area = returnName(document.getElementsByClassName('시')[0].value, document.getElementsByClassName('시')[1].value)
        console.log(check)
        if (!this.state.admitCheck) { alert('이용약관에 동의해 주십시오') }
        else if (!this.state.pwCheck) { alert('비밀번호를 확인해 주십시오') }
        else if (!this.state.emailCheck) { alert('이메일 중복확인을 하십시오') }
        else {

            if (check) {
                if (!this.state.phone) { 
                alert('전화번호를 입력하세요')
                }
                api.post('/partner/account', {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    "location": area,
                    phone: this.state.phone
                }).then(res => {
                    if (res.status === 201) {
                        alert('회원가입 성공')
                        window.location.href = '/'
                    }
                })
                    .catch(err => {
                        console.dir(err)
                        // if (err.response.status===409){
                        //     alert('이미 있는 아이디 입니다')
                        // }else if(err.response.status===407){
                        //     alert('잘못된 형식입니다')
                        // }
                    })

             }
            else {
                api.post('/client/account', {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    "location": area,
                    phone: this.state.phone
                }).then(res => {
                    if (res.status === 201) {
                        alert('회원가입 성공')
                        window.location.href = '/'
                    }
                })
                    .catch(err => {
                        console.dir(err)
                        // if (err.response.status===409){
                        //     alert('이미 있는 아이디 입니다')
                        // }else if(err.response.status===407){
                        //     alert('잘못된 형식입니다')
                        // }
                    })
            }
        }
    }
    colorChange = (a) => {

        let goal = document.getElementsByClassName('goal')

        for (let i = 0; i < 2; i++) {
            if (i == a) {
                goal[a].style.border = 'solid 1px #ef4f80';
            }
            else {
                goal[i].style.border = '';

            }

        }
        console.log()

    }
    componentDidMount() {
        this.colorChange(0)
    }
    sameEmail = (check) => {

        if (checkEmailPattern(this.state.email)) {
            if(check){api.post('/partner/check/email', { "email": this.state.email })
            .then(res => {
                console.log(res)
                alert('사용 할 수 있는 이메일입니다.')
                let input = document.getElementsByName('email')[0]
                input.readOnly = true
                input.style.background = '#6f6f6f'
                input.style.opacity = '0.8'
                this.checkChange('emailCheck', true)
                console.log(res)
            })
            .catch(err => {
                alert('이미 사용중인 이메일입니다.')
                console.dir(err)
                
            })}
            else{

                api.post('/client/check/email', { "email": this.state.email })
                .then(res => {
                    console.log(res)
                    alert('사용 할 수 있는 이메일입니다.')
                    let input = document.getElementsByName('email')[0]
                    input.readOnly = true
                    input.style.background = '#6f6f6f'
                    input.style.opacity = '0.8'
                    this.checkChange('emailCheck', true)
                    console.log(res)
                })
                .catch(err => {
                    alert('이미 사용중인 이메일입니다.')
                    console.dir(err)
                    
                })
            }
        }
    }
    render() {
        return (
            <Wrapper>
                <Banner />
                <Regist phone={this.state.phone} sameEmail={this.sameEmail} regi={this.regi}
                    Change={this.colorChange} checkpw={this.state.checkpw}
                    change={this.change} 
                    pw={this.state.password} checkChange={this.checkChange}
                    name={this.state.name} email={this.state.email}
                    phone={this.state.phone} area={this.state.area} />




                <Last />
            </Wrapper>

        )
    }
}
