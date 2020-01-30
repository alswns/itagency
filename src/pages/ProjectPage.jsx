import React, { Component } from 'react'
import { setBanner } from '../apis/Style'
import Last from '../components/main/Last'
import styled from 'styled-components'
import Top from '../components/Project/Top'
import Filter from '../components/Project/Filter'
import api from '../apis/BaseUrl'
const Wrapper=styled.div`
width:100%;
background:#f3f3f3;
`

export default class ProjectPage extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            project:null,
            max:0,
            arrange :0
        }
      }
    
    componentDidMount(){
        setBanner('프로젝트')
        api.get('/info/account').then(res=>{
            this.props.setUser(res.data.name)
        })
        .catch(err=>{
            console.dir(err)
            this.props.setUser('guest')
        })
        api.post('/info/project/all',{arrange:this.state.arrange},{body:{arrange:this.state.arrange}}).then(res=>{console.dir(res)
        this.setState({project:res.data.info,max: Math.ceil(res.data.info.length/7)})
        }).catch(err=>console.dir(err))
        console.log(this.state)
        document.getElementById(''+this.state.arrange).style.color='#ef4f80'
    }
    setArrange=(event)=>{
        this.setState({arrange:parseInt( event.target.id)}, (event)=>{api.post('/info/project/all',{arrange:this.state.arrange},{body:{arrange:this.state.arrange}}).then(res=>{console.dir(res)
            this.setState({project:res.data.info})
            }).catch(err=>console.dir(err));
            console.log(event)
           

        })
            console.log(this.state)
            const target=event.target.parentNode.children
            for(let i of target){
                i.style.color='#212121'
                i.style.fontWeight='500'
            }
            event.target.style.color='#ef4f80'
    }
 
    render() {
        return (
            <Wrapper>
                <Top/>
                <Filter max={this.state.max} setArrange={this.setArrange} project={this.state.project}/>
            <Last/>
            </Wrapper>
        )
    }
}
