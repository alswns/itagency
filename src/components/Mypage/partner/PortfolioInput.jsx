import React from 'react'
import styled from 'styled-components'
import Selection from '../../Register/Selection'
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
const Wrapper = styled.div`
  width: 760px;
  height: 6000px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
`
const Name = styled.span`
  font-family: NIXGONB-Vb;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
`
const Inputs = styled.input`
 width: 410px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
`
const FlexDiv = styled.div`
display:flex;
justify-content:space-between;
padding:0px 50px;
width:100%;
box-sizing:border-box;
margin-top:15px;
align-items:center;
`

const Add = styled.div`
width: 151px;
  height: 30px;
  border-radius: 5px;
  background-color: #ef4f80;
  font-family: NIXGONB-Vb;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Div = styled.div`
width:420px;
display:flex;
`
const BigInput = styled.textarea`
width:410px;
height:200px;
border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
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

export default function PortfolioInput(props) {

  return (
    <Wrapper>
      <FlexDiv >
        <Name id='name'>제목</Name>
        <Inputs onChange={(e)=>{props.setValue('title',e)}}></Inputs>
      </FlexDiv>

      <FlexDiv>
        <Name id='agency'>참여분야</Name>
        <Div>
          <input id='0' type='checkbox' className='check'></input>
          <label for='0'>기획</label>
          <input id='1' type='checkbox' className='check'></input>
          <label for='1'>개발</label>
          <input id='2' type='checkbox' className='check'></input>
          <label for='2'>디자인</label>
        </Div>
      </FlexDiv>
      <FlexDiv>
        <Name id='agency'>공개상태</Name>
        <Div>
          <input onChange={e=>props.setValue('secret',e)} value='0' className='checks' type="radio" name="invi" id="off" />
          <label style={{ marginLeft: '9px' }} for='off'>공개</label>
          <div style={{ width: '21px' }}></div>
          <input onChange={e=>props.setValue('secret',e)} value='1' className='checks' type="radio" name="invi" id="on" />
          <label for='on'>비공개</label>
        </Div>
      </FlexDiv>
      <FlexDiv >
        <Name id='agency'>소개</Name>
        <BigInput onChange={(e)=>props.setValue('description',e)} style={{ resize: 'none' }}></BigInput>
      </FlexDiv>
      <FlexDiv>
        <Name id='agency'>포트폴리오 첨부</Name>
        <input type='file' onChange={props.getFile} accept=".jpg,.png,.jpeg"></input>
      </FlexDiv>
      <FlexDiv>
                        <Name>
                            카테고리

                        </Name>
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
                            
                    </FlexDiv>


      <FlexDiv style={{ justifyContent: 'center', padding: '0px 211px' }}>
        <Add onClick={props.submit}>포트폴리오 등록</Add>
      </FlexDiv>
    </Wrapper>
  )
}
