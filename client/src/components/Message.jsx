import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import mapDispatchToProps from 'react-redux/lib/connect/mapDispatchToProps'
import {closeMessage} from '../redux/form-reducer'

const MessageItem = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: #333;
  z-index: 999;
  border-radius: 8px;
  transition: all 0.3s ease 0s;
  transform: translateX(${props => props.show ? 'none' : '-120%'});
  @media(max-width: 375px) {
    right: 20px;
  }
}
`
const CloseIcon = styled.span`
  position: relative;
  top: 15px;
  right: -10px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 14px;
    height: 2px;
    background: #fff;
    border-radius: 4px;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`
const Content = styled.p`
  font-family: 'Arial', sans-serif;
  margin: 40px 70px;
  font-size: 24px;
  color: #fff;
  @media(max-width: 375px) {
    font-size: 20px;
  }
`

const Message = ({show, closeMessage}) => {
    const clickHandler = () => closeMessage()

    if (show) setTimeout(() => closeMessage(), 3000)

    return (
        <MessageItem show={show}>
            <CloseIcon onClick={clickHandler}/>
            <Content>Message Sent</Content>
        </MessageItem>
    )
}

export default connect(null, {closeMessage})(Message)