import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {changeEmail, changeMessage, changeName, sendMessage, sendMessageValidators} from '../redux/form-reducer'
import Message from './Message'
const ysmile = require('./../assets/images/smiles/yellow-smile.png')

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const WrapperForm = styled.div`
  width: 557px;
  position: relative;
  @media (max-width: 1220px) {
    width: auto;
  }
  @media (max-width: 460px) {
    width: 300px;
  }
`
const FormElem = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  display: flex;
  align-items: center;
  width: 557px;
  border: 1px solid ${props => props.error ? '#f00' : '#DCDCDC'};
  border-radius: 10px;
  color: #2D2D2D;
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  line-height: 180%;
  padding: 31px 46px;
  transition: all 0.3s ease 0s;
  &:focus {
    border-color: #333;
  }
  &:nth-child(2) {
    margin: 8px 0;
  }
  @media (max-width: 1220px) {
    width: 400px;
  }
  @media (max-width: 1024px) {
    width: 557px;
  }
  @media (max-width: 585px) {
    width: 350px;
  }
  @media (max-width: 460px) {
    width: 300px;
  }
  @media (max-width: 585px) {
    padding: 21px 30px;
  }
`
const Textarea = styled.textarea`
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  line-height: 180%;
  width: 557px;
  height: 189px;
  resize: none;
  border: 1px solid ${props => props.error ? '#f00' : '#DCDCDC'};
  border-radius: 10px;
  color: #2D2D2D;
  padding: 31px 46px 0 46px;
  transition: all 0.3s ease 0s;
  &:focus {
    border-color: #333;
  }
  &::-webkit-scrollbar { 
    width: 8px; 
    border-radius: 10px;
    background: #fff;
    border: 1px solid #DCDCDC;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 10px;
  }
  @media (max-width: 1220px) {
    width: 400px;
  }
  @media (max-width: 1024px) {
    width: 557px;
  }
  @media (max-width: 585px) {
    width: 350px;
  }
  @media (max-width: 585px) {
    padding: 21px 30px;
  }
  @media (max-width: 460px) {
    width: 300px;
  }
`
const Title = styled.h1`
  font-family: 'Arial', sans-serif;
  color: #3E3E3E;
  font-size: 40px;
  line-height: 130%;
  margin-bottom: 30px;
  @media (max-width: 460px) {
    text-align: center;
  }
`
const YellowSmile = styled.img`
  position: absolute;
  left: -140px;
  bottom: 530px;
  width: 150px;
  @media (max-width: 1600px) {
    left: 510px;
  }
  @media (max-width: 1220px) {
    left: 360px;
  }
  @media (max-width: 585px) {
    left: 270px;
  }
  @media (max-width: 460px) {
    display: none;
  }
`
const Button = styled.button`
  width: 225px;
  height: 73px;
  color: #fff;
  padding: 27px 52px;
  font-size: 18px;
  border-radius: 999px;
  background: #FAD34F;
  margin-top: 23px;
  @media (max-width: 460px) {
    margin: 23px auto 0 auto;
  }
`
const Error = styled.h1`
  font-size: 26px;
  font-family: 'Arial', sans-serif;
  color: #f00;
  margin: 10px 0;
`

const Form = ({name, email, message, changeName, changeEmail, changeMessage,
                  sendMessage, isSend, errors, sendMessageValidators}) => {
    const submitHandler = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const message = e.target.message.value
        sendMessageValidators(name, email, message)
    }

    const nameChangeHandler = e => changeName(e.target.value)
    const emailChangeHandler = e => changeEmail(e.target.value)
    const messageChangeHandler = e => changeMessage(e.target.value)

    if (isSend) {
        sendMessage(name, email, message)
    }

    return (
        <>
            <Wrapper>
                <WrapperForm>
                    <YellowSmile src={ysmile}/>
                    <Title>Reach out to us!</Title>
                    <FormElem onSubmit={submitHandler} method='POST'>
                        <Input name='name' type='text' placeholder='Your name*'
                            value={name ? name : ''} onChange={nameChangeHandler} error={errors.name}/>
                        {errors.name && <Error>{errors.name}</Error>}
                        <Input name='email' type='email' placeholder='Your e-mail*'
                            value={email ? email : ''} onChange={emailChangeHandler} error={errors.email}/>
                        {errors.email && <Error>{errors.email}</Error>}
                        <Textarea name='message' type='text' placeholder='Your message*'
                            value={message ? message : ''} onChange={messageChangeHandler} error={errors.message}/>
                        {errors.message && <Error>{errors.message}</Error>}
                        <Button>Send message</Button>
                    </FormElem>
                </WrapperForm>
            </Wrapper>
            <Message show={isSend}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    name: state.form.name,
    email: state.form.email,
    message: state.form.message,
    isSend: state.form.isSend,
    errors: state.form.errors
});

export default connect(mapStateToProps, {changeName, changeEmail, changeMessage,
    sendMessage, sendMessageValidators})(Form)