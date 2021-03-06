import './reset.css';
import styles from './App.module.css';
import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationList from './components/lists/NavigationList/index';
import CONSTANTS from './CONSTANTS';
import { CircularProgress } from '@material-ui/core';

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
        <Suspense
          fallback={
            <div className={styles.loader}>
              <CircularProgress color='secondary' />
            </div>
          }
        >
          <Switch>
            <Route
              path={`${CONSTANTS.ROOT_PATH}/sign_up`}
              component={SignUpPage}
            />
            <Route
              path={[
                `${CONSTANTS.ROOT_PATH}/`,
                `${CONSTANTS.ROOT_PATH}`,
                `/`,
                `${CONSTANTS.ROOT_PATH}/sign_in`,
              ]}
              component={SignInPage}
            />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
