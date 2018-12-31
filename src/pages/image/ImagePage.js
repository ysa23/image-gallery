import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './ImagePage.module.scss';
import PropTypes from 'prop-types';
import imageStorage from '../../imagesApi';
import connect from "react-redux/es/connect/connect";
import galleryInitAction from "../../appInitAction";
import imagePageInitAction from './imagePageInitAction';

class ImagePage extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.onInit(this.props.id);
	}

	validateDescription(text) {
		return (text.length > 0);
	}

	render() {
		if (this.props.image != null) {
			return (
				<div className={classnames(styles.imagePage)} >
					<img src={ this.props.image.url } />
					<div>{ this.props.image.id }</div>
					<div>{ this.props.image.description} </div>
					<Link to='/'>Back </Link>
				</div>
			);
		}
		else {
			return (
				<div>Loading...</div>
			);
		}
	}
}

ImagePage.propTypes = {
	id: PropTypes.number
};

function mapStateToProps(state) {
	return {
		image: state.gallery.currentImage
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onInit: (imageId) => dispatch(imagePageInitAction(imageId)),
		onImageDescriptionUpdate: (page) => {}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagePage);