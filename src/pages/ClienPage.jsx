import React, { Component } from 'react'
import api from '../apis/BaseUrl'
import styled from 'styled-components'
import Client from '../components/Mypage/Client'
import Frame from '../components/Mypage/Frame'

const Banner=styled.div`
height:85px;
`
const Wrapper=styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
height:100%;
background-color: #f3f3f3;
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
`

export default class ClienPage extends Component {
    state={
        name:'',
        auth:''
    }
    componentDidMount(){
        api.get('/info/account').then(res => {
            this.props.setUser(res.data.name)
            this.setState({name:res.data.name,auth:res.data.auth},this.getInformation)
            console.log(res)
        })
            .catch(err => {
                console.dir(err)
                this.props.setUser('guest')
            })
    }

    getInformation(){
        api.get(`/info/client/profile/${this.state.auth}`).then(res=>{{console.log(res)}
        this.setState({data:res.data,email:res.data.email,location:res.data.location})

    
    })
        .catch(err=>{
            console.dir(err)
        })
    }
    render() {
        return (
            <Wrapper>
                <Banner></Banner>
                <div style={{display:'flex'}}>
                <Frame   name={this.state.name}/>
                {console.log(this.state.data)}
                {/* <Client data={this.state.data} location={this.state.location} auth={this.state.email} name={this.state.name}/> */}

                </div>
            </Wrapper>
        )
    }
}
