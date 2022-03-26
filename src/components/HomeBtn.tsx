import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IconContainer = styled.div`
  cursor: pointer;
  a:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;
const HomeBtn = () => {
  return (
    <IconContainer>
      <Link to="/">
        <AiOutlineHome size="20" />
      </Link>
    </IconContainer>
  );
};

export default HomeBtn;
