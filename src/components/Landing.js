import React from 'react';
// Routes
import { Routes, Route } from 'react-router-dom';
// Components
import Exchanges from './Exchanges';
import Markets from './Markets';
import Coin from './Coin';
import Navbar from './Navbar';
import HomePage from './HomePage';
import NotFound from './NotFound';

const Landing = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* home page start */}
        <Route path='/' element={<HomePage />}></Route>
        {/* home page end */}

        {/* markets start */}
        <Route path='/markets' element={<Markets />}></Route>
        <Route path='/markets/:name' element={<Coin />}></Route>
        {/* markets end */}

        {/* exchange start */}
        <Route path='/exchanges' element={<Exchanges />}></Route>
        {/* exchange end */}
        {/* not found */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default Landing;
