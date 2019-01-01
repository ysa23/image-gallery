import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ImageTile.module.scss';
import classNames from 'classnames';
import Image from './Image';

const ImageTile = function (props) {
	return (
		<Link to={ `/image/${props.image.id}` }>
			<div className={classNames(styles.imageTile)}>
				<Image url={props.image.url} width={298} height={298} alt={props.image.description}/>
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
	})
};

export default ImageTile;