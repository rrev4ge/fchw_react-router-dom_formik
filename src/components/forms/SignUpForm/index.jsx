import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import styles from './SignUpForm.module.css';
import CustomInput from './../CustomInput/index';
import { signUpScheme } from './../../../utils/validationScheams';

const SignUpForm = (props) => {
  const initialValues = {
    first_name: '',
    last_name: '',
    screen_name: '',
    email_address: '',
    password: '',
    password_confirmation: '',
    user_is: '',
    terms_conditions: false,
    errors: null,
  };

  const submitHandler = (values, formikBag) => {
    if (!values.user_is) {
      alert('Please specify whether you are a Creative or a Buyer');
    }
    if (values.user_is) {
      localStorage.setItem(values.email_address, JSON.stringify(values));
      formikBag.resetForm();
      alert("Your account was created");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={signUpScheme}
    >
      <Form className={styles.component}>
        <span className={styles.inputBlock}>
          <CustomInput
            className={styles.input}
            name='first_name'
            type='text'
            placeholder='First name'
          />
          <CustomInput
            className={styles.input}
            name='last_name'
            type='text'
            placeholder='last name'
          />
        </span>
        <ErrorMessage
          className={styles.error}
          name='first_name'
          component='div'
        />
        <ErrorMessage
          className={styles.error}
          name='last_name'
          component='div'
        />
        <span className={styles.inputBlock}>
          <CustomInput
            className={styles.input}
            name='screen_name'
            type='text'
            placeholder='Display Name'
          />
          <CustomInput
            className={styles.input}
            name='email_address'
            type='text'
            placeholder='Email Address'
          />
        </span>
        <ErrorMessage
          className={styles.error}
          name='screen_name'
          component='div'
        />
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
          <CustomInput
            className={styles.input}
            name='password_confirmation'
            type='password'
            placeholder='Password Confirmation'
          />
        </span>
        <ErrorMessage
          className={styles.error}
          name='password'
          component='div'
        />
        <ErrorMessage
          className={styles.error}
          name='password_confirmation'
          component='div'
        />
        <div>
          <label className={styles.label}>
            <Field
            className={styles.radio}
              id='join-as-client'
              name='user_is'
              value='Buyer'
              type='radio'
            />
            <span>
            <h2>Join As a Buyer</h2>
            <p>
              I am looking for a Name, Logo or Tagline for my business, brand or
              product.
            </p>
            </span>
          </label>
          <label className={styles.label}>
            <Field
            className={styles.radio}
              id='join-as-creative'
              name='user_is'
              value='Creative'
              type='radio'
            />
            <span>
              <h2>Join As a Creative or Marketplace Seller</h2>
              <p>
                I plan to submit name ideas, Logo designs or sell names in
                Domain Marketplace.
              </p>
            </span>
          </label>
        </div>

        <div className={styles.other}>
          <Field
            className={styles.checkbox}
            name='terms_conditions'
            type='checkbox'
            id='terms_conditions'
          />
          <label htmlFor='terms_conditions'>
            {' '}
            Allow Squadhelp to send marketing/promotional offers from time to
            time
          </label>
        </div>
        <Field
          className={styles.submit}
          name='submit'
          type='submit'
          value='Create account'
        />
        <div className={styles.other}>
          <p>
            By clicking this button, you agree to our{' '}
            <a className={styles.link}
              href='https://www.squadhelp.com/Terms&amp;Conditions'
              target='blank'
            >
              Terms of Service
            </a>
            .
          </p>
        </div>
        <Field
          className={styles.facebook}
          name='submit_facebook'
          type='button'
          value='Sign up with Facebook'
        />
        <Field
          className={styles.google}
          name='submit_google'
          type='button'
          value='Sign up with Google'
        />
      </Form>
    </Formik>
  );
};

export default SignUpForm;
