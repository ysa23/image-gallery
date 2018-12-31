import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './ImagePage.module.scss';
import PropTypes from 'prop-types';
import imageStorage from '../../imagesApi';

class ImagePage extends Component {
	constructor(props) {
		super(props);
		this.image = imageStorage.getImage(this.props.id);
	}

	render() {
		return (
			<div className={classnames(styles.imagePage)} >
				<img src={ this.image.url } />
				<div>{ this.image.id }</div>
				<div>{ this.image.description} </div>
				<Link to='/'>Back </Link>
			</div>
		);
	}
}

ImagePage.propTypes = {
	id: PropTypes.number
};

export default ImagePage;