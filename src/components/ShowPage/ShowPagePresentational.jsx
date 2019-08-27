import React, {useEffect} from 'react';
import Loader from "../Loader";
import Error from "../Error";
import styles from "./ShowPage.module.css";


export const ShowPage = (props) => {
	const { show, isLoading, error, match: {params: {id}}, showRequest } = props;
	const { name, image, summary, persons } = show;

	useEffect(() => {
		document.title = `You clicked ${id} times`;
		showRequest(id);
	}, []);

	if (isLoading) return <Loader/>;
	if (error) return <Error/>;

	return (
		<div style={{padding: `20px`}}>
			<p className={styles.p}>{name}</p>
			{image && <img src={image} alt={name} />}
			<div dangerouslySetInnerHTML={{__html: summary}} />
			<div className={styles.cast}>
				{persons.map(({id, name: iName, image: {medium}}) => (
					<div key={id} className="t-person">
						<p className={styles.p}>{iName}</p>
						{image && <img src={medium} alt={iName} />}
					</div>
				))}
			</div>
		</div>
	);
};
