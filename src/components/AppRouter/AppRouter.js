/*
 Реализуйте роутер
 Вам нужно определить корневой роут, который будет вести на страницу поиска.
 Роут шоу должен принимать id в параметрах.
*/
import React from 'react';
import { Switch, Route } from "react-router-dom";
import ShowPage from '../ShowPage';
import Search from '../Search';
import PageNotFound from '../PageNotFound';
import styles from './AppRouter.module.css';


const AppRouter = () => (
	<div className={styles.App}>
		<Switch>
			<Route path={'/'} exact component={Search} />
			<Route path={'/shows/:id'} component={ShowPage} />
			<Route path={'*'} component={PageNotFound} />
		</Switch>
	</div>
);

export default AppRouter;
