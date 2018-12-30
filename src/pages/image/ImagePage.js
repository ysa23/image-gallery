import React from 'react';
import classnames from 'classnames';
import styles from './ImagePage.module.scss';
import PropTypes from 'prop-types';

const ImagePage =  ( props ) => {
	return (
		<div className={classnames(styles.imagePage)} >
			{ props.id }
		</div>
	);
};

ImagePage.propTypes = {
	id: PropTypes.number
};

export default ImagePage;