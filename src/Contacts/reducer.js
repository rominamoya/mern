const defaultState = {
  contacts: [],
  selectedContact: null,
  error: null,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'FETCH_CONTACTS_REQUEST':
      return {
        ...state,
        contacts: [],
        selectedContact: null,
        error: null,
      };
    case 'FETCH_CONTACTS_SUCCESS':
      return {
        ...state,
        contacts: action.payload,
      };
    case 'FETCH_CONTACTS_FAILED':
      return {
        ...state,
        error: action.error,
      };
    case 'FETCH_CONTACT_REQUEST':
      return {
        ...state,
        selectedContact: { _id: {} },
        error: null,
      };
    case 'FETCH_CONTACT_SUCCESS':
      return {
        ...state,
        selectedContact: action.payload,
      };
    case 'FETCH_CONTACT_FAILED':
      return {
        ...state,
        error: action.error,
      };
    case 'DELETE_CONTACT_REQUEST': {
      return {
        ...state,
      };
    }
    case 'DELETE_CONTACT_SUCCESS': {
      const _id = action.payload;
      return {
        ...state,
        contacts: state.contacts.filter(item => item._id !== _id),
      };
    }
    case 'DELETE_CONTACT_FAILED': {
      return {
        ...state,
        error: action.error,
      };
    }
    case 'ADD_CONTACT_SUCCESS': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case 'ADD_CONTACT_FAILED': {
      return {
        ...state,
        error: action.error,
      };
    }
    case 'UPDATE_CONTACT_REQUEST': {
      return {
        ...state,
      };
    }
    case 'UPDATE_CONTACT_SUCCESS': {
      const contact = action.payload;
      return {
        ...state,
        contacts: state.contacts.map(item => ((item._id === contact._id) ? contact : item)),
      };
    }
    case 'UPDATE_CONTACT_FAILED': {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};
