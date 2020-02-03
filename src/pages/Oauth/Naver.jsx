import React, { Component } from 'react'
import Requests from '../../apis/Request';
import api from '../../apis/BaseUrl';

export default class Naver extends Component {
 
    componentDidMount(){
        const request = new Requests();  
        const token=request.getParameter('access_token')
        if (token==''){
            console.log(token)
            alert('네이버 로그인 실패')
            window.location.href='/'
        }
        else{
         
          alert(token)
          api.post('/client/account/nv',{
            nv_token:token
          }).then(res=>{
              window.localStorage.setItem('token',res.data.access_token)
              alert('네이버 로그인 성공')
              window.localStorage.setItem('what','client')
              window.location.href='/'
          }).catch(err=>{
              console.dir(err)
              
          })
        }
          }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

  

