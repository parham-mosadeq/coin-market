import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Style
import style from '../css/market.module.css';
// Functions
import { fixNumbers } from '../services/functions';

const market = ({ id, name, image, low_24h, high_24h }) => {
  return (
    <div className={(style.resp, 'container')}>
      <div className={style.container}>
        <Link className={style.imgContainer} to={`/markets/${id}`}>
          <img src={image} alt={name} className='card-img-top' />
        </Link>
        <div>
          <p className={style.name}>
            Name:
            <Link to={`/markets/${id}`}> {name}</Link>
          </p>
          <p className={style.data}>
            -24H:{' '}
            <span className='badge rounded-pill bg-danger text-white font-weight-light'>
              {fixNumbers(low_24h)}$
            </span>
          </p>
          <p className={style.data}>
            +24H:
            <span className='badge rounded-pill bg-success text-white font-weight-light letter-spacing'>
              {' '}
              {fixNumbers(high_24h)}$
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default market;
