import React from 'react';
import Landing from './components/Landing';
import GetDataContext from './context/GetDataContext';
const App = () => {
  return (
    <div>
      <GetDataContext>
        <Landing />
      </GetDataContext>
    </div>
  );
};

export default App;
