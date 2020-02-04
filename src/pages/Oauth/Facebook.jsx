import React, { Component } from 'react'
import Requests from '../../apis/Request';
import api from '../../apis/BaseUrl';

export default class Facebook extends Component {
    componentDidMount(){
        const requests = new Requests();  
        const token=requests.getParameter('access_token')
        const request=new Request()
        const test= request.

        console.log(test)
        if (window.location.protocol == "https:") {
            window.location.protocol = "http:";
            window.location.reload();
         }
        if (requests.getParameter('access_token')==''){
                
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
