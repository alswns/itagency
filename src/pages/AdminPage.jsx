import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../apis/BaseUrl'

const Wrapper=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:100%;
`
const Input=styled.input`
width:400px;
height:40px;
margin-top:30px;
`
const Banner=styled.div`
height:85px;
`
const FlexDiv=styled.div`
display:flex;
justify-content:center;
margin-top:60px;
`
const Button=styled.button`
width:50px;
height:30px;
`
export default class AdminPage extends Component {
    state={
        id:'',
        pw:'',
        login:true,
        partner:[]
    }

    set=(str,e)=>{
        let data={}
        data[str]=e.target.value
        this.setState(data)
        console.log('a')
    }

   
    Login=()=>{

        api.post('/admin/login',{id:this.state.id,password:this.state.pw}).then(res=>{console.log(res)
            window.localStorage.setItem('token',res.data.access_token)
        this.setState({login:true})
        window.location.href='/rladustn/pass'
        })
        .catch(err=>{alert('오류');
    console.dir(err)})
    
    }

    render() {
        return (
            <Wrapper>
                <Banner/>
           
                <h1>어드민 페이지 로그인</h1>
                <Input onChange={(e)=>this.set('id',e)} placeholder='아이디'></Input>
                <Input onChange={(e)=>this.set('pw',e)} placeholder='비밀번호' type='passowrd'></Input>
                <button onClick={this.Login} style={{width:'70px'}}>확인</button>
            
              
                
                
                
            </Wrapper>

        )
    }
}
