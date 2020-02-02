import React, { Component } from 'react'
import Requests from '../../apis/Request';

export default class Facebook extends Component {
    componentDidMount(){
        const request = new Requests();  

        if (request.getParameter('#access_token')==''){
            alert('페이스북 로그인 실패')
            window.location.href='/'
        }
        else{
          const token=request.getParameter('#access_token')
          console.log(token)
          api.post('/client/account/fb',{
              fb_token:token
          }).then(res=>{
              window.localStorage.setItem('token',res.data.access_token)
              alert('페이스북 로그인 성공')
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
