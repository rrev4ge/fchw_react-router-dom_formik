import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationList.module.css';
import CONSTANTS from '../../../CONSTANTS';
const NavigationList = (props) => {
  return (
    <div className={styles.component}>
      <ul className={styles.list}>
        <li>
          <img
            className={styles.logo}
            src='https://www.squadhelp.com/img/logo.png'
            alt=''
          />
        </li>
        {(props.location.pathname !==`${CONSTANTS.ROOT_PATH}/` &&
          props.location.pathname !==`${CONSTANTS.ROOT_PATH}` &&
          props.location.pathname !==`/` &&
          props.location.pathname !==`` &&
          props.location.pathname !==`${CONSTANTS.ROOT_PATH}/sign_in`) ? (
          <li className={styles.btn}>
            <Link className={styles.link} to={`${CONSTANTS.ROOT_PATH}/sign_in`}>
              Signin
            </Link>
          </li>
        ) : (
          ''
        )}
        {props.location.pathname !== `${CONSTANTS.ROOT_PATH}/sign_up` ? (
          <li className={styles.btn}>
            <Link className={styles.link} to={`${CONSTANTS.ROOT_PATH}/sign_up`}>
              Signup
            </Link>
          </li>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
};

export default NavigationList;
