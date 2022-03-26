import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';

const Loader = styled.div`
  text-align: center;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.cardColor};
  margin-bottom: 25px;
  > div:first-child {
    text-transform: uppercase;
    padding-bottom: 10px;
    align-self: center;
  }
  > div:last-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

interface IInfoItem {
  isUp?: boolean;
}

const InfoItem = styled.div<IInfoItem>`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  span:last-child {
    color: ${(props) =>
      props.isUp !== undefined ? (props.isUp ? '#EE5879' : '#96DF6C') : null};
  }
`;

interface IPriceInfo {
  id: string;
  name: string;
  beta_value: number;
  circulating_supply: number;
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

interface PriceProps {
  coinId: string;
}

const Price = () => {
  const { coinId } = useOutletContext<PriceProps>();
  const { isLoading, data } = useQuery<IPriceInfo>(['price', coinId], {
    refetchInterval: 10000,
  });
  const priceData = data?.quotes.USD;
  return (
    <>
      {isLoading ? (
        <Loader>Loading PriceInfo...</Loader>
      ) : (
        <>
          <InfoBox>
            <div>fluctuations</div>
            <div>
              <InfoItem
                isUp={priceData?.percent_change_12h! >= 0 ? true : false}
              >
                <span>12 hours</span>
                <span>{priceData?.percent_change_12h}%</span>
              </InfoItem>
              <InfoItem
                isUp={priceData?.percent_change_24h! >= 0 ? true : false}
              >
                <span>1 day</span>
                <span>{priceData?.percent_change_24h}%</span>
              </InfoItem>
              <InfoItem
                isUp={priceData?.percent_change_7d! >= 0 ? true : false}
              >
                <span>1 week</span>
                <span>{priceData?.percent_change_7d}%</span>
              </InfoItem>
              <InfoItem
                isUp={priceData?.percent_change_30d! >= 0 ? true : false}
              >
                <span>1 month</span>
                <span>{priceData?.percent_change_30d}%</span>
              </InfoItem>
            </div>
          </InfoBox>
          <InfoBox>
            <div>highest</div>
            <div>
              <InfoItem>
                <span>price</span>
                <span>$ {priceData?.ath_price.toLocaleString()}</span>
              </InfoItem>
              <InfoItem>
                <span>date</span>
                <span>{priceData?.ath_date.slice(0, 10)}</span>
              </InfoItem>
              <InfoItem
                isUp={priceData?.percent_from_price_ath! >= 0 ? true : false}
              >
                <span>from highest</span>
                <span>{priceData?.percent_from_price_ath}%</span>
              </InfoItem>
            </div>
          </InfoBox>
        </>
      )}
    </>
  );
};
export default Price;
