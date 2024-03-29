import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';

const store = createStore(reducer, composeWithDevTools());

export type rootReducerType = ReturnType<typeof reducer>;

export default store;
