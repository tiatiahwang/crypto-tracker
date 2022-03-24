import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from './routes/Chart';
import CoinDetail from './routes/CoinDetail';
import CoinList from './routes/CoinList';
import Price from './routes/Price';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoinList />} />
        <Route path="/:coinId" element={<CoinDetail />}>
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
