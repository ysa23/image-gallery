import React, { Component } from 'react';
import ImageTile from './ImageTile';
import ImageStorage from './imageStorage';
import classNames from 'classnames';
import styles from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.images = ImageStorage.getImages(0);
  }

  render() {
    return (
      <div className={classNames(styles.app)}>
          <header className={classNames(styles.header)}>Image Gallery</header>
          <div className={classNames(styles.images)}>
              {this.images.images.map(function(image, index) {
                return <ImageTile image={image} onClick={console.log(image.id)}/>
              })}
          </div>
      </div>
    );
  }
}

export default App;
