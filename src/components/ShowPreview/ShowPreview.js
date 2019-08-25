// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React from 'react';
import styles from './ShowPreview.module.css';
import {Link} from 'react-router-dom';

const ShowPreview = ({ id, name, image, summary }) => (
	<div className={`${styles.container} t-preview`}>
		<div>
			<Link className="t-link" to={`/shows/${id}`}>
				{name}
			</Link>
			{image && <img src={image} alt={name} />}
		</div>
		<div dangerouslySetInnerHTML={{ __html: summary }} />
	</div>
);

export default ShowPreview;
