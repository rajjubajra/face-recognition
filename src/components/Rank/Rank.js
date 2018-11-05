import React from 'react';
import styled from 'styled-components';

const Rankblock = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 800;
  margin-top: 30px;
`;

const Rank = () => {
  return(
    <Rankblock>
    {'Name, your current rank is #5'}
    </Rankblock>
  );
}

export default Rank;
