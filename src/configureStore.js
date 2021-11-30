import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import messagesReducer from './messages';

export const reducer = combineReducers({
  messagesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
