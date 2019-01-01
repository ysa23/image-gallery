import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './App.module.scss';
import GalleryPageContainer from './pages/gallery/GalleryPageContainer';
import ImagePageContainer from './pages/image/ImagePageContainer';
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
											<img src={back} alt="back"/>
										</div>
									</Link>);
							return null;
							}} />

						Image Gallery
					</header>

					<Route path="/" exact component={GalleryPageContainer} />
					<Route path="/image/:id" render={ (props) =>
						<ImagePageContainer id={props.match.params.id} onDeleted={() => props.history.replace('/')} />} />
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
