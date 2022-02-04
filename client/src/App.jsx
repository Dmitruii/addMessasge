import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SuccessPage from './components/SuccessPage'
import Footer from "./components/Footer";
import styled from "styled-components";
import MainPage from "./components/MainPage";
import {Provider} from "react-redux";
import store from "./redux/store";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Main = styled.main`
  flex: 1 0 auto;
  height: 100%;
`

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppWrapper>
                    <Main>
                        <Routes>
                            <Route path="/" element={<MainPage />}/>
                            <Route path="/success" element={<SuccessPage />}/>
                        </Routes>
                    </Main>
                    <Footer/>
                </AppWrapper>
            </BrowserRouter>
        </Provider>
    )
}

export default App