import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageTile.module.scss';
import classNames from 'classnames';

const ImageTile = function (props) {
	return (
		<div className={classNames(styles.imageTile)}>
			<img src={props.image.url} alt={props.image.description} onClick={props.onClick}/>
		</div>
	);
};

ImageTile.propTypes = {
	image: PropTypes.shape({
		id: PropTypes.string,
		url: PropTypes.string,
		description: PropTypes.string
	}),
	onClick: PropTypes.func
};

export default ImageTile;