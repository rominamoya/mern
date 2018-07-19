import axios from 'axios';
import { contactActionCreators } from './types';

const apiUrl = '/api';
export const fetchContacts = () =>
  (dispatch) => {
    dispatch(contactActionCreators.fetchContactsRequest());
    return fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            dispatch(contactActionCreators.fetchContactsSuccess(data));
          });
        } else {
          response.json().then((error) => {
            dispatch(contactActionCreators.fetchContactsFailed(error));
          });
        }
      });
  };
export const addContact = contact => (dispatch) => {
  dispatch(contactActionCreators.addContactRequest(contact));
  return axios.post(apiUrl, contact, { 'Content-Type': 'application/application/json' })
    .then((response) => {
      dispatch(contactActionCreators.addContactSuccess(response.data.contact));
      // browserHistory.push('/');
    })
    .catch((error) => {
      dispatch(contactActionCreators.addContactFailed(error));
    });
};

export const deleteContact = id => (dispatch) => {
  dispatch(contactActionCreators.deleteContactRequest(id));
  return fetch(`${apiUrl}/${id}`, {
    method: 'delete',
  }).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        dispatch(contactActionCreators.deleteContactSuccess(data._id));
      });
    } else {
      response.json().then((error) => {
        dispatch(contactActionCreators.deleteContactFailed(error));
      });
    }
  });
};

export const fetchContact = id => (dispatch) => {
  dispatch(contactActionCreators.fetchContactRequest(id));
  return axios.get(`${apiUrl}/${id}`, {}, { 'Content-Type': 'application/application/json' })
    .then((response) => {
      dispatch(contactActionCreators.fetchContactSuccess(response.data.contact));
    })
    .catch((error) => {
      dispatch(contactActionCreators.fetchContactFailed(error));
    });
};

export const updateContact = contact => (dispatch) => {
  dispatch(contactActionCreators.updateContactRequest(contact));
  return axios.put(apiUrl, contact, { 'Content-Type': 'application/application/json' })
    .then((response) => {
      dispatch(contactActionCreators.updateContactSuccess(response.data.contact));
    })
    .catch((error) => {
      dispatch(contactActionCreators.updateContactFailed(error));
    });
};
