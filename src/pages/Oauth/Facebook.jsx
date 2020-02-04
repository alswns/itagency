import React, { Component } from 'react'
import Requests from '../../apis/Request';
import api from '../../apis/BaseUrl';

export default class Facebook extends Component {
    componentDidMount(){
        const request = new Requests();  
        const token=request.getParameter('access_token')
        const test= request.isSecure()
        if(test)
            window.location.hreftoken=`http://itagency119.com/facebook#access_token=${token}`
        if (request.getParameter('access_token')==''){
                
        }
        else{
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
