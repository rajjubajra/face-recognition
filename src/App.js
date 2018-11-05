import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Route from './components/Route/Route';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'd0417d791dfa4452a2948c18ea73075d'
});

const particleOptions =
  {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#008de5",
          blur: 1
        }
      }
    }
  }

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  calculateFaceLocation = (data) => {
      const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
      const image = document.getElementById('inputImage');
      const width = Number(image.width);
      const height = Number(image.height);
      //console.log(width, height);
      return{
        leftCol: clarifaiFace.left_col * width,
        topRow:  clarifaiFace.top_row * height,
        rightCol: width - ( clarifaiFace.right_col - width),
        bottomRow: height - (clarifaiFace.bottom_row - height)
      }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    console.log(event.target.value);
  }

  onButtunSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL,
               this.state.imageUrl)
        .then( response => this.displayFaceBox(this.calculateFaceLocation(response)))
        .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
      <Particles className='particles'  params={particleOptions} />
        <Navigation route={this.state.route} onRouteChange={this.onRouteChange}/>
        <Logo />
        <Route
          input={this.state.input}
          route={this.state.route}
          box={this.state.box}
          imageUrl={this.state.imageUrl}
          onRouteChange={this.onRouteChange}
          onInputChange={this.onInputChange}
          onButtunSubmit={this.onButtunSubmit}
        />
      </div>
    );
  }
}

export default App;
