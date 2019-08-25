import React, { useState } from 'react';

import Loader from "../Loader";
import Error from "../Error";
import ShowPreview from "../ShowPreview";

import styles from "./Search.module.css";

const SearchPresentation = (props) => {
	const [values, setValues] = useState;
	const {shows, isLoading, error, submitForm} = props;

	const onChange = ({target: {name, value}}) => {
		setValues({
			...values,
			[name]: value,
		});
	};

	return {isLoading} ?
		(<Loader />) :
		(
			<React.Fragment>
				<form
					className={styles.previewList}
					onSubmit={() => submitForm()}>
					<input
						className={styles.input + ' t-input'}
						placeholder="Название сериала"
						name="search_input"
						onChange={onChange}
					/>
					<div className={styles.buttonWrapper}>
						<button
							className={styles.button + ' t-search-button'}
							type="submit"
						>
							Найти
						</button>
					</div>

					{error && <Error />}

				</form>
				<div className={styles.searchPanel + ' t-search-result'}>
					{shows.map(show => (
						<ShowPreview key={show.id} {...show} />
					))}
				</div>
			</React.Fragment>
		);
};

export {SearchPresentation};