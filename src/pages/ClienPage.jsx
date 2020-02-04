import React, { Component } from 'react'
import api from '../apis/BaseUrl'
import styled from 'styled-components'
import Client from '../components/Mypage/clients/Client'
import Frame from '../components/Mypage/clients/Frame'
import Preview from '../components/Mypage/clients/Preview'
import Change from '../components/Mypage/clients/Change'
import Last from '../components/main/Last'
import Set from '../components/Mypage/clients/set'
import { returnName, checkPw_edit, returnLocation } from '../apis/CheckForm'
const Banner = styled.div`
height:85px;
`
const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
height:100%;
background-color: #f3f3f3;
`
export default class ClienPage extends Component {
    constructor(props) {
        super(props)
        Array.prototype.division = function (n) {
            var arr = this;
            var len = arr.length;
            var cnt = Math.floor(len / n);
            var tmp = [];
    
            for (var i = 0; i <= cnt; i++) {
                tmp.push(arr.splice(0, n));
            }
    
            return tmp;
    }
        Object.equals = function (x, y) {
            if (x === y) return true;
            if (!(x instanceof Object) || !(y instanceof Object)) return false;
            if (x.constructor !== y.constructor) return false;
            for (var p in x) {
                if (!x.hasOwnProperty(p)) continue;
                if (!y.hasOwnProperty(p)) return false;
                if (x[p] === y[p]) continue; // if they have the same strict value or identity then they are equal 
                if (typeof (x[p]) !== "object") return false; // Numbers, Strings, Functions, Booleans must be strictly equal 
                if (!Object.equals(x[p], y[p])) return false;
            }
            for (p in y) {
                if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
            }
            return true;
        }

        this.state = {
            name: '',
            auth: '',
            email: '',
            location: '',
            data: '',
            phone: '',

            Turn: 0,
            stack: 0,
            
            consulting: [],
            apply_project: [],
            progress_project: [],
            success_project: [],

            reload: false,
            

            profile: {
                phone: '',
                location: '',
                introduce: ''
            },
            imgurl:'',
            profile_image:'',
            reload:false,
            state:0
        }
    }
    reload=()=>{
        this.setState({reload:!this.state.reload})
    }
    // /file/profile/image/
    componentDidMount() {
        window.scrollTo(0,0)
        api.post('/token/check').then(res=>{
            console.log(res)
            this.setState({state:res.status})
        }).catch(err=>console.dir(err))
        api.get('/client/mypage/project').then(res=>{
            const url=res.data.profile_image==undefined?false:`http://54.180.122.126:5555/file/profile/image/${res.data.profile_image}`
            console.log(url)
            this.setState({
                data:res.data,
                consulting:res.data.consulting,
                apply_project: res.data.apply_project,
                progress_project: res.data.progress_project,
                success_project:res.data.success_project,
                profile_image:url
            })
        })
        
        api.get('/info/account').then(res => {
            console.log(res)
            this.setState({ name: res.data.name, auth: res.data.auth },()=>{ this.getInformation();
                this.getPotfolio();
            })
            this.props.setUser(res.data.name)
        })
            .catch(err => {
                console.dir(err)
                this.props.setUser('guest')
            })
    }
    getPotfolio=()=>{
        api.get (`/client/portfolio/${this.state.auth}`).then(res=>{
            console.log(res)
            this.setState({max:Math.ceil(res.data.info.length/6),
                portfolioArray:res.data.info.division(2)})
        }).catch(err=>{
            console.dir(err)
        })

    }

    getInformation=()=> {
        api.get(`/info/client/profile/${this.state.auth}`).then(res => {
            console.log(res.data)
            this.setState({
                data: res.data,
                email: res.data.email,
                location: res.data.location,
                phone: res.data.phone,
            })
        }).catch(err => {
                console.dir(err)
            })
    }
    setPhone = (e) => {
        this.setState({ phone: e.target.value })
    }
    componentDidUpdate() {

        const going = document.getElementsByClassName('going')
        for (let i of going) {
            i.style.backgroundColor = '#ffffff'
        }
        going[this.state.Turn].style.backgroundColor = '#ef4f80'
        if (this.state.Turn == 1) {
           
        let location = document.getElementsByClassName('시')
        let introduce = document.getElementsByClassName('introduce')[0]
        introduce.value=(this.state.introduce||'')
        location[0].value=returnLocation(this.state.location)[0]
        location[1].options[0]=returnLocation(this.state.location)[1]
        
        }

    }

    setTurn = (int) => {
        console.log(int)
        this.setState({ Turn: int })
    }

    setStack = (int) => {
        console.log(int)
        this.setState({ stack: int })
    }
 
   




    EditProfile = () => {
        let formData = new FormData()
        console.log(this.state.image)
        formData.append('image', this.state.image)
        console.log(formData.get('image'))
        api.post('/client/mypage/account', this.state.profile).then(res => {console.log(res);  alert('성공!'); this.setState({ Turn: 0 }) })
            .catch(err => {
                alert('실패')
            })

        api.post('/client/mypage/image', formData).then(res => console.log(res))
            .catch(err => console.dir(err))
    }

    getData = (event) => {
        let item = event.target.parentNode.parentNode.children
        for (let i of item) {
            
            if (i.children[0].id == 'location') {
                const location = returnName(i.children[1].children[0].value, i.children[1].children[1].value)
                console.log(this.state.location)
                if (location) {
                    this.state.profile[i.children[0].id] = location
                }
                else {
                    if(this.state.location=''){
                    alert('지역을 선택해 주세요')
                    return
                    }
                }
            }
            
            else if (i.children[0].id) {
                if (i.children[1].value) {
                    this.state.profile[i.children[0].id] = i.children[1].value
                    console.log(i.children[0])
                }
            }

        
    }
        this.state.profile['phone'] = this.state.phone
        
        this.EditProfile()
    }
    getImgData = (event) => {


        this.setState({ image: event.target.files[0] }, this.loadImage)

    }
    loadImage = () => {
        var reader = new FileReader();
        reader.onload = (e) => {

            document.getElementById('newimg').src = e.target.result
            // document.getElementById(id).src=this.state.image
        }
        reader.readAsDataURL(this.state.image)
    }
    render() {
        return (
            <Wrapper>
                 
                <Banner></Banner>
                <div style={{ display: 'flex' }}>
                    {this.state.Turn == 0 && <Frame success_project={this.state.success_project} progress_project={this.state.progress_project} consulting={this.state.consulting} apply_project={this.state.apply_project}  data={this.state.data} />}
                    {this.state.Turn == 1 && <Change setPhone={this.setPhone} src={this.state.profile_image} getImgData={this.getImgData} getData={this.getData} phone={this.state.phone}  Infor_Edit={this.Infor_Edit} delTech_stack={this.delTech_stack} addTech_stack={this.addTech_stack} tech_stack={this.state.tech_stack} data={this.state.data} stack={this.state.stack} setStack={this.setStack} name={this.state.name}></Change>}
                    {this.state.Turn == 2 && <Preview success_project={this.state.success_project} progress_project={this.state.progress_project} apply_project={this.state.apply_project} data={this.state.data} award={this.state.award} career={this.state.data.career} reload={this.reload}max={this.state.max} portfolioArray={this.state.portfolioArray} data={this.state.data} name={this.state.name}></Preview>}
                        {this.state.Turn == 3 && <Set/>}
                    <Client state={this.state.state}  contract={this.state.contract}num_of_progress={this.state.num_of_progress} num_of_success={this.state.num_of_success} apply={this.state.apply} all_cost={this.state.all_cost} src={this.state.profile_image} setTurn={this.setTurn} data={this.state.data} location={this.state.location} auth={this.state.email} name={this.state.name} />
                </div>
                <Last />
            </Wrapper>
        )
    }
}
