import React from 'react';
import styled from 'styled-components';

const RegistrationFrom = styled.div`
    display: flex,
    justify-content: center;
    margin: 15px;

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
   > section > div > div > p {
     cursor: pointer;
   }
`;

const Registration = ({onRouteChange}) => {
  return(
    <RegistrationFrom>
        <section>
          <div>
              <h3>Registration Form</h3>
              <div>
                <input type='text' name='name' placeholder="Name" />
              </div>
              <div>
                <input type='email' name='email' placeholder="Email Address" />
              </div>
              <div>
                <input type='password' name='password'  placeholder="Password"/>
              </div>
              <div>
                <button>Submit</button>
              </div>
              <div>
                <p onClick={()=>onRouteChange('signin')}>Sign In</p>
              </div>
          </div>
        </section>
    </RegistrationFrom>
  );
}


export default Registration;
