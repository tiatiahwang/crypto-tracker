import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoinList } from '../api';

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  color: ${({ theme }) => theme.accentColor};
`;

const Loader = styled.div``;

const Coins = styled.ul``;

const Coin = styled.li`
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.cardColor};
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 20px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

interface ICoin {
  id: string;
  is_new: boolean;
  is_active: boolean;
  name: string;
  symbol: string;
  rank: number;
  type: string;
}

const CoinList = () => {
  const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoinList);
  return (
    <Container>
      <Header>ALL COINS</Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {data?.slice(0, 100).map((coin) => {
            return (
              <Coins key={coin.id}>
                <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                  <Coin>{coin.name}</Coin>
                </Link>
              </Coins>
            );
          })}
        </>
      )}
    </Container>
  );
};

export default CoinList;
