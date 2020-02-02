import React, { Component } from 'react'
import api from '../apis/BaseUrl'
import styled from 'styled-components'
import Client from '../components/Mypage/clients/Client'
import Frame from '../components/Mypage/clients/Frame'
import Preview from '../components/Mypage/clients/Preview'
import Change from '../components/Mypage/clients/Change'
import Last from '../components/main/Last'
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
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
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
            myproject: false,
            Turn: 0,
            stack: 0,
            tech_stack: [],
            reload: false,
            career: [],
            award: [],
            profile: {
                password: '',
                phone: '010',
                location: '',
                field: '',
                introduce: ''
            },
            image: '',
            imgurl: '',
            apply:0,
            num_of_progress:0,
            num_of_success:0,
            all_cost:0,
            contract:0,
            portfolioArray:[],
            max:0,
            reload:false
        }
    }
    reload=()=>{
        this.setState({reload:!this.state.reload})
    }
    componentDidMount() {

        api.get('/info/account').then(res => {
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
                contract:res.data.contract,
                apply:res.data.apply,
                num_of_progress:res.data.num_of_progress,
                num_of_success:res.data.num_of_success,
                all_cost:res.data.all_cost,
                data: res.data,
                email: res.data.email,
                location: res.data.location,
                tech_stack: res.data.tech_stack,
                career: res.data.career,
                award: res.data.award,
                phone: res.data.phone,
                imgurl: `https://54.180.122.126:5555/file/profile/image/${res.data.profile_image}`
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
        location[0].value=returnLocation(this.state.location)[0]-1
        location[1].options[0]=new Option(returnLocation(this.state.location)[1],0)
        
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
    addTech_stack = (event) => {
        const value = event.target.parentNode.children[1].value
        console.dir(value)
        if (value == '' || value == '선택')
            return
        else {
            if (this.state.tech_stack.indexOf(value) == -1)
                this.state.tech_stack.push(value)
            this.setState({ reload: !this.state.reload })
        }
    }
    delTech_stack = (str) => {
        this.state.tech_stack.splice(this.state.tech_stack.indexOf(str), 1)
        this.setState({ reload: !this.state.reload })
    }
    Infor_Edit = () => {
        api.post('/client/mypage/techstack', { tech_stack: this.state.tech_stack }).then(res => {
            console.log(res)
        })
            .catch(err => {
                console.dir(err)
            })
    }

    submitCareer = () => {
        api.post('/client/mypage/career', { career: this.state.career }).then(res => alert('등록성공'))
            .catch(err => console.dir(err))
    }
    plusCareer = (event) => {
        let data = {}
        console.log(event.target.parentNode.parentNode.children)
        let item = event.target.parentNode.parentNode.children
        for (let i of item) {
            if (i.children[1].value == '') {
                alert('비어있는 태그가 있습니다')
                return
            }
            else if (i.children[0].id == 'location') {
                const location = returnName(i.children[1].children[0].value, i.children[1].children[1].value)
                if (!location) {
                    alert('비어있는 태그가 있습니다')
                    return
                }
                else {
                    data[i.children[0].id] = location
                }
            }
            else {
                data[i.children[0].id] = i.children[1].value
            }
            console.log(data)
        }
        this.state.career.push(data)
        this.setState({ reload: !this.state.reload })

    }
    delCarrer = (data) => {
        console.log(data)
        for (let i in this.state.career) {
            console.log(i)
            if (Object.equals(this.state.career[i], data)) {
                this.state.career.splice(i, 1)
            }
        }
        this.setState({ reload: !this.state.reload })

        console.log(this.state.career)
    }

    submitAward = () => {
        api.post('/client/mypage/award', { award: this.state.award }).then(res => alert('등록성공'))
            .catch(err => console.dir(err))
    }
    plusAward = (event) => {
        let data = {}
        console.log(event.target.parentNode.parentNode.children)
        let item = event.target.parentNode.parentNode.children

        for (let i = 0; i < 3; i++) {
            if (item[i].children[1].value == '') {
                alert('비어있는 태그가 있습니다')
                return
            }

            else {
                console.log(item[i].children[1].value)
                data[item[i].children[0].id] = item[i].children[1].value
            }
            console.log(item[i])
        }
        this.state.award.push(data)
        this.setState({ reload: !this.state.reload }
        )
        console.log(data)

    }
    delAward = (data) => {
        console.log(data)
        for (let i in this.state.award) {
            console.log(i)
            if (Object.equals(this.state.award[i], data)) {
                this.state.award.splice(i, 1)
            }
        }
        this.setState({ reload: !this.state.reload })

        console.log(this.state.award)
    }

    EditProfile = () => {
        let formData = new FormData()
        console.log(this.state.image)
        formData.append('image', this.state.image)
        console.log(formData.get('image'))
        api.post('/client/mypage/account', this.state.profile).then(res => { alert('성공!'); this.setState({ Turn: 0 }) })
            .catch(err => {
                alert('실패')
            })

        api.post('/client/mypage/image', formData).then(res => console.log(res))
            .catch(err => console.dir(err))
    }

    getData = (event) => {
        let pw = ''
        let item = event.target.parentNode.parentNode.children
        for (let i of item) {
            if (i.children[0].id == 'location') {
                const location = returnName(i.children[1].children[0].value, i.children[1].children[1].value)
                if (location) {
                    this.state.profile[i.children[0].id] = location
                }
                else {
                    alert('지역을 선택해 주세요')
                    return
                }
            }
            else if (i.children[0].id == 'repassword') {
                pw = i.children[1].value
            }
            else if (i.children[0].id) {
                if (i.children[1].value) {
                    this.state.profile[i.children[0].id] = i.children[1].value
                }
            }
        }
        this.state.profile['phone'] = this.state.phone
        if (this.state.profile['password'] == pw) {
            this.EditProfile()

        }
        else {
            alert('비밀번호가 일치하지않습니다')
        }
        console.log(this.state.profile)
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
                    {this.state.Turn == 0 && <Frame data={this.state.data} />}
                    {this.state.Turn == 1 && <Change setPhone={this.setPhone} src={this.state.imgurl} getImgData={this.getImgData} getData={this.getData} phone={this.state.phone} delAward={this.delAward} plusAward={this.plusAward} submitAward={this.submitAward} award={this.state.award} delCarrer={this.delCarrer} plusCareer={this.plusCareer} submitCareer={this.submitCareer} career={this.state.data.career} Infor_Edit={this.Infor_Edit} delTech_stack={this.delTech_stack} addTech_stack={this.addTech_stack} tech_stack={this.state.tech_stack} data={this.state.data} stack={this.state.stack} setStack={this.setStack} name={this.state.name}></Change>}
                    {this.state.Turn == 2 && <Preview data={this.state.data} award={this.state.award} career={this.state.data.career} reload={this.reload}max={this.state.max} portfolioArray={this.state.portfolioArray} data={this.state.data} name={this.state.name}></Preview>}

                    <Client contract={this.state.contract}num_of_progress={this.state.num_of_progress} num_of_success={this.state.num_of_success} apply={this.state.apply} all_cost={this.state.all_cost} src={this.state.imgurl} setTurn={this.setTurn} data={this.state.data} location={this.state.location} auth={this.state.email} name={this.state.name} />
                </div>
                <Last />
            </Wrapper>
        )
    }
}
