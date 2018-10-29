import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from './routes';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          {routes.map(route => (
            <Route exact path={route.path} component={route.component} />
        ))}
        </div>
      </Router>
    );
  }
}

export default App;
