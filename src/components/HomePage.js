import React from 'react';
// Style
import style from '../css/homepage.module.css';
// React Icons

import { FaGithub, FaLinkedin } from 'react-icons/fa';
const HomePage = () => {
  return (
    <div className={'container'}>
      <header className={style.header}>
        <h1 className={style.title}>
          cryptocurrencies{' '}
          <span className={style.lastSpan}>and exchanges, </span>
          <span className={style.firstSpan}>all in one place </span>
          <span>just for you:)</span>
        </h1>
      </header>

      <footer className={style.footer}>
        <ul className='nav'>
          <li className='nav-item'>
            <a
              className='nav-link active'
              href='https://github.com/parham-mosadeq'
            >
              <FaGithub />
            </a>
          </li>

          <li className='nav-item'>
            <a
              className='nav-link active'
              href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default HomePage;
