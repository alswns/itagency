import React, { Component } from 'react'
import api from '../apis/BaseUrl'
import Requests from '../apis/Request'

export default class LoginPage extends Component {
    
    
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            password: ''
        }
    }
    componentDidMount(){
        const request = new Requests();  
    if (request.getParameter('#access_token')==''){
  }
  else{
    const token=request.getParameter('#access_token')
    console.log(token)
    api.post('/client/account/fb',{
        fb_token:token
    }).then(res=>{
        window.localStorage.setItem('token',res.data.access_token)
        alert('로그인 성공')
        window.location='/'
    }).catch(err=>{
        console.dir(err)
    })
  }
    }

    change = (event) => {
        const data = {}
        data[event.target.name] = event.target.value
        this.setState(data)
    }
    login=()=>{
        api.post('/client/auth',{
            id:this.state.id,
            password:this.state.password
        }).then(res=>{
            alert('로그인 성공')
            console.log(res.data.access_token)
            window.localStorage.setItem('token',res.data.access_token)
            window.location='/'

        })
        .catch(err=>{
            if(err.response.status===409){
                alert('로그인 실패\n아이디 또는 비밀번호가 일치하지 않습니다.')
                this.setState({
                    id:'',
                    password:''
                })
            }
        })
    }
    render() {
        return (
            <div style={{marginTop:'300px'}}>
                id:<input type="text" name='id' value={this.state.id} onChange={this.change}/> <br/>
                password:<input type="text" name='password' value={this.state.password} onChange={this.change}/>
                <button onClick={this.login}>로그인</button>
                {/* "https://www.facebook.com/v5.0/dialog/oauth?client_id=483972958983170&redirect_uri=http://localhost:3000/&state=&response_type=token" */}
                <br/>
                <a href="https://www.facebook.com/v5.0/dialog/oauth?client_id=483972958983170&redirect_uri=http://localhost:3000/Login&state=&response_type=token">facebook</a>
            </div>
        )
    }
}
