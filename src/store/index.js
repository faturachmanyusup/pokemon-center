import { createStore, applyMiddleware } from 'redux';
import { favoritesReducer } from './reducer';
import thunk from 'redux-thunk';

const store = createStore(favoritesReducer, applyMiddleware(thunk));

export default store;