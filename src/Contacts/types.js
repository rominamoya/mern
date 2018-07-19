const contactActions = {
  FETCH_CONTACTS_REQUEST: 'FETCH_CONTACTS_REQUEST',
  FETCH_CONTACTS_SUCCESS: 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_FAILED: 'FETCH_CONTACTS_FAILED',
  FETCH_CONTACT_REQUEST: 'FETCH_CONTACT_REQUEST',
  FETCH_CONTACT_SUCCESS: 'FETCH_CONTACT_SUCCESS',
  FETCH_CONTACT_FAILED: 'FETCH_CONTACT_FAILED',
  ADD_CONTACT_REQUEST: 'ADD_CONTACT_REQUEST',
  ADD_CONTACT_SUCCESS: 'ADD_CONTACT_SUCCESS',
  ADD_CONTACT_FAILED: 'ADD_CONTACT_FAILED',
  DELETE_CONTACT_REQUEST: 'DELETE_CONTACT_REQUEST',
  DELETE_CONTACT_SUCCESS: 'DELETE_CONTACT_SUCCESS',
  DELETE_CONTACT_FAILED: 'DELETE_CONTACT_FAILED',
  UPDATE_CONTACT_REQUEST: 'UPDATE_CONTACT_REQUEST',
  UPDATE_CONTACT_SUCCESS: 'UPDATE_CONTACT_SUCCESS',
  UPDATE_CONTACT_FAILED: 'UPDATE_CONTACT_FAILED',
};

const contactActionCreators = {
  fetchContactsRequest: () => ({
    type: contactActions.FETCH_CONTACTS_REQUEST,
  }),

  fetchContactsSuccess: contacts => ({
    type: contactActions.FETCH_CONTACTS_SUCCESS,
    payload: contacts,
  }),
  fetchContactsFailed: error => ({
    type: contactActions.FETCH_CONTACTS_FAILED,
    error,
  }),
  fetchContactRequest: () => ({
    type: contactActions.FETCH_CONTACT_REQUEST,
  }),

  fetchContactSuccess: contacts => ({
    type: contactActions.FETCH_CONTACT_SUCCESS,
    payload: contacts,
  }),
  fetchContactFailed: error => ({
    type: contactActions.FETCH_CONTACT_FAILED,
    error,
  }),
  addContactRequest: () => ({
    type: contactActions.ADD_CONTACT_REQUEST,
  }),

  addContactSuccess: contacts => ({
    type: contactActions.ADD_CONTACT_SUCCESS,
    payload: contacts,
  }),
  addContactFailed: error => ({
    type: contactActions.ADD_CONTACT_FAILED,
    error,
  }),
  deleteContactRequest: () => ({
    type: contactActions.DELETE_CONTACT_REQUEST,
  }),

  deleteContactSuccess: contacts => ({
    type: contactActions.DELETE_CONTACT_SUCCESS,
    payload: contacts,
  }),
  deleteContactFailed: error => ({
    type: contactActions.DELETE_CONTACT_FAILED,
    error,
  }),
  updateContactRequest: () => ({
    type: contactActions.UPDATE_CONTACT_REQUEST,
  }),

  updateContactSuccess: contacts => ({
    type: contactActions.UPDATE_CONTACT_SUCCESS,
    payload: contacts,
  }),
  updateContactFailed: error => ({
    type: contactActions.UPDATE_CONTACT_FAILED,
    error,
  }),
};


export { contactActions, contactActionCreators };
