import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { NumericLiteral } from 'typescript';
import { fetchCoinInfo, fetchPriceInfo } from '../api';

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

const Loader = styled.div`
  text-align: center;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.cardColor};
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.div`
  margin: 25px 0px;
`;

const TabBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  border-radius: 10px;
  padding: 7px 0px;
  background-color: ${({ theme }) => theme.cardColor};
  a {
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

interface IRouterState {
  state: {
    name: string;
  };
}

interface ICoinInfo {
  id: string;
  rank: number;
  name: string;
  description: string;
  development_status: string;
  first_data_at: string;
  last_data_at: string;
  is_active: boolean;
  is_new: boolean;
  message: string;
  open_source: boolean;
  org_structure: string;
  proof_type: string;
  started_at: string;
  symbol: string;
  type: string;
}

interface IPriceInfo {
  id: string;
  name: string;
  beta_value: number;
  circulating_supply: NumericLiteral;
  max_supply: number;
  total_supply: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const CoinDetail = () => {
  const { coinId } = useParams();
  const { state } = useLocation() as IRouterState;
  const { isLoading: infoLoading, data: infoData } = useQuery<ICoinInfo>(
    ['info', coinId],
    () => fetchCoinInfo(coinId!),
  );
  const { isLoading: priceLoading, data: priceData } = useQuery<IPriceInfo>(
    ['price', coinId],
    () => fetchPriceInfo(coinId!),
  );
  const loading = infoLoading || priceLoading;
  return (
    <Container>
      <Header>
        {state?.name ? state.name : loading ? 'Loading...' : infoData?.name}
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <InfoBox>
            <InfoItem>
              <span>rank</span>
              <span>{infoData?.rank}</span>
            </InfoItem>
            <InfoItem>
              <span>symbol</span>
              <span>{infoData?.symbol}</span>
            </InfoItem>
            <InfoItem>
              <span>open source</span>
              <span>{infoData?.open_source ? 'YES' : 'NO'}</span>
            </InfoItem>
          </InfoBox>
          <Description>{infoData?.description}</Description>
          <InfoBox>
            <InfoItem>
              <span>total supply</span>
              <span>{priceData?.total_supply.toLocaleString()}</span>
            </InfoItem>
            <InfoItem>
              <span>max supply</span>
              <span>{priceData?.max_supply.toLocaleString()}</span>
            </InfoItem>
          </InfoBox>
          <TabBox>
            <Tab>Price</Tab>
            <Tab>Chart</Tab>
          </TabBox>
        </>
      )}
    </Container>
  );
};

export default CoinDetail;
