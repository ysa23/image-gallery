import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import classNames from 'classnames';
import styles from './App.module.css';
import Gallery from './pages/gallery/Gallery';
import ImagePage from './pages/image/ImagePage';


const App = () => {
	return (
		<Router>
			<div className={classNames(styles.app)}>
				<header className={classNames(styles.header)}>Image Gallery</header>

				<Route path="/" exact component={Gallery} />
				<Route path="/image/:id" render={ (props) =>  <ImagePage id={props.match.params.id} /> } />
			</div>
		</Router>
		);
};

export default App;
