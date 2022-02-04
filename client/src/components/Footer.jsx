import React from 'react'
import styled from 'styled-components'
const psmile = require('./../assets/images/smiles/purple-footer-smile.png')
const linkedin = require('./../assets/images/social/linkedin.png')
const twitter = require('./../assets/images/social/twitter.png')
const facebook = require('./../assets/images/social/facebook.png')
const pinteres = require('./../assets/images/social/pinteres.png')
const bsmile = require('./../assets/images/smiles/blue-smile.png')
const ysmile = require('./../assets/images/smiles/yellow-footer-smile.png')

const Wrapper = styled.footer`
  border: 1px solid #D8D8D8;
  flex: 0 0 auto;
`
const Container = styled.div`
    height: 200px;
    display: flex;
    align-items: center;
    position: relative;
  @media (max-width: 768px) {
    justify-content: center;
  }
`
const SocialImg = styled.img`
  margin: 0 15px;
`
const PurpleSmile = styled.img`
    position: relative;
    bottom: 19px;
    display: flex;
    align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`
const SocialFlexBlock = styled.div`display: flex`
const BlueSmile = styled.img`
  position: absolute;
  right: 100px;
  top: 0;
  @media (max-width: 768px) {
    display: none;
  }
`
const YellowSmile = styled.img`
  position: absolute;
  right: 0;
  @media (max-width: 768px) {
    display: none;
  }
`

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <PurpleSmile src={psmile} />
                <SocialFlexBlock>
                    <a href='#'><SocialImg src={linkedin} alt='linkedin Link'/></a>
                    <a href='#'> <SocialImg src={twitter} alt='Twitter Link'/></a>
                    <a href='#'><SocialImg src={facebook} alt='Facebook Link'/></a>
                    <a href='#'><SocialImg src={pinteres} alt='Pinteres Link'/></a>
                </SocialFlexBlock>
                <YellowSmile src={ysmile} />
                <BlueSmile src={bsmile} />
            </Container>
        </Wrapper>
    )
}

export default Footer