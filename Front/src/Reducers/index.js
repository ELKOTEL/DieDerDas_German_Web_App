import { combineReducers} from 'redux'
import wordReducer from './wordReducer'
import userReducer from './userReducer'
export default combineReducers({wordReducer,userReducer})