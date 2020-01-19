import React from 'react'
import styled from 'styled-components'
import ExampleItem from './ExampleItem'
import toke from '../../assets/imgs/Toke.png'
import money from '../../assets/imgs/money.png'
const Text =styled.div`
margin-top:205px;
  font-family: NIXGONM-Vb;
  font-size: 35px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.8;
  letter-spacing: normal;
  text-align: center;
  color: #212121;
  margin-bottom:100px;
`
const Color=styled.span`
font-family: NIXGONB-Vb;
  color: #ef4f80;
`
const Wrap=styled.div`
display:flex;
`
const Line =styled.div`

  height: 420px;
  border: solid 1.5px #e0e0e0;

`

export default function Example() {
    return (
        <>
        
        
        <Text>
        저렴하고 빠르고 안전하게, <Color>아이티에이전시</Color>
        </Text>
        <Wrap>
        <ExampleItem img={toke} title='아이디어는 있는데,
어떻게 개발하는지 모르신다구요?' text="대표님들은 아이디어만 있으시면 됩니다.
아이티 에이전시의 파트너들과 함께 기획 및 개발을 해 드립니다."></ExampleItem>
<Line/>
<ExampleItem img={money} title='
예산이 부족하신가요?
' text="대표님들 예산에 맞춰 타사에 비해 저희 아이티 에어전시는
저렴한 가격으로도 고퀄리티로 제작해드립니다."></ExampleItem>
<Line/>
<ExampleItem img={toke} title='
작업을 맡겼는데 불안하신가요?' text="개발자와 연락이 잘 안되고 불안하신가요?
개발 계약 후 개발이 끝나는 일정에
완성되지 않는 경우 100% 금액을 환불해 드립니다."></ExampleItem>
</Wrap>
        </>
    )
}
