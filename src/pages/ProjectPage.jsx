import React, { Component } from 'react'
import { setBanner } from '../apis/Style'
import Last from '../components/main/Last'
import styled from 'styled-components'
import Top from '../components/Project/Top'
import Filter from '../components/Project/Filter'
import api from '../apis/BaseUrl'
const Wrapper = styled.div`
width:100%;
background:#f3f3f3;
`

export default class ProjectPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: null,
            max: 0,
            arrange: 0,
            fillter: {
                '개발/애플리케이션': false,
                '개발/워드프레스': false,
                '개발/퍼블리싱': false,
                '개발/소프트웨어': false,
                '개발/커머스': false,
                '개발/게임': false,
                '개발/임베디드': false,
                '개발/기타': false,
                '디자인/웹': false,
                '디자인/애플리케이션': false,
                '디자인/제품': false,
                '디자인/프레젠테이션': false,
                '디자인/인쇄물': false,
                '디자인/커머스': false,
                '디자인/로고': false,
                '디자인/그래픽': false,
                '디자인/영상': false,
                '디자인/게임': false,
                '디자인/기타': false
            },
            reload: false,
            ing: {
                '0':true,
                '1':true,
                '2':true
            },
            developer:true,
            desinger:true,
            searchKey:''

        }
    }
    setSearchKey=(e)=>{
        this.setState({searchKey:e.target.value})
    }
 
    setDe = () => {
        this.state.fillter['개발/웹'] = this.state.developer
        this.state.fillter['개발/애플리케이션'] = this.state.developer
        this.state.fillter['개발/워드프레스'] = this.state.developer
        this.state.fillter['개발/퍼블리싱'] = this.state.developer
        this.state.fillter['개발/소프트웨어'] = this.state.developer
        this.state.fillter['개발/커머스'] = this.state.developer
        this.state.fillter['개발/게임'] = this.state.developer
        this.state.fillter['개발/임베디드'] = this.state.developer
        this.state.fillter['개발/기타'] = this.state.developer
        this.setState({rerload:!this.state.reload})

    }
    setDes = () => {
       
        this.state.fillter['디자인/웹'] = this.state.desinger
        this.state.fillter['디자인/애플리케이션'] = this.state.desinger
        this.state.fillter['디자인/제품'] = this.state.desinger
        this.state.fillter['디자인/프레젠테이션'] = this.state.desinger
        this.state.fillter['디자인/인쇄물'] = this.state.desinger
        this.state.fillter['디자인/커머스'] = this.state.desinger
        this.state.fillter['디자인/로고'] = this.state.desinger
        this.state.fillter['디자인/그래픽'] = this.state.desinger
        this.state.fillter['디자인/영상'] = this.state.desinger
        this.state.fillter['디자인/게임'] = this.state.desinger
        this.state.fillter['디자인/기타'] = this.state.desinger

        this.setState({rerload:!this.state.reload})
    }
    Set=()=>{
      
    }
    componentDidMount() {
        window.scrollTo(0,0)
        this.setDe()
        this.setDes()
        setBanner('프로젝트')
        api.get('/info/account').then(res => {
            this.props.setUser(res.data.name)
        })
            .catch(err => {
                console.dir(err)
                this.props.setUser('guest')
            })
        api.post('/info/project/all', { arrange: this.state.arrange }, { body: { arrange: this.state.arrange } }).then(res => {
            console.dir(res)
            this.setState({ project: res.data.info, max: Math.ceil(res.data.info.length / 7) })
        }).catch(err => console.dir(err))
        console.log(this.state)
        document.getElementById('' + this.state.arrange).style.color = '#ef4f80'
    }

    setArrange = (event) => {
        this.setState({ arrange: parseInt(event.target.id) }, (event) => {
            api.post('/info/project/all', { arrange: this.state.arrange }, { body: { arrange: this.state.arrange } }).then(res => {
                console.dir(res)
                this.setState({ project: res.data.info })
            }).catch(err => console.dir(err));


        })
        const target = event.target.parentNode.children
        for (let i of target) {
            i.style.color = '#212121'
            i.style.fontWeight = '500'
        }
        event.target.style.color = '#ef4f80'
    }
    setData = (event) => {
        if(!event.target.checked){
        if(event.target.id.slice(0,3)=='개발/'){
            this.setState({developer:false})
        }
        else if (event.target.id.slice(0,3)=='디자인'){
            this.setState({desinger:false})

        }
        }
        this.state.fillter[event.target.id] = event.target.checked
        this.setState({ reload: !this.state.reload })
    }
    setStatus = (event) => {
        this.state.ing[event.target.id] = !this.state.ing[event.target.id]
        this.setState({ reload: !this.state.reload })

    }
    filt = obj => {
        let newArray = []
        for (let i of Object.keys(obj)) {
            if (obj[i]) {
                newArray.push(i)
            }
        }
        return newArray
    }
   
    keywordSearch=()=>{
        
        let data=(this.state.project||[]).filter(res=>{
            return res.project_name.match(this.state.searchKey)!=null
        })
        console.log(data)
        return data
    }

    render() {
        return (
            <Wrapper>
                <div style={{ transform: 'scale(0.85)', marginTop: '-90px' }}>
                    <Top setSearchKey={this.setSearchKey} />
                    <Filter keywordSearch={this.keywordSearch()} booling={this.state.ing} checckdesinger={this.state.desinger} checkdeveloper={this.state.developer} desinger={()=>this.setState({desinger:!this.state.desinger},this.setDes)} 
                    developer={()=>this.setState({developer:!this.state.developer},this.setDe)} 
                    On={this.state.fillter} ing={this.filt(this.state.ing)} 
                    setStatus={this.setStatus} fillter={this.filt(this.state.fillter)} 
                    setData={this.setData} max={this.state.max} 
                    setArrange={this.setArrange} project={this.keywordSearch()} />
                </div>
                <Last />
            </Wrapper>
        )
    }
}
