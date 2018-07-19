import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import ListComponent from './ListComponent';
import { fetchContacts, deleteContact } from './actions';

class ContactListContainer extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount = () => {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Grid container spacing={14} justify="center">
        <Grid item xs={10}>
          <Button variant="fab" component={Link} to="/contacts/new" color="primary" aria-label="Add" >
            <PersonAdd />
          </Button>
          <Grid container justify="center" spacing={Number(16)}>
            <ListComponent onDelete={this.props.deleteContact} contacts={this.props.contacts} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

ContactListContainer.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
  fetchContacts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contactStore.contacts,
});

const matchDispatchToProps = dispatch =>
  bindActionCreators({ fetchContacts, deleteContact }, dispatch);


export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(ContactListContainer);
