import React  from 'react';
import { Link, } from 'react-router-dom';
import styles from './NavigationList.module.css';

const NavigationList =(props)=> {


    return (
      <div className={styles.component}>
        <ul className={styles.list}>
          <li>
            <img className={styles.logo} src='https://www.squadhelp.com/img/logo.png' alt='' />
          </li>
          {props.location.pathname!=='/sign_in' ? <li className={styles.btn}><Link className={styles.link} to='/sign_in'>Signin</Link>
          </li>:""}
          {props.location.pathname!=='/sign_up' ? <li className={styles.btn}><Link className={styles.link} to='/sign_up'>Signup</Link>
        </li>:""}
        </ul>
      </div>
    );
}

export default NavigationList;
