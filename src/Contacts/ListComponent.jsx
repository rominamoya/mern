import React from 'react';
import Grid from 'material-ui/Grid';
import { withRouter } from 'react-router';
import ContactCard from './ContactCard';

const ContactList = props => (
  props.contacts.map(contact => (
    <Grid key={contact.id} item>
      <ContactCard onDelete={props.onDelete} key={contact.id} {...contact} />
    </Grid>
  ))
);

export default withRouter(ContactList);
