import React, { Component } from 'react'
import Counsel from '../components/Counsel/Counsel'
import styled from 'styled-components'

import main_imgae from '../assets/imgs/mainImgae.png'
import Regist from '../components/Counsel/Regist'
import { setDate } from '../components/Counsel/setCategory'
import Last from '../components/main/Last'
import { setBanner } from '../apis/Style'

const Banner=styled.div`
width:100%;
height:105px;
`
const Wrapper=styled.div`
width:100%;
background:#f3f3f3;
background-color:#f3f3f3;

`
export default class CounselPage extends Component {
    componentDidMount(){
        setDate()
        setBanner('상담하기')
    }
    render() {
        return (
            <Wrapper>
                <Banner/>
                <Regist></Regist>
                <Counsel></Counsel>
                <Last/>
            </Wrapper>
        )
    }
}
