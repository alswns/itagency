import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../apis/BaseUrl'
import x from '../assets/imgs/x.svg'
const Wrapper=styled.div`
width:100%;
height:100%;
position:fixed;
top:0px;
left:0px;
z-index:9999;
background:rgba(0,0,0,0.8);
display:flex;
flex-direction:column;

`
const Img=styled.img`
  width: 1388px;
  height: 617px;
  margin:0 auto;
`
const My=styled.img`
width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius:100%;
`
const Infor=styled.div`
display:flex;
font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`
const Center=styled.div`
display:flex;
margin:10px auto 30px auto;
width: 1388px;
justify-content:space-between;
`
const He=styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;

`
const Title=styled.span`
 font-family: NIXGONB-Vb;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.04;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`
const Client=styled.span`
 font-family: NIXGONM-Vb;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
`
const Ment=styled.div`
margin:0 auto;
width:1388px;
height: 91px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  box-sizing:border-box;
  padding-top:15px;
  padding-left:50px;
  display:flex;
  flex-direction:column;
 
`
const Top=styled.span`
  font-family: NIXGONB-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
`
const Mid=styled.span`
  font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
`
const Buttons=styled.div`
 width: 50px;
  height: 24px;
  border-radius: 5px;
  background-color: #212121;
  display:flex;
  justify-content:center;
  align-self: center;
  font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: -0.3px;
  text-align: left;
  color: #ffffff;
  margin-left:10px;
`
const ButtonContainer=styled.div`
margin-left:85%;
display:flex;
`
const X=styled.img`

`
export default class PreviewPortfolio extends Component {
    constructor(props){
        super(props)
        this.state={
            field:'',
            infield:[],
            title:'',
            img:'',
            description: ''

        
        }
    }

    componentDidMount(){
      window.scrollTo(0,0)
        api.get(`/partner/portfolio/detail/${this.props.id}`).then(res=>{
            console.log(res)
            this.setState({
                field:res.data.field,
                infield:res.data.in_field,
                title:res.data.title,
                img:res.data.img,
                description: res.data.description,
                profile_image:res.data.profile_image,
                email: res.data.email,
                field:res.data.field,
                reload:false
            })
        }).catch(err=>{
            console.dir(err)
        })
       
    }
    rend=()=>{
        this.setState({reload:!this.state.reload})
    }
    render() {
        
        return (
            <Wrapper>
                <Center>
                <Infor>
                    <My src={`http://54.180.122.126:5555/file/profile/image/${this.state.profile_image}`}/>
                    <He>
                    <Title>{this.state.title}</Title>
                    <Infor><Client>{this.state.email}</Client>클라이언트님</Infor>
                    </He>
                </Infor>

                <X onClick={this.props.set} src={x}/>
                </Center>
                <Ment>
                    <Top>{this.state.field}</Top>
                    <Mid>{this.state.description}</Mid>
                    <ButtonContainer>
                        {this.state.infield.map(res=>{
                            
                            return <>
                            {res==0&&<Buttons>개발</Buttons>}
                            {res==1&&<Buttons>디자인</Buttons>}
                            {res==2&&<Buttons>기획</Buttons>}
                            </>
                        })}
                    
                    
                    
                    </ButtonContainer>
                </Ment>
                <Img src={`http://54.180.122.126:5555/file/portfolio/image/${this.state.img}`}>
                </Img>

            </Wrapper>
            
        )
    }
}
