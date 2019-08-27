import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css';

const Error = () => (
  <div>
    <h2>
      Ooops,.....
      <br />
      Smth's gone wrong - we couldn't load Data
    </h2>
    <Link className={styles.btn} to={'/'}>
      Try to fetch Data again
    </Link>
  </div>
);

export default Error;
