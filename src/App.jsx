import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormContainer from './Contacts/FormContainer';
import ListContainer from './Contacts/ListContainer';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <Router >
        <div>
          <Route exact path="/" component={ListContainer} />
          <Route path="/contacts/new" render={() => <FormContainer {...this.props} />} />
          <Route path="/contacts/edit/:id" render={() => <FormContainer {...this.props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
