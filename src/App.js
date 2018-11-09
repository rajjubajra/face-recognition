import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Registration from './components/Registration/Registration';
import Clarifai from 'clarifai';
import './App.css';

//page background particle effects
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

const app = new Clarifai.App({
   apiKey: 'd0417d791dfa4452a2948c18ea73075d'
  });

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      user: '',
      entries: ''

    }
  }

  componentDidMount(){
    fetch('http://localhost:5000')
    .then( response => response.json())
    .then( data => console.log(data))
    // and .then(console.log) is same
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
    console.log(event.target.value);
    this.setState({input: event.target.value});
  }

  onImageSubmit = () => {
    console.log('click button');
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL,
               this.state.imageUrl)
        .then( response => this.displayFaceBox(this.calculateFaceLocation(response)))
        .catch(err => console.log(err));
  }

  pageRoute = (nav) => {
    switch (nav) {
      case 'signin':
        return <Signin onRouteChange={this.onRouteChange}/>
        break;
      case 'register':
        return <Registration onRouteChange={this.onRouteChange}/>
        break;
      case 'home':
        return(
        <div>
          <Rank
            name={this.state.user.username}
            entries={this.state.user.entries}
          />
          <ImageLinkForm
             onInputChange={this.onInputChange}
             onImageSubmit={this.onImageSubmit}
          />
          <FaceRecognition
              box={this.state.box}
              imageUrl={this.state.imageUrl}
            />
        </div>
        )
        break;
      default:
      return `Error: route note fount`;
    }
  }



  render() {
    return (
      <div className="App">
      <Particles className='particles'  params={particleOptions} />
        <Navigation route={this.state.route} onRouteChange={this.onRouteChange}/>
        <Logo />
        {  this.pageRoute(this.state.route)  }
      </div>
    );
  }
}

export default App;
