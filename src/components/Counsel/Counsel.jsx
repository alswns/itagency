import React from 'react'
import styled from 'styled-components'
import CounselItem from './CounselItem'
import mid from '../../assets/imgs/status/mid.svg'
import last from '../../assets/imgs/status/last.svg'
import first from '../../assets/imgs/status/first.svg'
import {setDate, setDay} from './setCategory'
const Wrapper = styled.div `
height: 1556px;
width: 1076px;
margin: 0 auto;
border: solid 1px #e0e0e0;
  background-color: #ffffff;
`
const Require = styled.div `
font-family: NIXGONB-Vb;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
  margin-left:4.6%;
  margin-top:10px;
  margin-bottom:26px;
`
const Paper = styled.div `
width:64%;
`
const Pink = styled.span `
color:#ef4f80;
`

const Category = styled.span `
display:block;
width: 147px;
margin-right:30px;
font-family:'Noto Sans KR';
  font-size: 15px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: right;
  color: #6f6f6f;
`
const Container = styled.div `
display:flex;
margin-bottom:18px;
`
const AddFile = styled.input `
width: 126px;
  height: 35px;
  border-radius: 5px;
  border: solid 1px #ef4f80;
  background-color: #ffffff;
`
const PojectName = styled.input `
width: 410px;
  height: 35px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
`
const Side = styled.div `
display:flex;
flex-direction:column;
`
const Label = styled.label `
margin-top:5px;
font-family:'Noto Sans KR';
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
`
const Cate = styled.select `
width: 200px;
  height: 35px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  font-family:'Noto Sans KR';
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
  padding-left:10px;
`
const ItemContainer = styled.div `
display:flex;
`
var cat1_num = ['개발', '디자인']
var cat2_num = new Array()
cat2_num[1] = [
    '웹',
    '애플리케이션',
    '워드프레스',
    '퍼블리싱',
    '일반 소프트웨어',
    '커머스,쇼핑물',
    '게임',
    '임베디드',
    '기타'
]
cat2_num[2] = [
    '웹',
    '애플리케이션',
    '제품',
    '프레젠테이션',
    '인쇄문',
    '커머스,쇼핑물',
    '로고',
    '그래픽',
    '영상',
    '게임',
    '기타'
]

function cat1_change(key) {
    key = key.target.value
    if (key == '') 
        return;
    
    var name = cat2_num[key];

    var val = cat2_num[key];
    var sel = document.getElementById('cate')
    var i;
    for (i = sel.length - 1; i >= 0; i--) 

        sel.options[i] = null;
    
    sel.options[0] = new Option('선택', '', '', 'true');

    for (i = 0; i < name.length; i++) {

        sel.options[i + 1] = new Option(name[i], i + 1);

    }

}

const SmailInput = styled.input `
 width: 200px;
  height: 35px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  
  border-bottom-left-radius:5px;
  border-top-left-radius:5px;
  box-sizing:border-box;
`
const RightLabel = styled.label `
  width: 35px;
  height: 35px;
  background-color: #212121;
  font-family:'Noto Sans KR';
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: center;
  justify-content:center;
  align-items:center;
  display:flex;
  color: #ffffff;
`
const Projectcontent = styled.textarea `
  width: 410px;
    height: 422px;
    font-family:'Noto Sans KR';
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  padding-left:15px;
  padding-top:10px;
  resize:none;
`
const Day = styled.select `
height: 40px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  margin-right:10px;
  width:${props => props.width};
  font-family:'Noto Sans KR';
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
  padding-left:5px;
`
const Meet = styled.input `
height: 40px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  margin-right:10px;
  width:${props => props.width};
  font-family:'Noto Sans KR';
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
  padding-left:5px;
  box-sizing:border-box;
`
const RadioContainer = styled.div `
display:flex;
align-items:center;
margin-bottom:5px;
`

const RadioText = styled.span `
 font-family:'Noto Sans KR';
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.60;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
`
const Line = styled.div `
width:80%;
height:0px;
border: 1px solid #6f6f6f;
margin: 0 auto;
margin-bottom:20px;
margin-top:20px;
`
const Regi = styled.div `
cursor:pointer;
width: 359px;
  height: 45px;
  border-radius: 5px;
  background-color: #ef4f80;
  font-family: NIXGONB-Vb;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  justify-content:center;
  align-items:center;
  display:flex;
  margin: 0 auto;
`
const Explain = styled.div `
width:36%;
height:100%;
`
const Hori = styled.div `
display:flex;

`

const Sub = styled.div `
white-space:pre;
font-family:'Noto Sans KR';
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
`
const Int = styled.div `
font-family: NIXGONB-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.87;
  letter-spacing: normal;
  text-align: center;
  color: #ef4f80;
`
const Title = styled.div `
  font-family: NIXGONB-Vb;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
`
const setColor=(event)=>{
    let parent=event.currentTarget.parentNode
    for(let i of parent.childNodes){
        i.style.border='solid 1px #ffffff'
    }
    event.currentTarget.style.border='solid 1px #ef4f80'

}
const setKa=(event)=>{
    let parent=event.target.parentNode.childNodes
    let text=''
    let su=0
    for(let i of parent){
       
        text=text+i[i.value].text
        if(su==0){
        text=text+'/'
        su++
        }

    }
    return text
}
const radio=()=>{
    let asd=document.getElementsByName('gender')
    let label=document.getElementsByTagName('label')
    let returnText=false
    for (let i of asd){
        if(i.checked==true){
        returnText=i.value
        }
    }
    
    return returnText
}
const getDay=(event)=>{
    let mil=''
    for(let i of event.target.parentNode.childNodes){
        mil=mil+i.value+','
    }
    let data=new Date(mil.slice(0,-1))
return data.getTime()/1000
}
const test=()=>{
    const nullfile=new File(['null'],'null.txt')
    const file=document.getElementById('file')
    // var formData=new FormData()
    // formData.append('planning',file.files[0],file.files[0].name)
    // console.log(formData.get('planning'))
    if(file.files[0]==undefined){
        return nullfile
    }
    return file.files[0]
}
export default function Counsel(props) {
    
    return (
        <Wrapper>
            <Require>*항목은 필수 입력입니다</Require>
            <Hori>
                <Paper>
                    <Container>
                        <Category>
                            <Pink>*</Pink>프로젝트 이름

                        </Category>
                        <Side>
                            <PojectName onChange={(event)=>props.setKind('name',event.target.value)}></PojectName>
                            <Label>
                                프로젝트 이름을 입력해 주세요.
                            </Label>
                        </Side>
                    </Container>

                    <Container>
                        <Category>
                            <Pink>*</Pink>카테고리

                        </Category>
                        <Side>
                            <div
                                style={{
                                    display: 'flex'
                                }}>
                                <Cate onChange={cat1_change}>
                                    <option value="" disabled="disabled" selected="selected">카테고리</option>
                                    <option value="1">개발</option>
                                    <option value="2">디자인</option>

                                </Cate>
                                <Cate onChange={e=>(props.setKind('field',setKa(e)))}
                                    style={{
                                        marginLeft: '10px'
                                    }}
                                    id='cate'></Cate>
                            </div>
                            <Label>
                                진행하려는 프로젝트의 카테고리를 선택해 주세요.
                            </Label>
                        </Side>
                    </Container>
                    <Container>

                        <Category>
                            <Pink>*</Pink>기획상태
                        </Category>

                        <ItemContainer>
                            <CounselItem onClick={(event)=>{setColor(event);props.setKind('plan',0)}} img={first} text="아이디어만 있음"/>
                            <CounselItem onClick={(event)=>{setColor(event);props.setKind('plan',1)}} img={mid} text="대략적인 기획이 있음"/>
                            <CounselItem onClick={(event)=>{setColor(event);props.setKind('plan',2)}} img={last} text={"구체적인 상세한\n기획이 있음"}/>
                        </ItemContainer>
                    </Container>

                    <Container>
                        <Category>
                            <Pink>*</Pink>희망금액
                        </Category>
                        <Side>
                            <div
                                style={{
                                    display: 'flex'
                                }}>
                                <SmailInput onChange={(event)=>props.setKind('cost',event.target.value)} />
                                <RightLabel>원</RightLabel>
                            </div>
                            <Label>
                                프로젝트에 지출 가능한 예산을 입력해 주세요.
                            </Label>
                        </Side>

                    </Container>

                    <Container>
                        <Category>
                            <Pink>*</Pink>진행기간
                        </Category>
                        <Side>
                            <div
                                style={{
                                    display: 'flex'
                                }}>
                                <SmailInput onChange={(event)=>props.setKind('term',event.target.value)}/>
                                <RightLabel>일</RightLabel>
                            </div>
                            <Label>
                            프로젝트를 진행할 기간을 입력해 주세요.
                            </Label>
                        </Side>
                    </Container>
                    <Container>
                        <Category>
                            <Pink>*</Pink>프로젝트 내용
                        </Category>
                        <Projectcontent onChange={(event)=>props.setKind('description',event.target.value)} placeholder='구상하신 프로젝트에 대해 설명해 주세요.'></Projectcontent>
                    </Container>

                    <Container>
                        <Category>
                            기획문서
                        </Category>
                        <input type="file" name="" id="file" />
                    </Container>
                    <Container>
                        <Category>
                            <Pink>*</Pink>모집 마감일정
                        </Category >
                        <Side>
                            <div>
                                <Day width='156px' name='year'>
                                    <option disabled="disabled" selected="selected">년도</option>
                                </Day>
                                <Day width='84px' name='month' onClick={() => setDay(0)}>
                                    <option disabled="disabled" selected="selected">달</option>
                                </Day>
                                <Day width='84px' name='day' onChange={(event)=>props.setKind('deadline',getDay(event))} >
                                    <option disabled="disabled" selected="selected">일</option>
                                </Day>
                            </div>
                            <Label>
                                모집 마감 일정을 선택해 주세요.
                            </Label>
                        </Side>
                    </Container>

                    <Container>
                        <Category>
                            <Pink>*</Pink>사전 미팅
                        </Category >
                        <Day width='250px' onChange={(event)=>props.setKind('meeting',event.target.value)}>
                            <option disabled="disabled" selected="selected">선택</option>
                            <option value='0'>카톡 및 전화</option>
                            <option value='1'>오프라인</option>
                            <option value='2'>미팅</option>1
                        </Day>
                    </Container>
                    <Container>
                        <Category>
                            <Pink>*</Pink>연락처
                        </Category>
                        <Side>
                            <Meet width='250px'  onChange={(event)=>props.setKind('phone',event.target.value)}/>
                            <Label>
                                하이픈( - )없이 입력해주세요.
                            </Label>
                        </Side>
                    </Container>
                    <Container>
                        <Category>
                            <Pink>*</Pink>프로젝트 시장 예정일

                        </Category>
                        <Side>
                            <div>
                                <Day width='156px' name='year'>
                                    <option disabled="disabled" selected="selected">년도</option>
                                </Day>
                                <Day width='84px' name='month' onClick={() => setDay(1)}>
                                    <option disabled="disabled" selected="selected">달</option>
                                </Day>
                                <Day width='84px' name='day' onChange={(event)=>props.setKind('start',getDay(event))}> 
                                    <option disabled="disabled" selected="selected">일</option>
                                </Day>
                            </div>
                            <Label>
                                모집 마감 일정을 선택해 주세요.
                            </Label>
                        </Side>
                    </Container>
                    <Container>

                        <Category>
                            <Pink>*</Pink>희망하는 파트너

                        </Category>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                            <RadioContainer className='chec'><input type="radio" name="gender" value="0" id='n'/>
                                <Label for='n'>상관 없음</Label>
                            </RadioContainer>
                            <RadioContainer className='chec'><input type="radio" name="gender" value="1" id='s'/>
                                <Label for='s'>개인</Label>
                            </RadioContainer>
                            <RadioContainer className='chec'><input type="radio" name="gender" value="2" id='t'/>
                                <Label for='t'>팀</Label>
                            </RadioContainer>
                            <RadioContainer className='chec'><input type="radio" name="gender" value="3" id='b'/>
                                <Label for='b'>법인 사업자</Label>
                            </RadioContainer>
                            <RadioContainer className='chec'><input type="radio" name="gender" value="4" id='g'/>
                                <Label for='g'>개인사업자</Label>
                            </RadioContainer>
                        </div>
                    </Container>
                    <Line style={{marginTop:'0px'}}/>
                    <Regi onClick={()=>{props.setKind('hope_partner',radio(),()=>props.setKind('planning',test(),()=>props.subMit()));}}>프로젝트 정보 작성 완료 및 등록</Regi>
                </Paper>

                <Explain>
                    {/* 진행도 표시 */}
                    <Line></Line>
                    <Title>
                        <Pink>아이티 에이전시</Pink>의 장점</Title>
                    <Int>1.</Int>
                    <Sub>대표님들은 아이디어만 있으시면 됩니다.<br/> 아이티 에이전시의 파트너들과 함께 기획 및 개발을 해 드립니다.</Sub>
                    <Int>2.</Int>
                    <Sub>대표님들 예산에 맞춰 타사에 비해 저희 아이티 에어전시는<br/>
저렴한 가격으로도 고퀄리티로 제작해드립니다.</Sub>
                    <Int>3.</Int>
                    <Sub>개발자와 연락이 잘 안되고 불안하신가요?<br/>
개발 계약 후 개발이 끝나는 일정에<br/>
완성되지 않는 경우 100% 금액을 환불해 드립니다.</Sub>
                <Line></Line>
                <Sub>
                ITAgency는 <b>실물보장 프로젝트</b>만 취급합니다.<br/>
<b>아이티 에이전시</b>는 파트너 및 소비자의 입장 모두를 생각합니다.<br/>
<b><Pink>아이티 에이전시</Pink>에 오신걸 환영합니다.</b>   <br/>
                </Sub>
                </Explain>
            </Hori>

        </Wrapper>
    )
}
