
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import countries from 'country-list';
import { MenuItem } from 'material-ui/Menu';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = {
      message: 'You need to provide an Email address',
    };
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = {
      message: 'Invalid email address',
    };
  }
  return errors;
};
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  button: {
    margin: theme.spacing.unit,
  },
  flex: {
    flex: 1,
  },
  field: {
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  form: {
    padding: theme.spacing.unit * 3,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class FormComponent extends Component {
  componentWillReceiveProps = (nextProps) => {
    const { contact } = nextProps;
    if (
      (contact !== this.props.contact)) {
      this.props.initialize(contact);
    }
  }

  handleClick = () => {
    this.props.history.push('/');
  }

renderField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) =>
  (<TextField
    fullWidth
    hintText={label}
    label={label}
    error={touched && error}
    {...input}
    {...custom}
  />)
 renderSelectField = ({
   input, label, meta: { touched, error, warning }, children, ...custom
 }) => (
   <FormControl fullWidth >
     <InputLabel htmlFor="country">{label}</InputLabel>
     <Select
       label={label}
       error={touched && error}
       {...input}
       onChange={(event) => {
          input.onChange(event.target.value);
       }}
       {...custom}
     >
       {children}
     </Select>
     {touched && ((error && <span>{error}</span>)
     || (warning && <span>{warning}</span>))}
   </FormControl>
 )

 render() {
   const countryList = countries().getNames();
   const {
     handleSubmit, pristine, classes, submitting,
   } = this.props;
   return (
     <div className={classes.root}>
       <Grid container spacing={0} justify="center" >
         <Grid
           item
           xs={12}
           sm={4}
           alignItems="center"
           direction="row"
           justify="center"
         >
           <AppBar position="static">
             <Toolbar>
               <Typography variant="title" color="inherit" className={classes.flex}>
            Title
               </Typography>
               <Button onClick={this.handleClick} color="inherit">Cancel</Button>
             </Toolbar>
           </AppBar>
           <Paper>
             <form className={classes.form} onSubmit={handleSubmit}>
               <Field name="email" type="email" component={this.renderField} label="Email" />
               <Field name="firstName" type="text" component={this.renderField} label="Name" />
               <Field name="lastName" type="text" component={this.renderField} label="Last Name" />
               <Field name="country" id="country" component={this.renderSelectField} label="Country">
                 {countryList.map(country => <MenuItem value={country}>{country}</MenuItem>)}
               </Field >
               <div>
                 <Button
                   type="submit"
                   disabled={pristine || submitting}
                   variant="raised"
                   color="primary"
                   className={classes.button}
                 >
                  Submit
                 </Button>
               </div>
             </form>
           </Paper>
         </Grid>
       </Grid>
     </div>
   );
 }
}

FormComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  pristine: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
  submitting: PropTypes.array.isRequired,
  loading: PropTypes.func.isRequired,
};
const FormComponentWitStyles = withStyles(styles)(FormComponent);
const InitializeFromStateForm = reduxForm({
  form: 'initializeFromState',
  validate,
})(FormComponentWitStyles);


export default withRouter(connect(state => ({
  initialValues: state.contactStore.selectedContact,
}))(InitializeFromStateForm));
