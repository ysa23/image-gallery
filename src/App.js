import React from 'react';
import classNames from 'classnames';
import styles from './App.module.css';
import Gallery from './pages/gallery/Gallery';


const App = () => {
	return (
			<div className={classNames(styles.app)}>
				<header className={classNames(styles.header)}>Image Gallery</header>
				<Gallery />
			</div>
		);
};

export default App;
