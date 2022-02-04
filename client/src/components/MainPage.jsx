import React from 'react'
import styled from 'styled-components'
import RightImages from "./RightImages";
import Form from "./Form";

const Wrapper = styled.div`
  height: 790px;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 1700px) {
    max-width: 1360px;
  }
  @media (max-width: 1600px) {
    max-width: none;
    justify-content: center;
  }
`

const MainPage = () => {
    return (
        <Wrapper>
            <Form />
            <RightImages />
        </Wrapper>
    );
};

export default MainPage;