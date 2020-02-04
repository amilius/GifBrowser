import searchReducer from './searchReducer';
import favGIFsReducer from './favGIFsReducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  search: searchReducer,
  favourite: favGIFsReducer
});

export default allReducers;
