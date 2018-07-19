import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contactsReducer from '../Contacts/reducer';

const allReducers = combineReducers({
  contactStore: contactsReducer,
  form: formReducer,
});

export default allReducers;
