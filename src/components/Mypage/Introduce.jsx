import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
  height: 299px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  font-family: 'Noto Sans KR';
  font-size: 23px;
  color: #212121;
  padding:10px 40px;
  margin-top:10px;
`
export default function Introduce(props) {
    return (
        <Wrapper>
            {props.data.introduce||'등록된 자기소개가 없습니다'}
        </Wrapper>
    )
}
