import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ImageTile.module.scss';
import classNames from 'classnames';

const ImageTile = function (props) {
	return (
		<Link to={ `/image/${props.image.id}` }>
			<div className={classNames(styles.imageTile)}>
				<img src={props.image.url} alt={props.image.description} onClick={props.onClick}/>
				<div className={classNames(styles.imageDescription)}>{props.image.description}</div>
			</div>
		</Link>
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