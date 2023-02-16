import { combineReducers } from 'redux';
import formReducer from './containers/Home/reducer';

export default combineReducers({
  form: formReducer,
});
