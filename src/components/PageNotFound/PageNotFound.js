import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';

const PageNotFound = () => (
	<Fragment>
		<div className={styles.content}>
			<h1>404</h1>
			<h2>Oops, the page you're looking for does not exist.</h2>
			<p>
				You may want to head back to the homepage.<br />
				If you think something is broken, report a problem.<br />
			</p>
			<Link to={'/'} className={styles.btn}>RETURN HOME</Link>
			<span className={styles.btn}>REPORT PROBLEM</span>
		</div>
		<div className={styles.bgImg} />
	</Fragment>
);

export default PageNotFound;
