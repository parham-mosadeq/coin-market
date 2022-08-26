import React, { useContext } from 'react';
// Context
import { marketsContext } from '../context/GetDataContext';
// Components
import Loading from './Loading';
// Router
import { useNavigate } from 'react-router-dom';
// Functions
import { fixNumbers } from '../services/functions';
const Coin = () => {
  const market = useContext(marketsContext);
  // Getting the name (id) from url
  const loc = window.location.pathname.split('/')[2];
  // Navigating to previous page
  const nav = useNavigate();
  return (
    <div>
      {market ? (
        market.map((coin) => {
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

          if (coin.id === loc) {
            return (
              <article
                className='card container mt-4 mb-4  text-white bg-light '
                key={id}
              >
                <img
                  className='card-img-top mr-auto ml-auto mt-5 '
                  style={{ maxWidth: '10rem' }}
                  src={image}
                  alt={name}
                />

                <div className=' text-dark card-body '>
                  <p className=' text-dark title font-weight-bold '>{name}: </p>
                </div>
                <ul className=' text-dark list-group list-group-flush'>
                  <li className=' text-dark list-group-item'>
                    Nick Name: {symbol}
                  </li>
                  <li className=' text-dark list-group-item '>
                    Low 24H:
                    <span className=' text-dark badge pr-2 pl-2 rounded-pill bg-danger text-white font-weight-lighter'>
                      {' ' + fixNumbers(low_24h)}
                    </span>
                    $
                  </li>
                  <li className=' text-dark list-group-item'>
                    High 24H:
                    <span className=' text-dark badge rounded-pill bg-success pr-2 pl-2 text-white font-weight-lighter'>
                      {' ' + fixNumbers(high_24h)}
                    </span>
                    $
                  </li>
                  <li className=' text-dark list-group-item '>
                    {name}'s market cap:
                    {' ' + fixNumbers(market_cap)}$
                  </li>
                  <li className=' text-dark list-group-item'>
                    {name}'s market rank:
                    #{market_cap_rank}
                  </li>
                  <li className=' text-dark list-group-item'>
                    Current price for {name}:
                    <span className='text-primary'>
                      {fixNumbers(current_price)}
                    </span>
                    $
                  </li>
                  <li className=' text-dark list-group-item'>
                    Total volume:
                    <span className='text-warning'>
                      {fixNumbers(total_volume)}
                    </span>
                    $
                  </li>

                  <p className=' text-dark ml-auto mr-auto  mt-2'>
                    1D:
                    <span className='    p-2 badge badge-danger font-weight-light'>
                      {fixNumbers(dayPrice, 'en-us', 8)}$
                    </span>
                  </p>
                  <p className='   ml-auto mr-auto  mt-2'>
                    1H:
                    <span className=' p-2 badge badge-success font-weight-light'>
                      {fixNumbers(oneHourPrice, 'en-us', 8)}$
                    </span>
                  </p>
                </ul>
                <button
                  style={{ maxWidth: '18rem' }}
                  className='btn btn-dark mt-2 ml-auto mr-auto pl-5 pt-1 pb-1 pr-5 mb-4'
                  type='button'
                  onClick={() => nav(-1)}
                >
                  back
                </button>
              </article>
            );
          } else {
            return [];
          }
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Coin;
