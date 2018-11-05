import React from 'react';
import styled from 'styled-components';
import Clarifai from 'clarifai';

const Form = styled.div`
  display: flex;
  justify-content: center;
  >section > div >input{
    width: 300px;
    padding: 10px 3px;
  }
  >section > div > button{
    padding: 8px 10px;
    font-size: 1.0rem;
    position: relative;
    top: 1px;
  }
`;



const ImageLinkForm = ({onInputChange, onButtunSubmit }) => {
  return(
      <Form>
        <section>
        <p>{'This app detects face of the picture. Please try'}</p>
        <div>
          <input type='text' onChange={() => onInputChange}/>
          <button onClick={() => onButtunSubmit}>Detect</button>
        </div>
        </section>
      </Form>
  );
}


export default ImageLinkForm;
