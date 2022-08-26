import axios from 'axios';

const MARKETS_URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y';

const EXCHANGE_URL = 'https://api.coingecko.com/api/v3/exchanges?per_page=200';

export const getMarkets = async () => {
  const resp = await axios.get(`${MARKETS_URL}`);
  return resp.data;
};

export const getExchanges = async () => {
  const resp = await axios.get(`${EXCHANGE_URL}`);
  return resp.data;
};
