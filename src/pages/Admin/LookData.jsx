import React, { Component } from 'react'
import api from '../../apis/BaseUrl'
import styled from 'styled-components'
import PortfolioItem from '../../components/Portfolio/PortfolioItem'

const
    FlexDiv = styled.div`
display:flex;
justify-content:center;
margin-top:60px;
`
const Button = styled.button`
width:50px;
height:30px;
`
const Banner = styled.div`
height:85px;
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
const Item = styled.div`
width:800px;
`
const Buttons = styled.div`
width:395px;
height:50px;
color:black;
border:1px solid black;
display:flex;
justify-content:center;
align-items:center;
`
const Buttonss = styled.button`
width:200px;
height:50px;
display:flex;
justify-content:center;
align-items:center;
`
export default class LookData extends Component {
    state = {
        partner: [],
        projectData: [],
        project: true,
        account: false,
        seepartner: false,
        seeProject: false,
        reload: false,
        portfolio: [],
        seePort: false,
        deadPro: [],
        setDead:false,

    }


    sign = (id, sign) => {
        api.post('/admin/portfolio', { portfolio_id: id, action: sign }).then(res => {this.getData()})
            .catch(err => console.dir(err))
    }
    getData=()=>{
        api.get('/admin/project/deadline').then(res => {
            console.log(res.data.info)
            this.setState({ deadPro: res.data.info })
        })
        api.get('/admin/portfolio').then(
            res => {
                console.log(res.data.info)
                this.setState({ portfolio: res.data.info })
            }
        )
            .catch(err => { console.log(err) })
        api.get('/admin/partner').then(
            res => {
                this.setState({ partner: res.data.info })
                console.log(res.data.info)
            }
        )
        api.get('/admin/project').then(
            res => {
                this.setState({ projectData: res.data.info })
                console.log(res.data.info)
            }
        )
    }
    componentDidMount() {
        this.getData()
    }
    getProject = () => {
        api.get('/admin/partner').then(
            res => {
                this.setState({ partner: res.data.info })
                console.log(res.data.info)
            })
        this.setState({ reload: !this.state.reload })
    }
    getPartner = () => {
        api.get('/admin/project').then(
            res => {
                this.setState({ projectData: res.data.info })
                console.log(res.data.info)
            }
        )

        this.setState({ reload: !this.state.reload })
    }

    reload=()=>{
        this.setState({reload:!this.state.reload})
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Banner />
                {this.state.seepartner || <div onClick={() => { console.log('a'); this.setState({ seepartner: true }) }}>파트너 신청자 보기</div>}
                {this.state.seepartner && <div onClick={() => { console.log('a'); this.setState({ seepartner: false }) }}>파트너 신청자 닫기</div>}

                {this.state.seepartner &&
                    this.state.partner.map(res => {
                        console.log(res.approve)

                        return <FlexDiv>아이디:{res.auth}<br />
                            이메일:{res.email}<br />
                            이름:{res.name}<br />
                            전화번호:{res.phone}<br />
                            지역:{res.location}<br />
                            승인여부:{res.approve == 1 ? "승인됨" : "승인대기중"}<br />
                            <Button onClick={() => { api.post('/admin/partner', { auth: res.auth, action: 0 }).then(res => { this.getPartner();this.reload();this.getData() }).catch(err => console.dir(err)); }}>승인</Button>
                            <Button onClick={() => { api.post('/admin/partner', { auth: res.auth, action: 1 }).then(res => { this.getPartner();this.reload();this.getData() }).catch(err => console.dir(err)); }}>거부</Button>
                            <Button onClick={() => { api.post('/admin/partner', { auth: res.auth, action: 2 }).then(res => { this.getPartner();this.reload();this.getData() }).catch(err => console.dir(err)); }}>삭제</Button>
                        </FlexDiv>
                    })
                }
                {this.state.seeProject || <div onClick={() => { this.setState({ seeProject: true }) }}>프로젝트 보기</div>}
                {this.state.seeProject && <div onClick={() => { this.setState({ seeProject: false }) }}>프로젝트 닫기</div>}

                {this.state.seeProject &&
                    this.state.projectData.map(res => {
                        console.log(res)

                        return <FlexDiv>
                            프로젝트 이름:{res.project_name}<br />
                            <br />
                            가입날짜:{new Date((res.register_time) * 1000).toLocaleDateString()}<br />
                            모집마감:{new Date((res.register_deadline) * 1000).toLocaleDateString()}<br />
                            지역:{res.location}<br />
                            미팅:{res.meeting == 0 ? ' 카톡 및 전화' : ''}
                            {res.meeting == 1 ? ' 오프라인' : ''}
                            {res.meeting == 2 ? ' 미팅' : ''}<br />
                            시작날짜:{new Date((res.start_time) * 1000).toLocaleDateString()}<br />
                            이름:{res.client_name}<br />
                            희망가격:{res.cost}<br />
                            신청자수:{res.num_of_applicants}<br />
                            분야:{res.field}<br />
                            희망 파트너: {res.hope_partner == 0 ? '    상관없음' : ''}
                            {res.hope_partner == 1 ? '    개인' : ''}
                            {res.hope_partner == 2 ? '    팀' : ''}
                            {res.hope_partner == 3 ? '    법인 사업자' : ''}
                            {res.hope_partner == 4 ? '    개인 사업자' : ''}
                            <br />
                            승인여부:{res.approve == 1 ? "승인됨" : "승인대기중"}<br />
                            <Detail>{'설명:\n' + res.description}</Detail><br />

                            <Button onClick={() => { api.post('/admin/project', { project_id: res.project_id, action: 0 }).then(res => { this.getProject();this.reload();this.getData() }).catch(err => console.dir(err)); }}>승인</Button>
                            <Button onClick={() => { api.post('/admin/project', { project_id: res.project_id, action: 1 }).then(res => { this.getProject();this.reload();this.getData() }).catch(err => console.dir(err)); }}>거부</Button>
                            <Button onClick={() => { api.post('/admin/project', { project_id: res.project_id, action: 2 }).then(res => { this.getProject();this.reload();this.getData() }).catch(err => console.dir(err)); }}>삭제</Button>
                        </FlexDiv>
                    })
                }
                {this.state.seePort || <div onClick={() => { this.setState({ seePort: true }) }}>포트폴리오 보기</div>}
                {this.state.seePort && <div onClick={() => { this.setState({ seePort: false }) }}>포트폴리오 닫기</div>}

                {this.state.seePort &&
                    (this.state.portfolio || []).map(res =>
                        <Item>
                            <PortfolioItem reload={() => this.setState({ load: !this.state.load })} id={res.portfolio_id} img={res.img[0]} title={res.title} kind={res.field} text={res.in_field} />
                            <Buttons>{res.main == 0 ? '승인안됨' : '승인됨'}</Buttons>
                            <div style={{ display: 'flex' }}>
                                <Buttonss onClick={() => this.sign(res.portfolio_id, 0)}>승인하기</Buttonss>
                                <Buttonss onClick={() => this.sign(res.portfolio_id, 1)}>승인해제하기</Buttonss>
                            </div>
                        </Item>
                    )}
                     {this.state.setDead || <div onClick={() => { this.setState({ setDead: true }) }}>마감된 프로젝트 리스트 보기</div>}
                {this.state.setDead && <div onClick={() => { this.setState({ setDead: false }) }}>마감된 프로젝트 리스트 닫기</div>}


                {this.state.setDead&&(this.state.deadPro || []).map(res => {
                    return <FlexDiv>
                        프로젝트 이름:{res.project_name}<br />
                        <br />
                        가입날짜:{new Date((res.register_time) * 1000).toLocaleDateString()}<br />
                        모집마감:{new Date((res.register_deadline) * 1000).toLocaleDateString()}<br />
                        지역:{res.location}<br />
                        미팅:{res.meeting == 0 ? ' 카톡 및 전화' : ''}
                        {res.meeting == 1 ? ' 오프라인' : ''}
                        {res.meeting == 2 ? ' 미팅' : ''}<br />
                        시작날짜:{new Date((res.start_time) * 1000).toLocaleDateString()}<br />
                        이름:{res.client_name}<br />
                        희망가격:{res.cost}<br />
                        {console.log(res)}
                        신청자Id:{(res.applicants||['없음']).map(rec=>{return rec})}<br />
                        분야:{res.field}<br />
                        희망 파트너: {res.hope_partner == 0 ? '    상관없음' : ''}
                        {res.hope_partner == 1 ? '    개인' : ''}
                        {res.hope_partner == 2 ? '    팀' : ''}
                        {res.hope_partner == 3 ? '    법인 사업자' : ''}
                        {res.hope_partner == 4 ? '    개인 사업자' : ''}
                        <br />
                        승인여부:{res.approve == 1 ? "승인됨" : "승인대기중"}<br />
                        <Detail>{'설명:\n' + res.description}</Detail><br />

                        <Button onClick={() => {prompt('참여시킬 사람의 아이디를 입력하세요(여러명일시 ,를 기준으로 나누시오'); api.post('/admin/project', { project_id: res.project_id, action: 0 }).then(res => { this.getProject() }).catch(err => console.dir(err)); }}>계약</Button>
                        
                    </FlexDiv>
                })}

            </div>
        )
    }
}
