import React from "react";
import { Link } from 'react-router-dom';
import styles from './Error.module.css';

const Error = () => (
	<div>
		<h1>
			Ooops,.....<br/>
			Smth's gone wrong - we couldn't load Data
		</h1>
		<Link className={styles.btn} to={'/'}>Try to fetch Data again</Link>
	</div>
);

export default Error;
