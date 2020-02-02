import React, { Component } from 'react'
import styled from 'styled-components'
import PortfolioInput from './PortfolioInput'
import api from '../../../apis/BaseUrl'
const Myproject = styled.div`
  height: 21px;
  font-family: NIXGONB-Vb;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
  width: 100%;
  height: 50px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  box-sizing:border-box;
    display:flex;
    align-items:center;
    padding:0px 50px;
    justify-content:space-between;
`

export default class SubmitPortfolio extends Component {
    state = {
        images :'',
        in_field :'',
        title:'',
        field:'',
        description:'',
        secret:''
  }
  setValue=(value,e)=>{
      console.dir(e.target)
    let data={}
    data[value]=e.target.value
    this.setState(data)
    console.log(this.state)
  }
  submit=()=>{
      let arr=''
      let inf=document.getElementsByClassName('check')
      for(let i in document.getElementsByClassName('check') ){
          if(inf[i].checked){
              arr=arr+i+' '
          }
      }
     this.setState({in_field:arr},this.Api)
  }

  Api=()=>{
    console.log(this.state)
    for(let i of Object.values(this.state)){
        console.log(i)
        if(i==''){
            alert('모두 선택 하여 주십시오')
             return
        }
    }
    console.log(this.state.in_field)
    var formData=new FormData()
    formData.append('image',this.state.images)
    formData.append('title',this.state.title)
    formData.append('field',this.state.field)
    formData.append('description',this.state.description)
    formData.append('secret',this.state.secret)
        formData.append('in_field', this.state.in_field);
    
    console.log(formData.getAll('in_field'))


    api.post('/partner/portfolio',formData).then(res=>{
        alert('등록성공!')
        this.props.SetSubmit()
    })
    .catch(err=>console.dir(err))
  }
   setKind=(name,value)=>{
    console.log(value)    
    this.setState({field:value})
   
  }
  getFile=(e)=>{
      console.dir(e.target.files[0])
    this.setState({images:e.target.files[0]})
  }
    render() {
        return (
            <div>
                <Myproject>
                    포트폴리오 등록
                </Myproject>
                    <PortfolioInput getFile={this.getFile} setKind={this.setKind} submit={this.submit} setValue={this.setValue}/>
            </div>
        )
    }
}
