import React, { useEffect, createContext, useState } from 'react';

// api
import { getMarkets, getExchanges } from '../services/api';

export const marketsContext = createContext();
export const exchangesContext = createContext();

const GetDataContext = ({ children }) => {
  const [market, setMarkets] = useState([]);
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const fetchMarkets = async () => {
      setMarkets(await getMarkets());
    };

    fetchMarkets();
  }, []);
  useEffect(() => {
    const fetchMarkets = async () => {
      setExchanges(await getExchanges());
    };

    fetchMarkets();
  }, []);

  return (
    <div>
      <marketsContext.Provider value={market}>
        <exchangesContext.Provider value={exchanges}>
          {children}
        </exchangesContext.Provider>
      </marketsContext.Provider>
    </div>
  );
};

export default GetDataContext;
