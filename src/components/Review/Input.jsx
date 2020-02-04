import React, { Component } from 'react'
import styled from 'styled-components'
import no_star from '../../assets/imgs/star/star_empty.svg'
import half_star from '../../assets/imgs/star/star_half.svg'
import full_star from '../../assets/imgs/star/star_full.svg'
import api from '../../apis/BaseUrl'
import big from '../../assets/imgs/돋보기.svg'


const Wrapper = styled.div`
display:flex;
`

const Item = styled.div`
box-sizing:border-box;
display:flex;
flex-direction:column;
height:185px;
padding:1px;
border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  width:1080px;
`
const Inputs = styled.input`
width:66%;
height:100%;
font-family: 'Noto Sans KR',sans-serif;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
  padding-left:20px;
  align-items:flex-start;
    border:none;
    box-sizing:border-box;
    
`
const Line = styled.div`
height:0px;
width:100%;
border: 0.5px solid #6f6f6f;
box-sizing:border-box;

`
const Star = styled.img`

  
`
const Stars = styled.div`
display:flex;
`
function star(x) {
    if (x == undefined)
        x = 0
    let i = 0;
    let back = []
    if (x % 2 === 0) {


        for (i = 0; i < x / 2; i++) {
            back.push(<Star src={full_star}></Star>)
        }
        for (i = x / 2; i < 5; i++) {
            back.push(<Star src={no_star}></Star>)
        }


    } else {
        x = x - 1
        for (i = 0; i < x / 2; i++) {
            back.push(<Star src={full_star}></Star>)
        }
        back.push(<Star src={half_star}></Star>)
        for (i = x / 2; i < 4; i++) {
            back.push(<Star src={no_star}></Star>)
        }
    }
    return back

}

const Flow = styled.select`
margin-left:15px;
  width: 101px;
  height: 35px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  font-family: 'Noto Sans KR',sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
`

const Rap = styled.div`
display:flex;
`
const FlexDiv = styled.div`
flex:1;
`
const Toss = styled.div`
cursor:pointer;
width: 104px;
  height: 40px;
  background-color: #ef4f80;
  font-family: 'Noto Sans KR',sans-serif;
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
const Search = styled.select`
    padding-left:15px;
    box-sizing:border-box;
    margin-left:1.4%;
 width: 250px;
  height: 35px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  font-family: 'Noto Sans KR',sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
`
export default class Input extends Component {
    setValue = (e) => {
        this.setState({ stars: e.target.value })
    }
    state = {
        stars: 0,
        project_id: 9,
        review_title: '',
        review: ''
    }
    change = (event) => {
        const data = {}
        data[event.target.name] = event.target.value
        this.setState(data)
    }
    toss = () => {

        api.post('/client/review', this.state).then(res => {alert('리뷰 등록에 성공했습니다');window.location.reload()})
            .catch(err => {alert('리뷰 등록에 실패했습니다')})
    }
    render() {
        return (

            <Wrapper>
                <FlexDiv></FlexDiv>

                <Item>
                    <div style={{height: '35px', flex: '1', display: 'flex', justifyContent: 'space-between' }}>
                        <Inputs  value={this.state.review_title} onChange={this.change} name='review_title' placeholder='제목을 입력해주세요'></Inputs>
                        <Rap>
                            <Stars id='asdasd'>
                                {
                                    star(this.state.stars).map(res => { return res })
                                }

                            </Stars>
                            <Flow id='asd' onChange={this.setValue}>
                                <option value="0" selected disabled>별점</option>
                                <option value="1">1점</option>
                                <option value="2">2점</option>
                                <option value="3">3점</option>
                                <option value="4">4점</option>
                                <option value="5">5점</option>
                                <option value="6">6점</option>
                                <option value="7">7점</option>
                                <option value="8">8점</option>
                                <option value="0">9점</option>
                                <option value="10">10점</option>
                            </Flow>
                        </Rap>
                    </div>

                    <Line />

                    <div style={{ flex: '10',height:'104px' }}>
                        <Inputs value={this.state.review} onChange={this.change} name='review' placeholder='진행하신 프로젝트에 후기를 남겨주세요.'></Inputs>
                    </div>
                    <Line />
                    <div style={{alignItems:'center', display: 'flex', flex: '1', justifyContent:'space-between',height:'45px' }}>
                        <Search placeholder='프로젝트를 검색하세요.' onChange={(e)=>this.setState({project_id:e.target.value})} >
                            <option value="0" disabled selected>프로젝트를 선택하십시오</option>
                            {
                            (this.props.myProject||[]).map(res=>{
                                console.log(res)
                                return <option value={res.project_id}>{res.project_name}</option>
                            })
                            }
                        </Search>
                        <Toss onClick={this.toss} >후기등록</Toss>
                    </div>

                </Item>
                <FlexDiv></FlexDiv>
            </Wrapper>
        )
    }
}
