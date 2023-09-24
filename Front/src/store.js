import {createStore, applyMiddleware,compose} from 'redux'
import wordReducer from './Reducers/wordReducer'
import thunk from 'redux-thunk'

const store= createStore(wordReducer,compose(applyMiddleware(thunk) ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
export default store