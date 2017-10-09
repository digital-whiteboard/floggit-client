import { combineReducers } from 'redux';
import notes from './notes';
import titles from './titles';

const reducer = combineReducers({
  titles,
  notes,
});

export default reducer;
