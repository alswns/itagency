import React, { Component } from 'react'
import Counsel from '../components/Counsel/Counsel'
import styled from 'styled-components'

import main_imgae from '../assets/imgs/mainImgae.png'
import Regist from '../components/Counsel/Regist'
import { setDate } from '../components/Counsel/setCategory'
import Last from '../components/main/Last'
import { setBanner } from '../apis/Style'
import api from '../apis/BaseUrl'

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
    state={
        field:"",
        name:"",
        description:"",
        cost:0,
        term:0,
        deadline:0,
        location:"",
        meeting: 0,
        hope_partner:"",
        plan:'',
        planning:'null.jpg',
        start:0,
        phone:0,
        
    }
    setKind=(name,value,callback)=>{
        let data={}
        data[name]=value
        if(callback!=undefined){
            console.log(callback)
            this.setState(data,callback)
        }
        else
        this.setState(data)
        console.log(this.state)
       
    }
    subMit=()=>{
        let formData=new FormData()
        formData.append('field',this.state.field)
        formData.append('name',this.state.name)
        formData.append('description',this.state.description)
        formData.append('cost',this.state.cost)
        formData.append('term',this.state.term)
        formData.append('deadline',this.state.deadline)
        formData.append('location',this.state.location)
        formData.append('meeting',this.state.meeting)
        formData.append('hope_partner',this.state.hope_partner)
        formData.append('plan',this.state.plan)
        formData.append('planning',this.state.planning)
        formData.append('start',this.state.start)
        formData.append('phone',this.state.phone)
        console.log(this.state)
        console.log(this.state.planning)
        console.log(formData.get('planning'))
        api.post('/client/project',formData,{headers:{ "Authorization":'Bearer '+window.localStorage.getItem('token')}}).then(res=>alert('프로젝트 등록 성공'))
        .catch(err=>{alert('입력형식에 맞지 않습니다.다시 입력해 주세요')
    console.dir(err)
    })
    }
    componentDidMount(){
        setDate()
        setBanner('상담하기')
    }
    render() {
        return (
            <Wrapper>
                <Banner/>
                <Regist></Regist>
                <Counsel subMit={this.subMit} setKind={this.setKind}></Counsel>
                <Last/>
            </Wrapper>
        )
    }
}
