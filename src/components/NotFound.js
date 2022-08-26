import React from 'react';
// Style
import styled from 'styled-components';

const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 1.4px;

  -webkit-animation: move 1.5s 1 backwards linear;
  animation: move 1.5s 1 backwards linear;

  @keyframes move {
    0% {
      transform: translateX(-800px);
      opacity: 0.3;
    }

    100% {
      transform: translateY(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
const NotFound = () => {
  return (
    <Div>
      <h1>not found</h1>
    </Div>
  );
};

export default NotFound;
