import './reset.css';
import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationList from './components/lists/NavigationList/index';

const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true,
    };
  }

  hideComponent = () => {
    this.setState({
      showComponent: !this.state.showComponent,
    });
  };

  render() {

    return (
      <Router>
        <Route render={(props) => <NavigationList {...props} />} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/sign_in' component={SignInPage} />
            <Route path='/sign_up' component={SignUpPage} />
            <Route path='/' component={SignInPage} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
