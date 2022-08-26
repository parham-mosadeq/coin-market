import React, { useContext, useState, useRef, useEffect } from 'react';
// Context
import { exchangesContext } from '../context/GetDataContext';
// Component
import Loading from './Loading';
// functions
import { fixNumbers } from '../services/functions';
// Style
import styled from 'styled-components';

// Input styles
const Input = styled.input`
  width: 40%;
  margin: 3rem auto;
  display: block;
  border: none;
  border-radius: 9px;
  transition: all 0.3s linear;
  padding: 0.345rem 0.6rem;
  text-align: center;
  border-bottom: 1px solid gray;
  text-transform: capitalize;

  :focus {
    box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.5);
    outline: none;
  }

  ::placeholder {
    color: #007bff;
    letter-spacing: 1.4px;
  }

  @media (min-width: 375px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

// Main Container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 375px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 500px) {
  }

  @media (min-width: 792px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
  }
`;

// Section styles

const Section = styled.section`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  margin: 2rem;
  padding: 2rem;
  border-radius: 9px;
  transition: box-shadow 0.3s ease;
  :hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  }

  @media (min-width: 500px) {
    max-width: 90vw;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 500px;
  width: 500px;
  text-transform: capitalize;

  img {
    border-radius: 50%;
    width: 75px;
    height: 75px;
    object-fit: cover;
    margin-bottom: 1rem;
  }
`;

const Info = styled.div`
  h3 {
    margin: 1rem 0;
    border-radius: 4px;
    padding-bottom: 0.5rem;
    letter-spacing: 1.2px;
  }

  h4 {
    letter-spacing: 1.4px;
    padding-bottom: 0.3rem;
  }
  h4 span {
    color: #00244a;
    font-weight: 600;
  }
  p {
    letter-spacing: 1.2px;
  }

  p span {
    color: #396798;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

const Exchanges = () => {
  const exchanges = useContext(exchangesContext);

  const [search, setSearch] = useState('');

  const inputRef = useRef();

  const searcher = exchanges.filter((item) =>
    item.name.toLocaleLowerCase().includes(search)
  );

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <Input
        type='text'
        placeholder='search by name'
        value={search}
        onChange={(e) => setSearch(e.target.value.trim().toLocaleLowerCase())}
        ref={inputRef}
      />
      <Container>
        {exchanges.length > 0 ? (
          searcher.map((exchange) => {
            const {
              country,
              description,
              id,
              name,
              trade_volume_24h_btc,
              trust_score,
              trust_score_rank,
              url,
              year_established,
              image,
            } = exchange;

            return (
              <Section key={id}>
                {/* exchange start */}
                <Article>
                  <div>
                    <img src={image} alt={name} />
                  </div>
                  <Info>
                    <h3>{name}</h3>
                    <h4>
                      origin: <span>{country} </span>
                    </h4>
                    <p>year established :{year_established}</p>
                    <span>{description ? description : 'no description'}</span>
                    <p>global rank: {trust_score_rank}</p>
                    <span> trust score: {trust_score}</span>
                    <Links>
                      <p>website</p>
                      <a href={url}>
                        {name} <i className='fa fa-hashtag'></i>
                      </a>
                    </Links>
                    <p>
                      traded volume in 24 hours (btc):
                      <span>
                        {' '}
                        {fixNumbers(trade_volume_24h_btc, 'us-En', 8)}$
                      </span>
                    </p>
                  </Info>
                </Article>

                {/* exchange end */}
              </Section>
            );
          })
        ) : (
          <Loading />
        )}
      </Container>
    </>
  );
};

export default Exchanges;
