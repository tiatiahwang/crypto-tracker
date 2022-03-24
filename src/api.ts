const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoinList = () => {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
};

export const fetchCoinInfo = (coinId: string) => {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json(),
  );
};

export const fetchPriceInfo = (coinId: string) => {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json(),
  );
};
