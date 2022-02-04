import React from 'react';
import styled from "styled-components";
const map = require('./../assets/images/map.png')
const ysmile = require('./../assets/images/smiles/right-yellow-smile.png')
const psmile = require('./../assets/images/smiles/purple-smile.png')

const Wrapper = styled.div`
  position: relative;
  @media (max-width: 1024px) {
    display: none;
  }
`
const Map = styled.img`
  width: 800px;
  position: relative;
  left: 100px;
  @media (max-width: 1600px) {
    width: 700px;
  }
  @media (max-width: 1280px) {
    width: 600px;
  }
`
const PurpleSmile = styled.img`
  position: absolute;
  top: 400px;
  right: 470px;
  z-index: 1;
  @media (max-width: 1600px) {
    top: 330px;
    right: 410px;
  }
  @media (max-width: 1280px) {
    top: 300px;
    right: 330px;
    width: 240px;
  }
`
const YellowSmile = styled.img`
  position: absolute;
  top: 360px;
  right: 620px;
  z-index: 2;
  @media (max-width: 1600px) {
    top: 290px;
    right: 560px;
  }
  @media (max-width: 1280px) {
    top: 250px;
    right: 450px;
    width: 120px;
  }
`

const RightImages = () => {
    return (
        <Wrapper>
            <YellowSmile src={ysmile}/>
            <PurpleSmile src={psmile}/>
            <Map src={map}/>
        </Wrapper>
    );
};

export default RightImages;