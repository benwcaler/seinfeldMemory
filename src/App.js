import React, { Component } from 'react';
import Image from "./components/Image"
import images from "./components/images.json"
import './App.css';

class App extends Component {
  state = {
    images: images,
    score: 0,
    highScore: 0,
    clicked: [],
    message: ""
  }

  handleClick = (id) => {
    let imgs = this.state.images;
    let randomImgs = [];
    while (imgs.length > 0) {
      let randomNum = Math.floor(Math.random() * imgs.length);
      randomImgs.push(imgs[randomNum]);
      imgs.splice(randomNum, 1);
    }
    this.setState({ images: randomImgs });

    if (!this.state.clicked.includes(id)) {
      this.state.clicked.push(id);
      if (this.state.score < this.state.highScore) {
        this.setState({ score: this.state.score + 1, message: "Correct!" });
      } else if (this.state.score === this.state.highScore) {
        this.setState({ score: this.state.score + 1, highScore: this.state.highScore + 1, message: "Correct!" });
      }
    } else {
      this.setState({ message: "Incorrect!", score: 0, clicked: [] });
    }

  }

  componentDidMount() {
    let imgs = this.state.images;
    let randomImgs = [];
    while (imgs.length > 0) {
      let randomNum = Math.floor(Math.random() * imgs.length);
      randomImgs.push(imgs[randomNum]);
      imgs.splice(randomNum, 1);
    }
    this.setState({ images: randomImgs });
  }

  loadImages = () => {
    return (
      this.state.images.map(img =>
        <Image
          key={img.id}
          style={{
            backgroundImage: `url(${img.src})`
          }}
          onClick={() => this.handleClick(img.id)} />
      )
    )
  }

  render() {
    return (
      <div>
        <header>
          <img src="./images/logo.png" alt="logo" id="logo" />
          <h2>Memory Game!</h2>
          Score: {this.state.score}  |  High Score: {this.state.highScore}
          <p>{this.state.message}</p>
        </header>
        <div id="imageContainer">
          {this.loadImages()}
        </div>
      </div>
    );
  }
}

export default App;
