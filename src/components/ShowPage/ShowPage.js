// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { showRequest } from "../../actions/showActions";
import { getShow, getIsLoading, getError } from "../../reducers/showsReducer";
import Loader from "../Loader";
import Error from "../Error";
import styles from './ShowPage.module.css';


const ShowPage = (props) => {
	console.log(props);
	const { show, isLoading, error, match: {id}, showRequest } = props;
	const { name, image, summary, persons } = show;

	useEffect(() => {
		document.title = `You clicked 7 times`;
		showRequest(id);
	});

	if (isLoading) return <Loader/>;
	if (error) return <Error/>;

	return (
		<div>
			<p>{name}</p>
			{image && <img src={image} alt={name} />}
			<div dangerouslySetInnerHTML={{__html: summary}} />
			<div className={styles.cast}>
				{persons.map(({id, name: iName, image: {medium}}) => (
					<div key={id} className="t-person">
						<p>{iName}</p>
						{image && <img src={medium} alt={iName} />}
					</div>
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	show: getShow(state),
	isLoading: getIsLoading(state),
	error: getError(state),
});

const mapDispatchToProps = { showRequest };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShowPage);
