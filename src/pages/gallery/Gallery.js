import React, {Component} from 'react';
import { connect } from 'react-redux';
import ImageTile from '../../components/ImageTile';
import classNames from 'classnames';
import styles from './Gallery.module.scss';
import galleryInitAction from './galleryInitAction';

class Gallery extends Component {
	componentDidMount() {
		this.props.onGalleryInit(0);
	}

	render() {
		return (
			<div className={classNames(styles.images)}>
				{this.props.images.map(function (image) {
					return <ImageTile image={image} onClick={console.log(image.id)}/>
				})}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		images: state.gallery.images
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onGalleryInit: (page) => dispatch(galleryInitAction(page))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
