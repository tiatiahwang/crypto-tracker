import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { MdOutlineLightMode, MdOutlineModeNight } from 'react-icons/md';
import { themeState } from '../recoil/atom';

const IconContainer = styled.div`
  cursor: pointer;
  text-align: right;
  padding-top: 20px;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Mode = () => {
  const isDark = useRecoilValue(themeState);
  const setIsDark = useSetRecoilState(themeState);
  const toggleTheme = () => setIsDark((prev) => !prev);
  return (
    <IconContainer onClick={toggleTheme}>
      {isDark ? (
        <MdOutlineLightMode size="20" />
      ) : (
        <MdOutlineModeNight size="20" />
      )}
    </IconContainer>
  );
};

export default Mode;
