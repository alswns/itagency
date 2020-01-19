import React, { Component } from 'react'
import Footer from '../components/main/Footer'
import LiveProject from '../components/main/LiveProject'
import MainPost from '../components/main/MainPost'
import api from '../apis/BaseUrl'





export default class MainPage extends Component {

    state={
        projects:undefined
    }
    componentDidMount(){
        api.get('/info/project').then(res=>{
            console.dir()
            this.setState({
                projects:res.data.info
            })
        })

    }

    render() {
        return (
          <>
          
            <MainPost user='320'/>
            <Footer/> 
            <LiveProject projects={this.state.projects}/>
            
            </>

        )
    }
}
