import React from 'react'
import styled from 'styled-components'
import Selection from '../../Register/Selection'
import logo from '../../../assets/imgs/logo.png'
const Wrapper=styled.div`
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  display:flex;
  flex-direction:column;
  padding-top:30px;
`
const Title=styled.span`
width: 100px;
margin-right:120px;
 font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
`
const FlexDiv=styled.div`
display:flex;
margin-bottom:26px;
padding-left:50px;
`
const Pink=styled.span`
width:310px;
margin-bottom:40px;
 font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #ef4f80;
`
const Input=styled.input`
font-family:'Noto Sans KR';
  width: 410px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
`
const Select=styled.select`
font-family:'Noto Sans KR';

width: 190px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  box-sizing:border-box;
  padding-left:20px;
  color:#6f6f6f;
`
const BigInput=styled.textarea`
  font-family:'Noto Sans KR';
  border: solid 1px #6f6f6f;

  width: 410px;
  height: 121px;
  border-radius: 5px;
  background-color: #ffffff;
`
const Repair=styled.div`
  width: 101px;
  height: 30px;
  border-radius: 5px;
  background-color: #212121;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  font-family:'Noto Sans KR';
  display:flex;
  justify-content:center;
  align-items:center;
`
const Not=styled.div`
  width: 151px;
  height: 30px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  font-family:'Noto Sans KR';
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
`
const Done=styled.div`
 width: 151px;
  height: 30px;
  border-radius: 5px;
  background-color: #212121;
  font-family:'Noto Sans KR';
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`
const ImgContainer=styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: solid 2px #e0e0e0;
  background-color: #ffffff;
  font-family: NIXGONB-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #e0e0e0;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Upload=styled.label`
width: 150px;
  height: 30px;
  border-radius: 5px;
  background-color: #212121;
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-top:19px;
  cursor:pointer;
`

  const PhoneInput=styled.input`
  width:290px;
  height:42px;
  margin-right:20px;
  margin-bottom:14px;
  border-radius:5px;
  font-family:'Noto Sans KR';
  border: solid 1px #6f6f6f;
  box-sizing:border-box;
  padding-left:10px;
  `
  

export default function  InitInfor(props) {
  const [phone,setPhone]=React.useState(false)
    return (
        <Wrapper>

            <FlexDiv>
            <Title>프로필 이미지</Title>
            <div>
            <ImgContainer id='newimg' src={props.src||logo} ></ImgContainer>
            <input onChange={props.getImgData} accept="image/*" style={{display:'none'}} type="file" id="file" name="file" onchange="changeValue(this)"/>
            <Upload for='file'>프로필 이미지 업로드</Upload>
            </div>
            </FlexDiv>

            <FlexDiv>
            <Title>이메일</Title>
            <Pink>{props.data.email}</Pink>
            </FlexDiv>

            <FlexDiv>
            <Title>이름</Title>
            <Pink>{props.data.name}</Pink>
            </FlexDiv>

           

            <FlexDiv>
            <Title id='phone' >연락처</Title>
              
              {phone||<Pink value={props.phone}>{props.phone}</Pink>}
              {phone&&<PhoneInput onChange={props.setPhone} value={props.phone}></PhoneInput> }
            <Repair onClick={()=>setPhone(!phone)}>연락처 변경</Repair>
          
            </FlexDiv>

            <FlexDiv>
            <Title id='location'>지역</Title>
            <div style={{width:'410px',display:'flex',justifyContent:'space-between'}}>
            <Selection/>
            </div>
            </FlexDiv>


           

            <FlexDiv>
            <Title id='introduce'>소개</Title>
            <BigInput className='introduce' placeholder='     본인에 대한 소개' style={{resize: 'none'}}/>
            </FlexDiv>
      <div style={{display:'flex',width:'322px',margin:'50px auto'}}>
        <Not style={{marginRight:'20px'}}>취소</Not>
        <Done onClick={props.getData}>프로필 수정</Done>
        </div >
        </Wrapper>
    )
}
