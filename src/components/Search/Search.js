// Реализуйте страницу поиска.
// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
import {connect} from 'react-redux';
// import { SearchPresentation } from './SearchPresentation';
import React, {useState, useEffect} from 'react';
import Loader from "../Loader";
import Error from "../Error";
import ShowPreview from "../ShowPreview";
import { getShows, getIsLoading, getError } from "../../reducers/searchReducer";
import {fetchMoviesBegin} from '../../actions/searchActions';
import styles from "./Search.module.css";

const Search = (props) => {
	const [searchValue, setSearchValue] = useState(``);
	const {shows, isLoading, error, fetchMoviesBegin} = props;

	const onChange = ({target: {value}}) => {
		setSearchValue(value.trim());
	};

	const submitForm = (e) => {
		e.preventDefault();
		if (searchValue) fetchMoviesBegin(searchValue);
		setSearchValue(``);
	};

	const renderComponent = () => {
		if (isLoading) return <Loader/>;
		else return (
			<div className={`${styles.searchPanel} t-search-result`}>
				{shows.map(show => <ShowPreview key={show.id} {...show} />)}
			</div>
		);
	};

	if (error) return <Error/>;


	return (
		<React.Fragment>
			<form
				className={styles.previewList}
				onSubmit={submitForm}
			>
				<input
					className={`${styles.input} t-input`}
					placeholder="Название сериала"
					name="search_input"
					onChange={onChange}
					value={searchValue}
				/>
				<div className={styles.buttonWrapper}>
					<button
						className={`${styles.button} t-search-button`}
						type="submit"
					>
						Найти
					</button>
				</div>
			</form>

			{renderComponent()}

		</React.Fragment>
	);
};

const mapStateToProps = (state) => ({
	shows: getShows(state),
	isLoading: getIsLoading(state),
	error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
	fetchMoviesBegin: () => dispatch(fetchMoviesBegin()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Search);

