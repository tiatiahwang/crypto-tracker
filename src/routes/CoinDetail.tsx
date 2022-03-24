import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

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

interface IRouterState {
  state: {
    name: string;
  };
}

const CoinDetail = () => {
  const { state } = useLocation() as IRouterState;
  return (
    <Container>
      <Header>{state.name}</Header>
    </Container>
  );
};

export default CoinDetail;
