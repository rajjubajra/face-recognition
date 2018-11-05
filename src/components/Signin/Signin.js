import React from 'react';
import styled from 'styled-components';

const SigninForm = styled.div`
    display: flex,
    justify-content: center;

    > section > div{
      border: 1px solid #ccc;
      max-width: 300px;
      margin: 0px auto;
    }

    > section > div > div > input{
      width: 200px;
      font-size: 1rem;
      padding: 3px 2px;
      margin: 4px;
    }

    > section> div> div > button {
      font-size: 1rem;
      background-color: #eee;
      padding: 5px 20px;
      border: 1px solid #ccc;
      margin: 10px 0px 30px 0px;
      cursor: pointer;
    }
`;

const Signin = ({onRouteChange}) => {
  return(
    <SigninForm>
        <section>
          <div>
              <h3>Sign in Form</h3>
              <div>
                <input type='email' name='email' placeholder="Email Address" />
              </div>
              <div>
                <input type='password' name='password'  placeholder="Password"/>
              </div>
              <div>
                <button onClick={() => onRouteChange('home')} >Sing In</button>
              </div>
          </div>
        </section>
    </SigninForm>
  );
}

export default Signin;
