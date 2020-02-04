import React, { Component } from 'react'
import Requests from '../../apis/Request';
import api from '../../apis/BaseUrl';

export default class Facebook extends Component {
    componentDidMount(){
        const requests = new Requests();  
        const token=requests.getParameter('access_token')
        console.log(token)
        console.log(window.location.protocol)
        if (window.location.protocol == "https:") {
            window.location.protocol = "http:";
         }
        if (requests.getParameter('access_token')==''){
                
        }
        else{
          
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
