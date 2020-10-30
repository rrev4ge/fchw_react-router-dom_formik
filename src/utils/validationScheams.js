import * as Yup from 'yup';

export const signInScheme = Yup.object({
  email_address: Yup.string()
    .email('Email is not valid format')
    .max(128)
    .required('This is required field'),
  password: Yup.string()
    .required('Password cannot be empty'),
  remember_me: Yup.boolean().required('This is required field'),
});

export const signUpScheme = Yup.object({
  first_name: Yup.string().min(1).max(32).required('Field cannot be empty'),
  last_name: Yup.string().min(1).max(32).required('Field cannot be empty'),
  screen_name: Yup.string()
    .min(4)
    .max(32)
    .required('Display name should be more than 4 characters'),
  email_address: Yup.string()
    .email('Please check the format of email address')
    .max(128)
    .required('Please check the format of email address'),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[^\s]{8,32}$/,
      'Password must contain at least 8 letters....'
    )
    .required('Password cannot be empty'),
  password_confirmation: Yup.string()
    .required('Password confirmation needs to match original password')
    .oneOf(
      [Yup.ref('password'), null],
      'Password confirmation needs to match original password'
    ),
});
