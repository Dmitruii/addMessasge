import {applyMiddleware, combineReducers, createStore} from 'redux'
import formReducer from './form-reducer'
import thunk from 'redux-thunk'

let reducers = combineReducers({
    form: formReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

window.__store__ = store

export default store