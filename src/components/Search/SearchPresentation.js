import React, { useState } from "react";
import styles from "./Search.module.css";
import Loader from "../Loader";
import ShowPreview from "../ShowPreview";
import Error from "../Error";

export const Search = (props) => {
	const [searchValue, setSearchValue] = useState(``);
	const {shows, isLoading, error, fetchMoviesBegin} = props;

	const onChange = ({target: {value}}) => {
		setSearchValue(value);
	};

	const submitForm = (e) => {
		e.preventDefault();
		if (searchValue) fetchMoviesBegin(searchValue.trim());
		setSearchValue(``);
	};

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

			{(isLoading) ?
				<Loader/> :
				(
					<div className={`${styles.searchPanel} t-search-result`}>
						{shows.map(show => <ShowPreview key={show.id} {...show} />)}
					</div>
				)
			}

			{(error) && <Error/>}

		</React.Fragment>
	);
};
