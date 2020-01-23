import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
display:flex;
margin-left:64px;
margin-bottom:6px;
`
const Label = styled.label `
  font-family: NIXGONM-Vb;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #212121;  
  margin-left:30px;

`
export default function KategoriItems(props) {
    return (
        <Wrapper>
                    <input type="checkbox" className='ing' name="" id={props.id}/>
                    <Label style={{marginLeft:'8px'}} for={props.id}>{props.text}</Label>
            
        </Wrapper>
    )
}
