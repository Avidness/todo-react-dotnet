import thunk from 'redux-thunk';
import { applyMiddleware, compose, 
  combineReducers, createStore } from 'redux';

import ItemReducer from './reducers/ItemReducer';

const allReducers = combineReducers({
  items: ItemReducer
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk)
);

export default createStore(
  allReducers, {},
  allStoreEnhancers
);