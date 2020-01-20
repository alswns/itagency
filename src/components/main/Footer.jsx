import React from 'react'
import styled from 'styled-components'
import tree from '../../assets/imgs/월계수.svg'
import treeBan from '../../assets/imgs/월계수_반전.svg'
import ing from '../../assets/imgs/ing.svg'
import money from '../../assets/imgs/money.svg'
import upload from '../../assets/imgs/upload.svg'
import Icon from './Icon'

const Wrapper = styled.div`
width: 100%;
  height: 135px;
  opacity: 95%;
  background: linear-gradient(99deg, #212121 6%, #0a0b1c 84%);
  position:relative;
`
const Container = styled.div`
display:flex;
    height:100%;
    justify-content:center;
    line-height:135px;
`
const Tree = styled.img`
    display:flex;
    width: 67.3px;
  height: 85.1px;
  margin:auto 0px;

`

const Icons=styled.div`
display:flex;
width:50%;
justify-content: space-between;
`

export default function Footer(props) {
    return (
        <div>
            <Wrapper>
                <Container>
                    <Tree  src={tree} alt=""/>
                    <Icons>
                    <Icon title={props.project+'개'} text='등록된 프로젝트' img={upload} style={{marginLeft:'0px'}}/>
                    <Icon  title={props.amount+'원'} text='누적 프로젝트 금액' img={money}/>
                    <Icon title={props.ing+'개'} text='진행중인 프로젝트 수' img={ing}/>
                    </Icons>

                    <Tree src={treeBan} alt=""/>

                    </Container>
            </Wrapper>
        </div>
    )
}
