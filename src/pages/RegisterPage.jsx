import React, { Component } from 'react'
import api from '../apis/BaseUrl'

export default class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            password: '',
            name: '',
            email:''
        }
    }
    change = (event) => {

        const data = {}
        data[event.target.name] = event.target.value
        this.setState(data)
    }
    regi=()=>{
        api.post('/client/account',{
            id:this.state.id,
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }).then(res=>{
            if (res.status===201){
                alert('회원가입 성공')
                window.location.href='/'
            }
        })
        .catch(err=>{
            if (err.response.status===409){
                alert('이미 있는 아이디 입니다')
            }else if(err.response.status===407){
                alert('잘못된 형식입니다')
            }
        })
    }
    render() {
        return (
            <div style={{marginTop:'300px'}}>
                id:<input type="text" name='id' value={this.state.id} onChange={this.change}/> <br/>
                password:<input type="text" name='password' value={this.state.password} onChange={this.change}/> <br/>
                name:<input type="text" value={this.state.name} onChange={this.change} name='name'/> <br/>
                email:<input type="text" value={this.state.email}   onChange={this.change} name='email'/> 
                <button onClick={this.regi}>회원가입</button>
            </div>
        )
    }
}
