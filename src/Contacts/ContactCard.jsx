import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import red from 'material-ui/colors/red';
import EditIcon from '@material-ui/icons/Edit';
import PlaceIcon from '@material-ui/icons/Place';
import EmailIcon from '@material-ui/icons/Email';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import { withRouter } from 'react-router';

const styles = theme => ({
  card: {
    width: 300,
    overflow: 'hidden',
  },
  cardHeader: {
    height: 100,
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  cardTitle: {
    color: theme.palette.primary.contrastText,
  },
  cardContent: {
    position: 'relative',
  },
  cardItemText: {
    paddingLeft: 0,
  },
  button: {
    position: 'absolute',
    height: 40,
    width: 40,
    right: 10,
    top: -20,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  deleteButton: {
    display: 'block',
    margin: '20px auto',
  },
});

class ContactCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = () => {
    this.props.onDelete(this.props._id);
  }

  goToEdit = () => {
    this.props.history.push(`/contacts/edit/${this.props._id}`);
  }

  render() {
    const {
      classes, firstName, lastName, country, email,
    } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            classes={{
            title: this.props.classes.cardTitle,
          }}
            className={classes.cardHeader}
            title={`${firstName} ${lastName}`}
            component="div"
          />
          <CardContent className={classes.cardContent}>
            <Button onClick={this.goToEdit} variant="fab" color="secondary" aria-label="edit" className={classes.button}>
              <EditIcon />
            </Button>
            <List>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText className={classes.cardItemText} primary={email} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText className={classes.cardItemText}primary={country} />
              </ListItem>
            </List>
          </CardContent>
          <Divider />
          <Button onClick={this.handleClick} variant="raised" size="small" className={classes.deleteButton} color="secondary">
          Delete
          </Button>
        </Card>
      </div>
    );
  }
}

ContactCard.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
export default withRouter(withStyles(styles)(ContactCard));
