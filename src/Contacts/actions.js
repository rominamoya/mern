import axios from 'axios';
import { contactActionCreators } from './types';

const apiUrl = '/api';
export const fetchContacts = () =>
  (dispatch) => {
    dispatch(contactActionCreators.fetchContactsRequest());
    return axios.get(apiUrl, {}, { 'Content-Type': 'application/application/json' })
      .then((response) => {
        dispatch(contactActionCreators.fetchContactsSuccess(response.data.contacts));
      })
      .catch((error) => {
        dispatch(contactActionCreators.fetchContactsFailed(error));
        return Promise.reject(error);
      });
  };


export const addContact = contact => (dispatch) => {
  dispatch(contactActionCreators.addContactRequest(contact));
  return axios.post(apiUrl, contact, { 'Content-Type': 'application/application/json' })
    .then((response) => {
      dispatch(contactActionCreators.addContactSuccess(response.data.contact));
    })
    .catch((error) => {
      dispatch(contactActionCreators.addContactFailed(error));
    });
};

export const deleteContact = id => (dispatch) => {
  dispatch(contactActionCreators.deleteContactRequest(id));
  return axios.delete(`${apiUrl}/${id}`)
    .then((response) => {
      dispatch(contactActionCreators.deleteContactSuccess(response.data._id));
    })
    .catch((error) => {
      dispatch(contactActionCreators.deleteContactFailed(error));
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
