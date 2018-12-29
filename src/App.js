import React, {Component} from 'react';
import { connect } from 'react-redux';
import ImageTile from './ImageTile';
import classNames from 'classnames';
import styles from './App.module.css';
import galleryInitAction from './galleryInitAction';

class App extends Component {
	constructor(props) {
		super(props);
		//this.onGalleryInit = this.onGalleryInit.bind(this);
	}

	componentDidMount() {
		this.props.onGalleryInit(0);
	}

	render() {
		return (
			<div className={classNames(styles.app)}>
				<header className={classNames(styles.header)}>Image Gallery</header>
				<div className={classNames(styles.images)}>
					{this.props.images.map(function (image, index) {
						return <ImageTile image={image} onClick={console.log(image.id)}/>
					})}
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
