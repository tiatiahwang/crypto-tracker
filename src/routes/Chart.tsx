import ApexCharts from 'react-apexcharts';
import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { fetchCoinHistory } from '../api';
import { themeState } from '../recoil/atom';

const Loader = styled.div`
  text-align: center;
`;

interface IHistory {
  open: number;
  close: number;
  high: number;
  low: number;
  market_cap: number;
  time_open: string;
  time_close: string;
  volume: number;
}

interface ChartProps {
  coinId: string;
}

const Chart = () => {
  const isDark = useRecoilValue(themeState);
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistory[]>(['history', coinId], () =>
    fetchCoinHistory(coinId!),
  );
  return (
    <>
      {isLoading ? (
        <Loader>Loading Chart...</Loader>
      ) : (
        <ApexCharts
          type="candlestick"
          series={[
            {
              data: data?.map((price) => [
                new Date(price.time_open).getTime(),
                price.open > 100
                  ? price.open.toFixed(0)
                  : price.open.toFixed(6),
                price.high > 100
                  ? price.high.toFixed(0)
                  : price.high.toFixed(6),
                price.low > 100 ? price.low.toFixed(0) : price.low.toFixed(6),
                price.close > 100
                  ? price.close.toFixed(0)
                  : price.close.toFixed(6),
              ]) as [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? 'dark' : 'light',
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: '#EE5879',
                  downward: '#96DF6C',
                },
              },
            },
            chart: {
              height: 500,
              width: 500,
              background: 'transparent',
              toolbar: {
                show: false,
              },
            },
            yaxis: {
              labels: {
                formatter: (value) => `$ ${value.toLocaleString()}`,
              },
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: 'datetime',
            },
          }}
        />
      )}
    </>
  );
};
export default Chart;
