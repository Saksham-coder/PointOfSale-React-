import {combineReducers } from 'redux';
import auth from './auth'
import profile from './profile'
import product from './product'
import receipt from './receipt'
import dashboard from './dashboard'

export default combineReducers({
    auth,
    profile,
    product,
    receipt,
    dashboard
})