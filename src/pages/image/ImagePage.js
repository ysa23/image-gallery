import React from 'react';
import classnames from 'classnames';
import styles from './ImagePage.module.scss';

const ImagePage =  ( { match }) => {
	return (
		<div className={classnames(styles.imagePage)} >
			{ match.params.id }
		</div>
	);
};

export default ImagePage;