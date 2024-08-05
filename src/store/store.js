import { createStore, combineReducers } from 'redux';
import uploadReducer from './reducers';

const rootReducer = combineReducers({
  upload: uploadReducer
});

const store = createStore(rootReducer);

export default store;
