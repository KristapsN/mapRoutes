import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

// @ts-ignore
export const Reducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_API': {
      return action.data;
    }
    default:
      return state;
  }
};

export const store = createStore(Reducer, applyMiddleware(thunk));
