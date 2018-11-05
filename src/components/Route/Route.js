import React from 'react';
import Rank from '../Rank/Rank';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../FaceRecognition/FaceRecognition';
import Signin from '../Signin/Signin';
import Registration from '../Registration/Registration';


const Route = ({route, input, box, imageUrl, onRouteChange, }) => {

    switch (route) {
      case 'signin':
        return <Signin onRouteChange={onRouteChange}/>
        break;
      case 'register':
        return <Registration onRouteChange={onRouteChange}/>
        break;
      case 'home':
        return(
        <div>
          <Rank />
          <ImageLinkForm input={input} imageUrl={imageUrl} />
          <FaceRecognition box={box} imageUrl={imageUrl}/>
        </div>
        )
        break;
      default:
      return `Error: route note fount`;
    }
}

export default Route;
