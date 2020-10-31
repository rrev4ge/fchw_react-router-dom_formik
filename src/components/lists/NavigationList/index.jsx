import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationList.module.css';
import CONSTANTS from '../../../CONSTANTS';
const NavigationList = (props) => {
  const {
    location: { pathname },
  } = props;

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
        {pathname !== `${CONSTANTS.ROOT_PATH}` &&
        pathname !== `${CONSTANTS.ROOT_PATH}/` &&
        pathname !== `/` &&
        pathname !== `` &&
        pathname !== `${CONSTANTS.ROOT_PATH}/sign_in` ? (
          <li className={styles.btn}>
            <Link className={styles.link} to={`${CONSTANTS.ROOT_PATH}/sign_in`}>
              Signin
            </Link>
          </li>
        ) : (
          ''
        )}
        {pathname !== `${CONSTANTS.ROOT_PATH}/sign_up` ? (
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
