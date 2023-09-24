import { ADD_WORD, GET_WORDS } from './Types';
import axios from 'axios';

// Action to add a new word
export const addWord = (newword) => (dispatch) => {
  axios
    .post('http://localhost:5000/words/newword', newword)
    .then(({ data }) => {
      dispatch({
        type: ADD_WORD,
        payload: data,
      });
    })
    .catch((err) => {
      console.error('Error in adding new word:', err);
      // You can dispatch an action here to handle the error in your Redux store if needed.
      // For example, dispatch an action to set an error message in your Redux state.
    });
};

// Action to get all words
export const getWords = () => (dispatch) => {
  axios
    .get('http://localhost:5000/words/')
    .then(({ data }) => {
      dispatch({
        type: GET_WORDS,
        payload: data,
      });
    })
    .catch((err) => {
      console.error('Error in getting words:', err);
      // You can dispatch an action here to handle the error in your Redux store if needed.
      // For example, dispatch an action to set an error message in your Redux state.
    });
};
