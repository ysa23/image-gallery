import React, {Component} from 'react';
import { connect } from 'react-redux';
import ImageTile from '../../components/ImageTile';
import classNames from 'classnames';
import styles from './Gallery.module.scss';

class Gallery extends Component {
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

export default connect(mapStateToProps, null)(Gallery);
