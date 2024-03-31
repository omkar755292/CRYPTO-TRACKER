import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

export const CoinList = (currency) =>
  api.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);

export const SingleCoin = (id) =>
  api.get(`/coins/${id}`);

export const HistoricalChart = (id, days = 365, currency) =>
  api.get(`/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`);

export const TrendingCoins = (currency) =>
  api.get(`/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);