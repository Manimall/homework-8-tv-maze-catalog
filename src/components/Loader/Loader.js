import React from "react";
import ReactLoading from "react-loading";
import { Section, Title, Article, Logo } from "./generic";
import styles from './Loader.module.css';

const Loader = () => {
	const { prop } = Logo;

	return (
		<Section className={styles.LoaderContainer}>
			<Title>Please wait, we're fetching data</Title>
			<Article key={prop}>
				<ReactLoading
					type={prop}
					color="#fff"
					height={120}
					width={120}
				/>
			</Article>
		</Section>
	);
};

export default Loader;
