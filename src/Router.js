import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoinDetail from './routes/CoinDetail';
import CoinList from './routes/CoinList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoinList />} />
        <Route path="/:coinId" element={<CoinDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
