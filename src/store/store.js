import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './reducer/todoReducer'

const store = createStore(todoReducer, composeWithDevTools());

export default store;