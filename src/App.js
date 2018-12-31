import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './App.module.scss';
import Gallery from './pages/gallery/GalleryPage';
import ImagePage from './pages/image/ImagePage';
import galleryInitAction from "./appInitAction";
import back from './back.svg';


export class App extends Component {
	componentDidMount() {
		this.props.onGalleryInit(0)
	}

	render() {
		return (
			<Router>
				<div className={classNames(styles.app)}>
					<header className={classNames(styles.header)}>
						<Route path="/" exact={false} render={ (props) => {
							if (props.location.pathname !== '/')
								return (
									<Link to="/">
										<div className={classNames(styles.back)}>
											<img src={back}/>
										</div>
									</Link>);
							return null;
							}} />

						Image Gallery
					</header>

					<Route path="/" exact component={Gallery} />
					<Route path="/image/:id" render={ (props) =>
						<ImagePage id={props.match.params.id} onDeleted={() => props.history.replace('/')} />} />
				</div>
			</Router>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onGalleryInit: (page) => dispatch(galleryInitAction(page))
	};
}

export default connect(null, mapDispatchToProps)(App);
