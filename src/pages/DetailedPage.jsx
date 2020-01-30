import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../apis/BaseUrl'
import Requests from '../apis/Request'
import arrow from '../assets/imgs/icons/ionic-md-arrow-back.svg'
import progress0 from '../assets/imgs/progress0.png'
import progress1 from '../assets/imgs/progress1.png'
import progress2 from '../assets/imgs/progress2.png'
import Items from '../components/detaile/items'
import { setBanner } from '../apis/Style'
import Qna from '../components/Project/Qna'
import Last from '../components/main/Last'
import Client from '../components/Project/Client'

const Inputs = styled.input`
margin-left:2px;
padding-left:18px;
width:98%;
height:110px;
font-family: 'Noto Sans KR';
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
  align-items:flex-start;
    border:none;
    box-sizing:border-box;
`
const Toss = styled.div`
cursor:pointer;
width: 104px;
  height: 40px;
  background-color: #ef4f80;
  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  align-items:center;
  justify-content:center;
  display:flex;
  color: #ffffff;
`
const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
@font-face { font-family: 'NIXGONL-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONL-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
@font-face { font-family: 'NIXGONB-Vb'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/NIXGONB-Vb.woff') format('woff'); font-weight: normal; font-style: normal; }
`
const First = styled.div`
width:83%;
margin-left:98px;
`
const Wrap = styled.div`
  width: 170px;
  height: 120px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  position:relative;
`
const Titles = styled.span`
 font-family: 'Noto Sans KR';
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.04;
  letter-spacing: -0.5px;
  text-align: center;
  color: #212121;

  position:absolute;
  top:38px;
  width:100%;
margin: 0 auto;
`
const Pink = styled.span`
  font-family: NIXGONB-Vb;
  color: #ef4f80;
`
const Sub = styled.span`
position:absolute;
top:88px;
font-family: NIXGONB-Vb;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: normal;
  text-align: center;
  color: #6f6f6f;
  width:100%;
margin: 0 auto;
`


const Banner = styled.div`
height:115px;
`
const List = styled.div`
margin-bottom:20px;
display:flex;
box-sizing:border-box;
padding-left:50px;
width: 870px;
  height: 53px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  font-family: 'Noto Sans KR';
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 53px;
  letter-spacing: normal;
  color: #212121;
`
const Middle = styled.div`
display:flex;
align-items:center;
`
const Img = styled.img`
cursor:pointer;
width:15px;
`
const Progress = styled.img`
 width: 171px;
  height: 4px;
  opacity: 0.36;
  border-radius: 3px;
  background-color: #000000;
`
const Status = styled.span`
font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: -0.3px;
  text-align: left;
  color: #ef4f80;
`
const Line = styled.div`
width: 100%;
height:0px;
  border: solid 1px #212121;
box-sizing:border-box;
`
const Dday = styled.span`
font-family: NIXGONB-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: -0.3px;
  text-align: left;
  color: #212121;
`
const Sero = styled.div`
display:flex;
flex-direction:column;
`
const Garo = styled.div`
display:flex;
justify-content:space-between;
`
const Item = styled.div`
width: 870px;
display:flex;
flex-direction:column;
box-sizing:border-box;
 padding-bottom:20px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
`
const Kind = styled.span`
font-family: 'Noto Sans KR';
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.69;
  letter-spacing: -0.26px;
  text-align: left;
  color: #6f6f6f;
`
const Title = styled.span`
font-family: NIXGONB-Vb;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.5px;
  text-align: left;
  color: #ef4f80;
`
const GrayLine = styled.div`
margin:30px 0px;
width: 100%;
height:0px;
  border: solid 1px #e0e0e0;
box-sizing:border-box;
`
const Left = styled.div`
display:flex;
justify-content:space-between;
border-top:solid 1px #6f6f6f;
`
const Infor = styled.span`
font-family: NIXGONB-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  color: #6f6f6f;
`
const Detail = styled.div`
width: 708px;
word-break:break-all;
 font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: left;
  color: #212121;
  white-space:pre-wrap;
  margin-left:125px;
`
const Submit = styled.div`
margin-top:20px;
  width: 870px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  margin-bottom:25px;
`
const FileName = styled.span`
cursor:pointer;
margin-left:125px;
 font-family: NIXGONB-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
`



export default class DetailedPage extends Component {
    state = {
        project_id: undefined,
        project_name: "웹 개발자 구함",
        description: "데이터 처리",
        register_time: 1580237084,
        register_deadline: 1580628667,
        location: "서울시 강남구",
        meeting: 0,
        client_name: "김저격",
        cost: 50000000,
        days: 15,
        num_of_applicants: 0,
        progress: 0,
        field: "Web/쇼핑몰 개발",
        hope_partner: 0,
        start_time: 0,
        review_title: '',
        review_description: '',
        review_secret: false,
        review: [],
        client_num_of_projects: 0,
        client_num_of_contract: 0,
        client_num_of_progress: 0,
        client_num_of_success: 0,
        client_name: '',
        file_id: '',
        file_name: ''
    }
    componentDidMount() {
        setBanner('프로젝트')

        api.get('/info/account').then(res => {
            this.props.setUser(res.data.name)
        })
            .catch(err => {
                console.dir(err)
                this.props.setUser('guest')
            })
        var nowAddress = unescape(window.location.href);
        var parameters = (nowAddress.slice(nowAddress.indexOf('?') + 1,
            nowAddress.length)).split('&');
        var id = parameters[0].slice(4)
        this.setState({ id: id })
        api.post('/info/project/detail', { 'project_id': id })
            .then(res => {
                console.log(res)
                this.setState({
                    client_name: res.data.client_name,
                    client_num_of_projects: res.data.client_num_of_projects,
                    client_num_of_contract: res.data.client_num_of_contract,
                    client_num_of_progress: res.data.client_num_of_progress,
                    client_num_of_success: res.data.client_num_of_success,
                    project_id: res.data.project_id,
                    project_name: res.data.project_name,
                    description: res.data.description,
                    register_time: res.data.register_time,
                    register_deadline: res.data.register_deadline,
                    location: res.data.location,
                    meeting: res.data.meeting,
                    client_name: res.data.client_name,
                    cost: res.data.cost,
                    days: res.data.days,
                    num_of_applicants: res.data.num_of_applicants,
                    progress: res.data.progress,
                    field: res.data.field,
                    hope_partner: res.data.hope_partner,
                    start_time: res.data.start_time,
                    file_id: res.data.file_id,
                    file_name: res.data.file_name
                }, this.getRivew)
            })
            .catch(err => console.dir(err))


    }

    sign = () => {
        if (window.localStorage.getItem('token') === null) {
            alert('로그인 후 이용해주십시오')
        }
        else {
            api.post('/partner/project/apply', { project_id: this.state.project_id }).then(res => {
                alert('신청 성공')
            })
                .catch(err => {
                    if (err.response.status === 401) {
                        alert('파트너만 신청 가능합니다')
                    }

                }
                )
        }
    }

    getRivew = () => {
        api.post('/partner/project/qna/view', { project_id: '' + this.state.project_id }).then(res => {
            console.log(res.data.qnas)
            this.setState({ review: res.data.qnas })
        }
        )
            .catch(err => console.dir(err))
    }
    Click = () => {
        this.setState({ review_secret: !this.state.secret })
    }
    Change = (evnet) => {
        console.log(evnet.target.value)
        this.setState({ review_description: evnet.target.value })
    }
    Done = () => {

        api.post('/partner/project/qna', {
            project_id: '' + this.state.project_id,
            description: this.state.review_description,
            secret: this.state.review_secret
        }).then(res => { alert('등록 성공'); window.location.reload() })
            .catch(err => console.dir(err))
    }
    fileDown = () => {
        window.open(`http://54.180.122.126:5555/file/downloader/${this.state.file_id}_${this.state.file_name}`)

        // api.post('/file/downloader', { file_id: this.state.file_id, file_name: this.state.file_name })
        //     .then(res => {console.log(res)
        //     })
        //     .catch(err => console.dir(err))

    }

    render() {
        return (
            <>

                {this.state.project_id == undefined ?
                    <div style={{ marginTop: '100px', fontSize: '20px' }}>존재하지 않는 게시글</div>
                    :
                    <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <Banner />
                        <div style={{ display: 'flex' }}>

                            <Wrapper>

                                <List>
                                    <Middle><Img src={arrow} onClick={() => { window.location.href = '/project' }}></Img></Middle>
                                    <Middle style={{ marginLeft: '20px' }}>목록으로</Middle>

                                </List>
                                <Item>
                                    <First>
                                        <Kind>{this.state.field}</Kind>
                                        <Garo style={{ justifyContent: 'space-between' }}>
                                            <Title>{this.state.project_name}</Title>
                                            <Sero>
                                                <Garo style={{ justifyContent: 'space-between' }}>
                                                    <Status>신청진행중</Status>
                                                    <Dday>D-{parseInt((this.state.register_deadline * 1000 - new Date()) / 86400553)}</Dday>
                                                </Garo>

                                                <Progress src={progress0} alt="" />
                                            </Sero>
                                        </Garo>
                                        <Line></Line>
                                        <Garo style={{ marginTop: '45px' }}>
                                            <Wrap>
                                                <Titles><Pink>아이디어만 있음</Pink></Titles>
                                                <Sub>기획상태</Sub>
                                            </Wrap>
                                            <Wrap>
                                                <Titles><Pink>{this.state.days}</Pink>일</Titles>
                                                <Sub>진행기간</Sub>
                                            </Wrap>
                                            <Wrap>
                                                <Titles><Pink>{this.state.cost}</Pink>원</Titles>
                                                <Sub>희망금액</Sub>
                                            </Wrap>
                                            <Wrap>
                                                <Titles><Pink>{this.state.num_of_applicants}</Pink>명</Titles>
                                                <Sub>지원수</Sub>
                                            </Wrap>
                                        </Garo>
                                        <Garo style={{ marginTop: '20px' }}>
                                            <Wrap>
                                                <Titles>
                                                    <Pink>
                                                        {this.state.hope_partner == 0 ? '    상관없음' : ''}
                                                        {this.state.hope_partner == 1 ? '    개인' : ''}
                                                        {this.state.hope_partner == 2 ? '    팀' : ''}
                                                        {this.state.hope_partner == 3 ? '    법인 사업자' : ''}
                                                        {this.state.hope_partner == 4 ? '    개인 사업자' : ''}
                                                    </Pink>

                                                </Titles>
                                                <Sub>희망하는 파트너</Sub>
                                            </Wrap>
                                            <Wrap>
                                                <Titles><Pink>{new Date((this.state.register_deadline) * 1000).toLocaleDateString()}</Pink></Titles>
                                                <Sub>모집마감일</Sub>
                                            </Wrap>
                                            <Wrap>
                                                <Wrap>
                                                    <Titles><Pink>{new Date((this.state.start_time) * 1000).toLocaleDateString()}</Pink></Titles>
                                                    <Sub>시작예정일</Sub>
                                                </Wrap>
                                            </Wrap>
                                            <Wrap>
                                                <Titles><Pink>
                                                    {this.state.meeting == 0 ? ' 카톡 및 전화' : ''}
                                                    {this.state.meeting == 1 ? ' 오프라인' : ''}
                                                    {this.state.meeting == 2 ? ' 미팅' : ''}
                                                </Pink></Titles>
                                                <Sub>사전미팅</Sub>
                                            </Wrap>
                                        </Garo>
                                        <GrayLine></GrayLine>
                                        <Garo>
                                            <Infor>상세정보</Infor>
                                            <Detail>{this.state.description}</Detail>
                                        </Garo>
                                        <GrayLine />
                                        {(this.state.file_name == 'null.txt'||this.state.file_name == '') ||
                                            <>
                                                <Infor>상세정보</Infor>
                                                <FileName onClick={this.fileDown}>{this.state.file_name}</FileName>
                                                <GrayLine />
                                            </>

                                        }
                                        {(this.state.review || []).length == 0 || <>
                                            <Sero>
                                                <Infor style={{ marginBottom: '10px' }}>프로젝트 문의</Infor>
                                                {console.log(this.state.review)}
                                                {(this.state.review || []).map(res => {
                                                    return <Qna res={res}></Qna>
                                                })}
                                            </Sero>
                                            <GrayLine />
                                        </>
                                        }
                                    </First>
                                </Item>

                                <Submit>
                                    <Inputs onChange={this.Change} name='review' placeholder='프로젝트에 대한 문의를 남겨주세요.'></Inputs>
                                    <Left >
                                        <span style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                                            <input onClick={this.Click} className='check' type="checkbox" name="" id="asd" />
                                            <label style={{ padding: '0px' }} for='asd'>비밀글</label>
                                        </span>

                                        <Toss onClick={this.Done} >문의 등록</Toss>
                                    </Left>
                                </Submit>
                            </Wrapper>
                            <Client client_num_of_projects={this.state.client_num_of_projects}
                                client_num_of_contract={this.state.client_num_of_contract}
                                client_num_of_progress={this.state.client_num_of_progress}
                                client_num_of_success={this.state.client_num_of_success}
                                client_name={this.state.client_name}
                                sign={this.sign}
                            />




                        </div>
                        <Last />
                    </div>
                }

            </>
        )
    }
}
