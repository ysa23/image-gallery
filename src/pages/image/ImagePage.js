import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './ImagePage.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import imagePageInitAction from './imagePageInitAction';
import imageDescriptionUpdateAction from './imageDescriptionUpdateAction';
import EditableLabel from 'react-inline-editing';
import imageDeleteAction from "./imageDeleteAction";
import trash from './trash.svg';

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
					<div className={classnames(styles.details)}>
						<span className={classnames(styles.detailsTitle)}>Details</span>

						<EditableLabel text={this.props.image.description}
								   labelClassName={classnames(styles.descriptionLabel)}
								   inputClassName={classnames(styles.descriptionInput)}
								   onFocusOut={this.onDescriptionChanged}/>

						<img className={classnames(styles.deleteIcon)} onClick={this.onDelete} src={trash}/>
					</div>

					<div className={classnames(styles.imageContainer)}>
						<img src={ this.props.image.url } />
					</div>
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
	onDelete: PropTypes.func.optional
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