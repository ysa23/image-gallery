import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageTile from '../../components/ImageTile';
import classNames from 'classnames';
import styles from './GalleryPage.module.scss';

class GalleryPage extends Component {
	render() {
		return (
			<div className={classNames(styles.images)}>
				{this.props.images.map(function (image) {
					return <ImageTile key={image.id} image={image} />
				})}
			</div>
		);
	}
}

GalleryPage.propTypes = {
	images: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string,
			url: PropTypes.string,
			description: PropTypes.string
		}))
};

export default GalleryPage;