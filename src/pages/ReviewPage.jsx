import React, { Component } from 'react'
import styled from 'styled-components'
import FirstTopBanner from '../components/Review/FirstTopBanner'
import SecondTopBanner from '../components/Review/SecondTopBanner'
import ReviewContainer from '../components/main/ReviewContainer'
import Last from '../components/main/Last'
import { setBanner } from '../apis/Style'
import Input from '../components/Review/Input'

const Wrapper=styled.div`
width:100%;
position:relative;
`
const Circle=styled.div`
border-radius:100%;
width:9px;
height:9px;
margin-right:10px;
background-color:${props=>props.back};
`
const CircleContainer=styled.div`
position:absolute;
top:319px;
left:86.1%;
display:flex;
`
const Wrap=styled.div`
width:100%;
background:white;
height:100px;
`
export default class extends Component {
    
    
    state={
        review:[],
        banner:true,
        reload:0
    }
    componentDidMount(){
        setBanner('이용후기')
        // window.setInterval(this.setBanner, 3000)
        
    }
    setBanner=(bool)=>{
            this.setState({banner:!this.state.banner})
    }
    setColor=(bool,event)=>{
        this.setState({banner:bool})
        console.dir()
        for(let i of event.target.parentNode.children){
            console.log(i)
            i.style.backgroundColor='white'
        }
        event.target.style.backgroundColor='black'
    }
    
    render() {
        return (
            <div>
                <Wrapper>
                {this.state.banner||<FirstTopBanner/>}
                {this.state.banner&&<SecondTopBanner/>}
                <CircleContainer>
                <Circle back='#ffffff' left='86.1%' onClick={(event)=>this.setColor(false,event)}></Circle>
                <Circle back='#000000' left='87.1%' onClick={(event)=>this.setColor(true,event)}></Circle>
                </CircleContainer>
                </Wrapper>
                <Wrap/>
                <ReviewContainer />      
                
                <Input >리뷰 쓰는 페이지</Input>
                <Last/>

            </div>
        )
    }
}
