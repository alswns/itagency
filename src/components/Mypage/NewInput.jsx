import React from 'react'
import styled from 'styled-components'
import Selection from '../Register/Selection'
const Wrapper=styled.div`
margin-top:10px;
  width: 760px;
  height: 310px;
  border-radius: 10px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
`
const Name=styled.span`
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
const Inputs=styled.input`
 width: 410px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
`
const FlexDiv=styled.div`
display:flex;
justify-content:space-between;
padding:0px 50px;
width:100%;
box-sizing:border-box;
margin-top:15px;
`
const Not=styled.div`
width: 151px;
  height: 30px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  font-family: NIXGONB-Vb;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Add=styled.div`
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
const Year=styled.select`
margin-right:212px;
 width: 200px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  font-family: NIXGONM-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;
  padding:0 auto;
  box-sizing:border-box;
`
export default function NewInput(props) {
    return (
        <Wrapper>
            <FlexDiv style={{marginTop:'25px'}}>
                <Name id='name'>수상 경력</Name>
                <Inputs></Inputs>
            </FlexDiv>
            
            <FlexDiv>
                <Name id='agency'>수상기구</Name>
                <Inputs></Inputs>
            </FlexDiv>

            <FlexDiv>
                <Name id='year'>취득일</Name>
                <Year>
                <option value="2000" selected>2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>

                </Year>
            </FlexDiv>

            <FlexDiv style={{justifyContent:'center',padding:'0px 211px'}}>
            <Add onClick={props.plusAward}>수상 경력 추가</Add>
            </FlexDiv>
        </Wrapper>
    )
}
