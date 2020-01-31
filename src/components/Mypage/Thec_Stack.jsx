import React from 'react'
import styled from 'styled-components'
import StackItem from './StackItem'
const Wrapper=styled.div`
width:100%;
margin-top:10px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  padding:20px 50px;
  box-sizing:border-box;
`
const Title=styled.span`
margin-right:85px;
 font-family: NIXGONB-Vb;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #6f6f6f;`

  const Select=styled.select`
   width: 400px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #6f6f6f;
  background-color: #ffffff;
  margin-right:10px;
  `
  const Flex_div=styled.div`
  display:flex;

  `
  const Add=styled.div`
   width: 86px;
  height: 40px;
  border-radius: 5px;
  background-color: #212121;
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: NIXGONB-Vb;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  `
  const Line=styled.div`
    width:100%;
    height:0px;
    border: 1px solid #e0e0e0;
    margin:20px 0px;
  `
  const BigLine=styled.div`
  width:100%;
    height:0px;
    border: 1px solid #6f6f6f;
    margin:20px 0px;
  `
  const Button=styled.div`
    width: 151px;
  height: 30px;
  border-radius: 5px;
  background-color: #212121;
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
  align-items:center;
  justify-content:center;
  `
// illustator
// Flash
// Ruby
// Flask
// C
// object C
// C++
// C#
// MySQL
// jQuery
// JAVA
// PHP
// Python
// InDesign
// Photoshop
// Kotlin
// Node.js
// iOS
// Linux
// After effect
// Premiere Pro
// JavaScript
// Fusion 360
// 3D Max
export default function Thec_Stack(props) {
    return (
        <Wrapper>
            <Flex_div>
            <Title>기술정보 추가</Title>
            <Select>
              <option value="" disabled selected>선택</option>
            <option value="Django">Django</option>
            <option value="React_native">React_native</option>
            <option value="React">React</option>
            <option value="Swift">Swift</option>
            <option value="Vue">Vue</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Fusion 360">Fusion 360</option>
            <option value="3D_Max">3D_Max</option>
            <option value="Flash">Flash</option>
            <option value="Ruby">Ruby</option>
            <option value="Flask">Flask</option>
            <option value="C">C</option>
            <option value="object_c">object_c</option>
            <option value="c++">c++</option>
            <option value="MySql">MySql</option>
            <option value="jQuery">jQuery</option>
            <option value="JAVA">JAVA</option>
            <option value="PHP">PHP</option>
            <option value="Python">Python</option>
            <option value="InDesign">InDesign</option>
            <option value="Photoshop">Photoshop</option>
            <option value="Kotlin">Kotlin</option>
            <option value="Node.js">Node.js</option>
            <option value="Linux">Linux</option>
            <option value="After effect">After effect</option>


            </Select>
            <Add onClick={props.addTech_stack}>추가</Add>
            </Flex_div>
            <Line/>
            {(props.tech_stack||[]).map(res=>{
                        return  <StackItem delTech_stack={props.delTech_stack} data={res}></StackItem>
            })}
           
            <BigLine/>
            <Button onClick={props.Infor_Edit}>정보수정</Button>
        </Wrapper>
    )
}
