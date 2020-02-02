import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
width:100%;
height:0px;
border:solid 1px #e0e0e0;
margin: 0 auto;
`
const SmallTitle = styled.span`
 font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
  display:flex;
  padding:20px 0px;
`
const FlexDIv = styled.div`
display:flex;
`
const Text = styled.div`
overflow:hidden;
font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
  padding:15px 0;
`
export default function Item(props) {
    return (
        <>
                    <FlexDIv>
                        <Text style={{ marginLeft: '50px', width: '320px' }}>{props.title}</Text>
                        <Text style={{ width: '157px' }}>{props.hope_money}</Text>
                        <Text style={{ width: '100px' }}>{props.time}</Text>
                        <Text style={{ flex: '1' }}>{props.deadLine}</Text>
                    </FlexDIv>
                    <Line style={{ width: '88%' }}></Line>
                </>
    )
}
