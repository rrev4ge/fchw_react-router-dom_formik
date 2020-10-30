import React from 'react';
import { Field } from 'formik';
import styles from './CustomInput.module.css';
import cx from 'classnames';

const CustomInput = (props) => {
  const {className, name, ...rest } = props;

  
    return (
      <Field name={name}>
        {({ field, meta }) => {
          const inputClasses = cx( className,{
            [styles.invalid]: meta.touched && meta.error,
            [styles.valid]: !meta.error && meta.touched,
          });
            return <input {...field} {...rest} className={inputClasses} />;       
        }}
      </Field>
    );
  };

export default CustomInput;
