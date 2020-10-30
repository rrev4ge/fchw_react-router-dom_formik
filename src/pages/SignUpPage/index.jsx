import React, {Component} from 'react';
import styles from './SignUpPage.module.css';
import SignUpForm from '../../components/forms/SignUpForm';

class SignUpPage extends Component {
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
          <h1>CREATE AN ACCOUNT</h1>
          <p>We always keep your name and email address private.</p>
        </div>
        <SignUpForm />
      </div>
    );
  }
}

export default SignUpPage;
