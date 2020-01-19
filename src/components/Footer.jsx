import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
width: 100%;
  height: 135px;
  opacity: 0.85;
  background-color:;
  background: linear-gradient(#212121, #0a0b1c);
`
const Container = styled.div`

`

export default function Footer(props) {
    return (
        <div>
            <Wrapper>
                <Container/>
            </Wrapper>
        </div>
    )
}
