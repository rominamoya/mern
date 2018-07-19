import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import FormComponent from './FormComponent';
import { selectContact, addContact, fetchContact, updateContact } from './actions';

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  componentDidMount = () => {
    const { id } = this.props.match.params;
    if (id) {
      this.props.fetchContact(id);
    }
  }

  submit = (contact) => {
    const { id } = this.props.match.params;
    if (id) {
      this.props.updateContact(contact)
        .then(() => {
          this.props.history.push('/');
        });
    } else {
      this.props.addContact(contact)
        .then(() => {
          this.props.history.push('/');
        });
    }
  }
  render() {
    return <FormComponent onSubmit={this.submit} contact={this.props.selectedContact} />;
  }
}

FormContainer.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchContact: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
  selectedContact: PropTypes.object.isRequired,
  updateContact: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  contacts: state.contactStore.contacts,
  selectedContact: state.contactStore.selectedContact,
});

const matchDispatchToProps = dispatch =>
  bindActionCreators({
    selectContact, addContact, fetchContact, updateContact,
  }, dispatch);


export default withRouter(connect(mapStateToProps, matchDispatchToProps)(FormContainer));
