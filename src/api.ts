const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoinList = () => {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
};
