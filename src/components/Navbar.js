import React from 'react';
// Router
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.div`
  background: #007bff;
  padding: 1rem 0;
  max-height: 3.5rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  ul li {
    list-style-type: none;
  }

  a {
    color: #fff;
    transition: color 0.2s linear;

    :hover {
      text-decoration: none;
      color: #0055b0;
    }
  }
`;

const Navbar = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/markets'>Markets</Link>
        </li>
        <li>
          <Link to='/exchanges'>Exchanges</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;
