import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './ImagePage.module.scss';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import imagePageInitAction from './imagePageInitAction';
import imageDescriptionUpdateAction from './imageDescriptionUpdateAction';
import EditableLabel from 'react-inline-editing';
import imageDeleteAction from "./imageDeleteAction";

class ImagePage extends Component {
	constructor(props) {
		super(props);

		this.onDescriptionChanged = this.onDescriptionChanged.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	componentDidMount() {
		this.props.onInit(this.props.id);
	}

	onDescriptionChanged(text) {
		if (text.length === 0)
			return;

		this.props.onImageDescriptionUpdate(this.props.image.id, text)
	}

	onDelete() {
		this.props.onImageDelete(this.props.id);

		// This should come after await/ in done
		this.props.onDeleted();
	}

	render() {
		if (this.props.image != null) {
			return (
				<div className={classnames(styles.imagePage)} >
					<img src={ this.props.image.url } />
					<div>{ this.props.image.id }</div>
					<EditableLabel text={this.props.image.description}
						onFocusOut={this.onDescriptionChanged}/>
					<div onClick={this.onDelete}>DELETE</div>
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
	id: PropTypes.string,
	onDeleted: PropTypes.func.optional
};

function mapStateToProps(state) {
	return {
		image: state.gallery.currentImage
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onInit: (imageId) => dispatch(imagePageInitAction(imageId)),
		onImageDescriptionUpdate: (imageId, description) => dispatch(imageDescriptionUpdateAction(imageId, description)),
		onImageDelete: (imageId) => dispatch(imageDeleteAction(imageId))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagePage);