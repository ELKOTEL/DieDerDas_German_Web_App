import {  ADD_WORD, GET_WORDS} from "../Actions/Types";

const initialState = {
  words: [], // Initial state for words, an empty array
};

const wordReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case ADD_WORD:
            return {...state,words:[...state.words,payload]}
        case GET_WORDS:
            return {...state,words:payload}
        default: return state
    }
    
}
export default wordReducer