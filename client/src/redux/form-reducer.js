import {messageApi} from '../api/message-api'

const SUBMIT = 'app/form-reducer/SUBMIT'
const CHANGE_NAME = 'app/form-reducer/CHANGE_NAME'
const CHANGE_EMAIL = 'app/form-reducer/CHANGE_EMAIL'
const CHANGE_MESSAGE = 'app/form-reducer/CHANGE_MESSAGE'
const SEND_MESSAGE = 'app/form-reducer/SEND_MESSAGE'
const SEND_MESSAGE_VALIDATORS = 'app/form-reducer/SEND_MESSAGE_VALIDATORS'
const CLOSE_MESSAGE = 'app/form-reducer/CLOSE_MESSAGE'

const initialState = {
    name: null,
    email: null,
    message: null,
    isSend: false,
    errors: {
        name: null,
        email: null,
        message: null
    }
}

export default function formReducer(state = initialState, action){
    switch (action.type) {
        case SUBMIT:
            return {...state}
        case CHANGE_NAME:
            return  {...state, name: action.name}
        case CHANGE_EMAIL:
            return  {...state, email: action.email}
        case CHANGE_MESSAGE:
            return  {...state, message: action.message}
        case SEND_MESSAGE_VALIDATORS:
            let newErrors = {
                name: null,
                email: null,
                message: null
            }
            // Name input validator
            if (!state.name) {
                newErrors.name = 'Name is empty'
            } else if (state.name.length > 30) {
                newErrors.name = 'Max length is 30 symbols'
            }

            // Email input validator
            if (!state.email) {
                newErrors.email = 'Email is empty'
            } else if (state.email.length > 50) {
                newErrors.email = 'Max length is 50 symbols'
            }

            // Message input validator
            if (!state.message) {
                newErrors.message = 'Message is empty'
            } else if (state.message.length > 100) {
                newErrors.message = 'Max length is 100 symbols'
            }

            if (newErrors.name === null && newErrors.email === null && newErrors.message === null) {
                return  {...state, isSend: true, errors: {...newErrors}}
            } else {
                return {...state, errors: {...newErrors}}
            }
        case SEND_MESSAGE:
            return {...state, name: null, email: null, message: null}
        case CLOSE_MESSAGE:
            return {...state, isSend: false}
        default: return state;
    }
}

export const changeName = (name) => ({type: CHANGE_NAME, name})
export const changeEmail = (email) => ({type: CHANGE_EMAIL, email})
const sendMessageAC = () => ({type: SEND_MESSAGE})
export const changeMessage = (message) => ({type: CHANGE_MESSAGE, message})
export const sendMessageValidators = () => ({type: SEND_MESSAGE_VALIDATORS})
export const closeMessage = () => ({type: CLOSE_MESSAGE})

export const sendMessage = (name, email, message) => async (dispatch) => {
    dispatch(sendMessageAC())
    let response = await messageApi.send(name, email, message)
    console.log(response)
}