import React from 'react'
import styled from 'styled-components'
const dg = require('./../assets/images/background.png')

const Wrapper = styled.div`
  background: #E5E5E5;
`
const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background-image: url(${dg});
  height: 100vh;
`

const SuccessPage = () => {
    return (
        <Wrapper>
            <Container>
                <h1>12321321312312313</h1>
            </Container>
        </Wrapper>
    )
}

export default SuccessPage