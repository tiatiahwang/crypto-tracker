import styled from 'styled-components';
import HomeBtn from './HomeBtn';
import ModeBtn from './ModeBtn';

const BarContainer = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 20px;
`;

const NavBar = () => {
  return (
    <BarContainer>
      <HomeBtn />
      <ModeBtn />
    </BarContainer>
  );
};

export default NavBar;
