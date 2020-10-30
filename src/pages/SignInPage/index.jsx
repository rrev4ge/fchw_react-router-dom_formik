import React, {Component} from 'react';
import styles from './SignInPage.module.css';
import SignInForm from '../../components/forms/SignInForm';

class SignInPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={styles.component}>
      <div className={styles.header}>
        <h1>LOGIN TO YOUR ACCOUNT</h1>
      </div>
      <SignInForm />
    </div>
    );
  }
}

export default SignInPage;
