import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import styles from './SignInForm.module.css';
import CustomInput from './../CustomInput/index';
import { signInScheme } from './../../../utils/validationScheams';

const SignInForm = (props) => {
  const initialValues = {
    email_address: '',
    password: '',
    remember_me: false,
    errors: null,
  };

  const submitHandler = (values, formikBag) => {
    localStorage.setItem(values.email_address, JSON.stringify(values));
    formikBag.resetForm();
    alert("Authorization passed");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={signInScheme}
    >
      <Form className={styles.component}>
        <span className={styles.inputBlock}>
          <CustomInput
            className={styles.input}
            name='email_address'
            type='text'
            placeholder='Email address'
          />
        </span>
        <ErrorMessage
          className={styles.error}
          name='email_address'
          component='div'
        />
        <span className={styles.inputBlock}>
          <CustomInput
            className={styles.input}
            name='password'
            type='password'
            placeholder='Password'
          />
          
        </span>
        <ErrorMessage
          className={styles.error}
          name='password'
          component='div'
        />
        <div className={styles.inputBlock}>
          <Field
            className={styles.checkbox}
            name='remember_me'
            type='checkbox'
            id='remember_me'
          />

          <label htmlFor='remember_me'>Remember Me</label>
          <a className={styles.link}
            href='https://www.squadhelp.com/Terms&amp;Conditions'
            target='blank'
          >
            Forgot Password
          </a>
        </div>

          <Field
            className={styles.submit}
            name='submit'
            type='submit'
            value='LOGIN'
          />

        
          <Field
            className={styles.facebook}
            name='submit_facebook'
            type='button'
            value='Sign in with Facebook'
          />
          <Field
            className={styles.google}
            name='submit_google'
            type='button'
            value='Sign in with Google'
          />
      </Form>
    </Formik>
  );
};

export default SignInForm;
