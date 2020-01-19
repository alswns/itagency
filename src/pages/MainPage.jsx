import React, { Component } from 'react'
import Footer from '../components/main/Footer'
import LiveProject from '../components/main/LiveProject'
import MainPost from '../components/main/MainPost'






export default class MainPage extends Component {


    render() {
        return (
          <>
          
            <MainPost user='320'/>
            <Footer/> 
            <LiveProject/>
            
            </>

        )
    }
}
