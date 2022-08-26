import React, { useContext, useState, useRef, useEffect } from 'react';
// Context
import { marketsContext } from '../context/GetDataContext';
// Loader
import Loading from './Loading';
// Component
import Market from './Market';
// Style
import style from '../css/market.module.css';

const Markets = () => {
  const markets = useContext(marketsContext);
  const searchRef = useRef();
  const [search, setSearch] = useState('');
  const searcher = markets.filter((item) => item.id.includes(search));

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div>
      <input className={style.searcher}
        type='text'
        placeholder='search...'
        value={search}
        onChange={(e) => setSearch(e.target.value.trim().toLocaleLowerCase())}
        ref={searchRef}
      />

      {markets.length > 0 ? (
        searcher.map((coin) => {
          const {
            id,
            symbol,
            name,
            image,
            low_24h,
            high_24h,
            market_cap,
            market_cap_rank,
            current_price,
            total_volume,
            price_change_percentage_24h: dayPrice,
            price_change_percentage_1h_in_currency: oneHourPrice,
          } = coin;
          return (
            <Market
              key={id}
              id={id}
              symbol={symbol}
              name={name}
              image={image}
              low_24h={low_24h}
              high_24h={high_24h}
              market_cap={market_cap}
              market_cap_rank={market_cap_rank}
              current_price={current_price}
              total_volume={total_volume}
              dayPrice={dayPrice}
              oneHourPrice={oneHourPrice}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Markets;
